import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  message : string = '[Default greet message]';

  constructor() { }

  ngOnInit(): void {
  }

  onBtnGreetClick(){
    //console.log('greet button clicked!')
    this.message = 'greet button clicked';
  }

}
