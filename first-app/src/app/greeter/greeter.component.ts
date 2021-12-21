import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  message : string = '[Default greet message]';
  lastName : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onBtnGreetClick(firstName : string){
    //console.log('greet button clicked!')
    this.message = `Hi ${firstName} ${this.lastName}, Have a nice day!`;
  }

  setLastName(lastName : string){
    console.log(`setting last name: ${lastName}`)
    this.lastName = lastName;
  }

}
