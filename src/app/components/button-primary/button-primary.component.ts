import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss',
})
export class ButtonPrimaryComponent {
  @Input('btn-text') btnText: string = '';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() variant = BtnVariants = ;
  @Output('submit') onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
