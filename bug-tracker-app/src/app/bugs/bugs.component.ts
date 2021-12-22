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
    this.bugs.push(this.bugOperations.createNew('Server communication failure'));
    const b1 = this.bugOperations.createNew('Data integrity checks failed')
    this.bugOperations.toggle(b1);
    this.bugs.push(b1);
    const b2 = this.bugOperations.createNew('User actions not recognised')
    this.bugOperations.toggle(b2);
    this.bugs.push(b2);
    this.bugs.push(this.bugOperations.createNew('Application not responding'));
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
    console.log('getClosedCount triggered')
    //return this.bugs.filter(bug => bug.isClosed).length;
    return this.bugs.reduce((closedCount, bug) => closedCount + (bug.isClosed ? 1 : 0), 0);
  }
}
