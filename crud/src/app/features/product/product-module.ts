import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPages } from './pages/product-pages/product-pages';
import { ProductCard } from './components/product-card/product-card';
import { ProductList } from './components/product-list/product-list';
import { ProductForm } from './components/product-form/product-form';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductPages,
    ProductCard,
    ProductList,
    ProductForm
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
    ProductPages
  ]
})
export class ProductModule { }
