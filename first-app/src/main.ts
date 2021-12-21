import {enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//ES6 Modules

//importing the module object
/* 
import * as calc from './calculator'
console.log(calc.add(100,200)) 
*/

/* 
import * as calc from './calculator'
const add = calc.add;
console.log(add(100,200)) 
*/

/* 
import * as calc from './calculator'
const { add } = calc;
console.log(add(100,200))  
*/

/* 
import { add } from './calculator'
console.log(add(100,200))  
*/
/*
//importing the default entity
import calcUtils from './calculator'
console.log(calcUtils) 
*/

//combine importing the default * other entities
/* import calcUtils, { add } from './calculator'
console.log(calcUtils)
console.log(add(100,200)) */