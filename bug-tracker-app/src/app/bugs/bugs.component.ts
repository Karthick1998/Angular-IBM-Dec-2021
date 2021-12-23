import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bugOperations.service';

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

  constructor(private bugOperations : BugOperationsService) { }

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
  }
}
