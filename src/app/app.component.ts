import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PRODUCTS } from 'src/data/products';
import type { Product } from 'src/models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, CommonModule, ProductCardComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[] = PRODUCTS;

  constructor(private alertCtrl: AlertController) {}

  async mostrarDetalle(product: Product) {
    const alert = await this.alertCtrl.create({
      header: product.name,
      message: `Precio: $${product.price} 
      ${product.description ?? ''}`,
      buttons: ['Cerrar']
    });
    await alert.present();
  }
}
