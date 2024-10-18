import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

const MENU_ITEMS = [
  'Collections', 'Men', 'Women', 'About', 'Contact'
]
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    CartComponent
  ],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  isOpen: boolean = false;
  menuItems = MENU_ITEMS;
  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
