import { Injectable } from '@angular/core';
import { Bug } from '../models/bug';
import { BugStorageService } from './bugStorage.service';

@Injectable({
    providedIn: 'root'
})
export class BugOperations{
    
    constructor(private bugStorage : BugStorageService){

    }
    getAll() : Bug[] {
        return this.bugStorage.getAll();
    }
    createNew(bugName : string) : Bug{
        const newBug : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugStorage.save(newBug);
        return newBug;
    }

    toggle(bugToToggle: Bug) : Bug {
      const toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
      this.bugStorage.save(toggledBug)
      return toggledBug;
    }

    remove(bug : Bug){
        this.bugStorage.remove(bug);
    }
}