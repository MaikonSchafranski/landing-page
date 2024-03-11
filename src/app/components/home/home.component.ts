import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BenefitComponent } from '../benefit/benefit.component';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent, BenefitComponent, ButtonPrimaryComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
