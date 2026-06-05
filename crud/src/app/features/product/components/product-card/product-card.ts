import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from '../../model/Product-model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  @Output() enviarUpdate =  new EventEmitter<Products>();
  @Input() product!: Products;
  @Output() enviar = new EventEmitter<number>();



  sendId(){
    this.enviar.emit(this.product.id);
  }

  update(){
    this.enviarUpdate.emit(this.product)
  }

}
