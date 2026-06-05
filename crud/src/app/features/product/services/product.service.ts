import { Injectable } from '@angular/core';
import { Products } from '../model/Product-model';



@Injectable({
  providedIn: 'root',
})
export class ProductService {


  private productList: Products[] = [];

  private nextId: number = 1;

  public getAll() {
    return this.productList;
  }

  public getByCode(id: number) {
    const productFinded = this.productList.find(product => product.id === id);
    return productFinded;
  }



  public createProduct(objectCreate: Products) {
    const nuevoProducto: Products = {
      id: this.nextId,
      name: objectCreate.name,
      price: objectCreate.price,
    }
    this.productList.push(nuevoProducto)

    this.nextId++
  }

  public updateProduct(objectCreate: Products) {
    const index = this.productList.findIndex(product => product.id === objectCreate.id);

    if (index !== -1) {
      this.productList[index] = {
        id: objectCreate.id,
        name: objectCreate.name,
        price: objectCreate.price
      };
    }
  }

  public deleteProduct(id: number) {
    const productLists = this.productList.filter(product => product.id !== id)
    this.productList = productLists;
  }
}