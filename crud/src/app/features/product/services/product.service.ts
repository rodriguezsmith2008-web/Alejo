import { Injectable } from '@angular/core';
import { Products } from '../model/Product-model';



@Injectable({
  providedIn: 'root',
})
export class ProductService {

  
  private productList: Products[] = [
    {
      id:1,
      name: "jabon",
      price: 2000,
    
    },
    {
      id:2,
      name: "Chicle",
      price: 500,
    }
  ];

  private nextId: number = 3;

  public getAll() {
    return this.productList;
  }

  public getByCode(id: number) {
    const productFinded = this.productList.find(product => product.id === id);
    return productFinded;
  }



  public createProduct(objectCreate:Products){
    const nuevoProducto: Products = {
      id:this.nextId,
      name:objectCreate.name,
      price:objectCreate.price,
    }
    this.productList.push(nuevoProducto)

    this.nextId++
  }

  public deleteProduct(id:number){
    const productLists = this.productList.filter(product => product.id!==id)
    this.productList = productLists;
  }
}