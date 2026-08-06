# Two stages: Node builds the bundle, then a PHP/Apache image serves it and
# runs the contact form script. Both base images are pinned by digest — a tag
# is a moving target, and the same commit should build the same image later.

# ---------------------------------------------------------------- build stage
FROM node:22-alpine@sha256:c610fcdfb1d5b4740dd70c284ed3cb16bb857e0f7166196e36a5501df7a3aa32 AS build

WORKDIR /app

# Copied first so the dependency layer is reused while only sources change.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------------------------------------------------------------- serve stage
FROM php:8.3-apache@sha256:bcf7ac6941725b08123df2732065b8ede097ed0977ba2891b411654efb35cc23

# PHP's mail() shells out to sendmail, which this image does not ship. msmtp
# stands in for it and relays through a real, authenticated SMTP account —
# without it mail() just returns false and the form reports a failure.
RUN apt-get update \
 && apt-get install -y --no-install-recommends msmtp ca-certificates \
 && rm -rf /var/lib/apt/lists/*

# -C points at the config the entrypoint writes; -t makes msmtp read the
# recipient from the message headers, which is what mail() produces.
RUN a2enmod rewrite headers \
 && printf 'sendmail_path = "/usr/bin/msmtp -C /etc/msmtprc -t"\n' \
      > /usr/local/etc/php/conf.d/mail.ini

# Angular writes into dist/<project>/browser — not dist/ itself.
COPY --from=build /app/dist/portfolio_dev/browser/ /var/www/html/
COPY sendMail.php /var/www/html/

COPY docker/spa.conf /etc/apache2/conf-available/spa.conf
RUN a2enconf spa

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Checks that Apache actually answers, not merely that the process is alive.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD php -r 'exit(@file_get_contents("http://127.0.0.1/index.html") === false ? 1 : 0);'

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["apache2-foreground"]
