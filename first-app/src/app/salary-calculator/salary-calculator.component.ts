import { Component, OnInit } from '@angular/core';
import { SalaryCalculatorModel } from './salaryCalculatorModel';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {

 
  /* public model : SalaryCalculatorModel;
  
  constructor(model : SalaryCalculatorModel) {
    this.model = model;
  }  */
 

  constructor(public model : SalaryCalculatorModel){
    
  }

  ngOnInit(): void {
  }

}
