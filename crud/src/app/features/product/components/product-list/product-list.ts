import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../model/Product-model';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {


public productos: Products[]= [];

constructor(private product:ProductService){}

ngOnInit(): void {
  this.productos = this.product.getAll();
}

sendId(id:number){
  const nuevaLista = this.product.deleteProduct(id);
  this.productos = this.product.getAll();
}

@Output() productoSeleccionado = new EventEmitter<Products>();

onSeleccionar(product: Products) {
  this.productoSeleccionado.emit(product);
}

}
