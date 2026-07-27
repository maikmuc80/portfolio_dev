import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/translation-service';

type SendState = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly http = inject(HttpClient);
  protected readonly t = inject(TranslationService).t;

  /** Mail script in the web root, same origin as the site — no CORS needed. */
  private readonly endpoint = 'sendMail.php';

  protected readonly model = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  readonly state = signal<SendState>('idle');

  onSubmit(form: NgForm): void {
    if (form.invalid || this.state() === 'sending') {
      form.control.markAllAsTouched();
      return;
    }

    this.state.set('sending');

    // text instead of json: the PHP script answers with a plain line of text.
    this.http
      .post(
        this.endpoint,
        { name: this.model.name, email: this.model.email, message: this.model.message },
        { responseType: 'text' },
      )
      .subscribe({
        next: () => {
          this.state.set('sent');
          form.resetForm();
        },
        error: () => this.state.set('error'),
      });
  }

  /** An old response disappears as soon as the visitor types again. */
  dismissFeedback(): void {
    if (this.state() === 'sent' || this.state() === 'error') {
      this.state.set('idle');
    }
  }
}
