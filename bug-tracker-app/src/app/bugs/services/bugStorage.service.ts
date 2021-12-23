import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";

@Injectable({
    providedIn: 'root'
})
export class BugStorageService{
    private _currentBugId: number = 0;
    private storage : Storage = window.localStorage;
    private slug = 'bug-';

    getAll() : Bug[]{
        const result : Bug[] = [];
        for (let index = 0; index < this.storage.length; index++){
            const key = this.storage.key(index);
            if (key && key.startsWith(this.slug)){
                const rawData = this.storage.getItem(key),
                    bug = JSON.parse(rawData || '');
                result.push(bug);
                this._currentBugId = this._currentBugId > bug.id ? this._currentBugId : bug.id;
            }
        }
        return result;
    }

    save(bug: Bug) {
        if (bug.id === 0){
            bug.id = ++this._currentBugId;
        }
        this.storage.setItem(this.getBugKey(bug.id), JSON.stringify(bug));
    }

    private getBugKey(id : number){
        return `${this.slug}${id}`
    }

    remove(bug: Bug) {
        this.storage.removeItem(this.getBugKey(bug.id));
    }
}