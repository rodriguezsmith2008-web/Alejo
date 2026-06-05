import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../model/Product-model';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductForm {
  name: string = "";
  price: number = 0;

  constructor(private service: ProductService) { }

  create() {
    const product: Products = {
      id: 0,
      name: this.name,
      price: this.price,
    }
    this.service.createProduct(product)
    this.name = "";
    this.price = 0;
  }
}
