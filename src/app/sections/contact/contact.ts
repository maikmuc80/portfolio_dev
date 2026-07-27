import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly t = inject(TranslationService).t;

  protected readonly model = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  readonly sent = signal(false);

  /**
   * Es gibt noch keinen Versand — dafür fehlt die Anbindung an einen
   * Mail-Dienst oder ein Backend. Das Formular validiert und quittiert nur.
   */
  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.sent.set(true);
    form.resetForm();
  }
}
