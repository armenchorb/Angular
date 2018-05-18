import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  allProducts:any;
  constructor(
    private _router: Router, 
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.allProducts = [];
    this.getAllProducts();
  }

  getAllProducts(){
    this._httpService.serviceGetAllProducts()
    .subscribe(data=>{
      this.allProducts = data;
    })
  }

}
