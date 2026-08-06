import { Component } from '@angular/core';

/** The MR brand mark. Purely presentational — the link that wraps it carries
    the accessible name, so the SVG stays aria-hidden. */
@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {}
