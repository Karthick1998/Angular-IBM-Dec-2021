import { Component, OnInit } from '@angular/core';
import { SalaryCalculatorModel } from './salaryCalculatorModel';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {

  model = new SalaryCalculatorModel();
  
  constructor() { }

  ngOnInit(): void {
  }

}
