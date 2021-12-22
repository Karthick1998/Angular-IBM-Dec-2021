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

  constructor(private bugOperations : BugOperations) { }

  ngOnInit(): void {
  }

  getTruncatedString(str : string){
    console.log('getTruncatedString triggered');
    return str.length > 30 ? str.slice(0, 30) + '...' : str;
  }

  addBug(newBugName : string) {

    const newBug : Bug = this.bugOperations.createNew(newBugName);
    this.bugs.push(newBug);
  }

  removeBug(bug : Bug){
    this.bugs.splice(this.bugs.indexOf(bug), 1)
  }

  toggle(bug : Bug){
    this.bugOperations.toggle(bug);
  }

  removeClosed(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed);
  }

  getClosedCount() : number {
    //return this.bugs.filter(bug => bug.isClosed).length;
    return this.bugs.reduce((closedCount, bug) => closedCount + (bug.isClosed ? 1 : 0), 0);
  }
}
