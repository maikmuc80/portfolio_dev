import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  name = '';
  message = '';
  sent = signal(false);

  onSubmit() {
    console.log('Nachricht von', this.name, ':', this.message);
    this.sent.set(true);
  }
}