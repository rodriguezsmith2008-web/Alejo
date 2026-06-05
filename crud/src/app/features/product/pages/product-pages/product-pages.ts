import { Component } from '@angular/core';

@Component({
  selector: 'app-product-pages',
  standalone: false,
  templateUrl: './product-pages.html',
  styleUrl: './product-pages.scss',
})
export class ProductPages {
  productoEditar: any = null;

  recibirProducto(product: any) {
    this.productoEditar = product;
  }
}
