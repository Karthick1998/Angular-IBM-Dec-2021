import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperations } from './services/bugOperations.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  bugs : Bug[] = [];
  newBugName : string = '';
  sortAttr : string = '';
  descending : boolean = false;

  constructor(private bugOperations : BugOperations) { }

  ngOnInit(): void {
    
  }

  

  addBug(newBugName : string) {

    const newBug : Bug = this.bugOperations.createNew(newBugName);
    //this.bugs.push(newBug);
    this.bugs = [...this.bugs, newBug];
  }

  removeBug(bugToRemove : Bug){
    //this.bugs.splice(this.bugs.indexOf(bug), 1)
    this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
  }

  toggle(bugToToggle : Bug){
    const toggledBug = this.bugOperations.toggle(bugToToggle);
    this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
  }

  removeClosed(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed);
  }
}
