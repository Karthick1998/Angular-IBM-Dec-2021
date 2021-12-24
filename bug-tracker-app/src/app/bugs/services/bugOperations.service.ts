import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from '../models/bug';
//import { BugStorageService } from './bugStorage.service';
import { BugApiService } from './bugApi.service';
@Injectable({
    providedIn: 'root'
})
export class BugOperationsService{
    
    constructor(private bugApi : BugApiService){

    }
    getAll() : Observable<Bug[]> {
        return this.bugApi.getAll();
    }
    createNew(bugName : string) : Observable<Bug>{
        const newBug : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        return this.bugApi.save(newBug);
    }

    toggle(bugToToggle: Bug) : Observable<Bug> {
      const toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
      return this.bugApi.save(toggledBug)
    }

    remove(bug : Bug) : Observable<any>{
        return this.bugApi.remove(bug);
    }
}
/* export class BugOperationsService{
    
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
} */