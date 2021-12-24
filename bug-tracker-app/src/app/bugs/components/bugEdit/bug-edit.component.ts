import { Component, EventEmitter, Output } from '@angular/core';
import { Bug } from '../../models/bug';
import { BugOperationsService } from "../../services/bugOperations.service";

@Component({
    selector : 'app-bug-edit',
    template : `
        <section class="edit">
            <label for="">Bug Name :</label>
            <input type="text" (input)="newBugName = $any($event.target).value" >
            <span> [ {{newBugName.length}} ] </span>
            <button (click)="addBug(newBugName)">Add New</button>
        </section>
    `
})
export class BugEditComponent{
    newBugName : string = '';

    @Output()
    public bugAdded : EventEmitter<Bug> = new EventEmitter<Bug>();

    constructor(private bugOperations : BugOperationsService) {

    }
    addBug(newBugName : string) {

        /* const newBug : Bug = this.bugOperations.createNew(newBugName);
        this.bugAdded.emit(newBug); */
        this.bugOperations
            .createNew(newBugName)
            .subscribe(newBug => this.bugAdded.emit(newBug));
    }
}