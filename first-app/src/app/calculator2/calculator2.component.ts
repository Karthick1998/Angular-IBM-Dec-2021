import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {
  _n1 : number = 0;
  _n2 : number = 0;
  operation : string = ''

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

  onBtnCalculateClick(){
    switch (this.operation) {
      case 'add':
        this.result = this._n1 + this._n2
        break;
      case 'subtract':
        this.result = this._n1 - this._n2
        break;
      case 'multiply':
        this.result = this._n1 * this._n2
        break;
      case 'divide':
        this.result = this._n1 / this._n2
        break;
    
      default:
        break;
    }
  }
}
