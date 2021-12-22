import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  private _currentBugId : number = 0;

  bugs : Bug[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addBug(newBugName : string) {

    const newBug : Bug = {
      id : ++this._currentBugId,
      name : newBugName,
      isClosed : false,
      createdAt : new Date()
    }
    this.bugs.push(newBug);
  }
  removeBug(bug : Bug){
    this.bugs.splice(this.bugs.indexOf(bug), 1)
  }

  toggle(bug : Bug){
    bug.isClosed = !bug.isClosed;
  }

  removeClosed(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed);
  }

  getClosedCount(){
    //return this.bugs.filter(bug => bug.isClosed).length;
    return this.bugs.reduce((closedCount, bug) => closedCount + (bug.isClosed ? 1 : 0), 0);
  }
}
