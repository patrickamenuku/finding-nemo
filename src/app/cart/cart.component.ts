import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../services/services.service';
import { tap } from 'rxjs';

export interface Cart {
  items: CartItem[];
}

export interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cart: Cart = {
    items: []
  };
  isOpen: boolean = false;
  total: number = 0;

  cartContent$;

  constructor(private cartSrv: CartService) {
    // Initialize cartContent$ and explicitly type the parameter 'c' as 'Cart'
    this.cartContent$ = this.cartSrv.cart$
      .pipe(
        tap((c: Cart) => this.total = c.items.reduce((a, v) => a + v.quantity, 0))
      );

    this.cartContent$.subscribe((c: Cart) => this.cart = c);
  }

  toggleCart(): void {
    this.isOpen = !this.isOpen;
  }

  removeFromCart(id: number): void {
    this.cartSrv.removeFromCart(id);
  }
}
