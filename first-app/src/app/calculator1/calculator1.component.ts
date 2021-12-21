import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.css']
})
export class Calculator1Component implements OnInit {

  _n1 : number = 0;
  _n2 : number = 0;

  result : number = 0;

  set n1(value : string){
    this._n1 = parseInt(value)
  }

  get n1() : string {
    return this._n1.toString();
  }

  set n2(value : string){
    this._n2 = parseInt(value)
  }

  get n2() : string {
    return this._n2.toString();
  }

  constructor() { }

  ngOnInit(): void {
  }

  onBtnAddClick(){
    this.result = this._n1 + this._n2;
  }

  onBtnSubtractClick(){
    this.result = this._n1 - this._n2;
  }

  onBtnMultiplyClick(){
    this.result = this._n1 * this._n2;
  }

  onBtnDivideClick(){
    this.result = this._n1 / this._n2;
  }
}
