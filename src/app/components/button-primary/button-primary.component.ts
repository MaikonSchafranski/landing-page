import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type BtnVariants = 'primary' | 'secondary';
@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss',
})
export class ButtonPrimaryComponent {
  @Input('btn-text') btnText: string = '';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() variant: BtnVariants = 'primary';
  @Output('submit') onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
