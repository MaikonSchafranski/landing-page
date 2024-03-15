import { Component } from '@angular/core';
import { text } from 'stream/consumers';
import { FormTextComponent } from '../form-text/form-text.component';
import { FormUserComponent } from '../form-user/form-user.component';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormTextComponent, FormUserComponent, ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {}
