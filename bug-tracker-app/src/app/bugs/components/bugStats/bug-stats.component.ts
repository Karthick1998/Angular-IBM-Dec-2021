import { Component, Input } from "@angular/core";
import { Bug } from "../../models/bug";

@Component({
    selector : 'app-bug-stats',
    template : `
        <section class="stats">
            <span class="closed">{{bugs | closedCount}}</span>
            <span> / </span>
            <span>{{bugs.length}}</span>
        </section>
    `,
    styleUrls : ['bug-stats.component.css']
})
export class BugStatsComponent{
    @Input('data')
    bugs : Bug[] = []
}