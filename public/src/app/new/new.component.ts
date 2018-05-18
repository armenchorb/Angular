import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product:any;
  errors:any;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService,
  ) {
    this.product = {name: "", quantity: "", price: ""}
  }

  ngOnInit() {
    this.errors = [];
  }

  addProduct(){
    this._httpService.serviceAddProduct(this.product)
    .subscribe(data=>{
      if(data['errors']){
        this.errors = data['errors'];
      }else{
        this._router.navigate(['/products', data['_id']]);
      }
      console.log(data);
    })
  }
}
