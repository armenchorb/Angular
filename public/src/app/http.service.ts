import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { discardPeriodicTasks } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  serviceGetAllProducts(){
    return this._http.get('/api/products');
  }
  serviceAddProduct(product){
    return this._http.post('/api/products', product);
  }
  serviceGetProduct(id){
    return this._http.get('api/product/' + id);
  }
  serviceDeleteProduct(id){
    return this._http.delete('api/product/' + id);
  }
  serviceUpdateProduct(product){
    return this._http.put('/api/product/' + product._id, product);
  }

}
