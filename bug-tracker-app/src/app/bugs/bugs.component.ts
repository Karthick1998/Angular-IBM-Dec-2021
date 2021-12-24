import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bugOperations.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css'],
  encapsulation: ViewEncapsulation.None /* to allow the child components to inherit the styles */
})
export class BugsComponent implements OnInit {

  bugs : Bug[] = [];
  
  sortAttr : string = '';
  descending : boolean = false;

  //using bugOperations -> bugApi (asynchronous)
   constructor(private bugOperations : BugOperationsService) {

   }

  ngOnInit(): void {
    this.bugOperations
      .getAll()
      .subscribe(bugs => this.bugs = bugs);
  }

  onNewBugAdded(newBug : Bug){
    this.bugs = [...this.bugs, newBug];
  }

  removeBug(bugToRemove : Bug){
    //this.bugs.splice(this.bugs.indexOf(bug), 1)
    //this.bugOperations.remove(bugToRemove);
    this.bugOperations
      .remove(bugToRemove)
      .subscribe(() => this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id));
  }

  toggle(bugToToggle : Bug){
    this.bugOperations
      .toggle(bugToToggle)
      .subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug))
    
  }

  removeClosed(){
    this.bugs
      .filter(bug => bug.isClosed)
      .forEach(closedBug => this.removeBug(closedBug));
  }


  //using bugOperations -> bugStorage (synchronous)
 /*  constructor(private bugOperations : BugOperationsService) {

   }

  ngOnInit(): void {
    this.bugs = this.bugOperations.getAll();
  }

  onNewBugAdded(newBug : Bug){
    this.bugs = [...this.bugs, newBug];
  }

  removeBug(bugToRemove : Bug){
    //this.bugs.splice(this.bugs.indexOf(bug), 1)
    this.bugOperations.remove(bugToRemove);
    this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
  }

  toggle(bugToToggle : Bug){
    const toggledBug = this.bugOperations.toggle(bugToToggle);
    this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
  }

  removeClosed(){
    this.bugs
      .filter(bug => bug.isClosed)
      .forEach(closedBug => this.removeBug(closedBug));
  } */
}
