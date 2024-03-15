import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [ButtonPrimaryComponent],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss',
})
export class FormUserComponent {}
