import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector : 'app-bug-sort',
    template : `
        <section class="sort">
            <label for="">Order By :</label>
            <select name="" id="" (change)="sortAttrChange.emit($any($event.target).value)">
                <option value="">---Select---</option>
                <option value="id">Id</option>
                <option value="name">Name</option>
                <option value="isClosed">Status</option>
                <option value="createdAt">Created</option>
            </select>
            <label for="">Descending ? :</label>
            <input type="checkbox" name="" id="" (change)="sortOrderChange.emit($any($event.target).checked)">
            <button>Sort</button>
        </section>
    `
})
export class BugSortComponent{
    @Output()
    sortAttrChange : EventEmitter<string> = new EventEmitter<string>();

    @Output()
    sortOrderChange : EventEmitter<boolean> = new EventEmitter<boolean>();

}