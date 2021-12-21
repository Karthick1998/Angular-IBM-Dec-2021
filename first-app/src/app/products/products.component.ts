import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : string[] = [
    
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onBtnAddProductClick(newProductName : string){
    this.products.push(newProductName);
  }

  onBtnRemoveProductClick(productName : string){
    this.products.splice(this.products.indexOf(productName),1);
  }
}
