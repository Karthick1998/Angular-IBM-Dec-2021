import { Injectable } from "@angular/core";
import { Bug } from '../models/bug';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class BugApiService{
    private endPoint = environment.serviceEndPoints.bugs;
    constructor(private http : HttpClient){

    }
    getAll() : Observable<Bug[]>{
        return this.http.get<Bug[]>(this.endPoint);
    }

    save(bug : Bug) : Observable<Bug>{
        if (bug.id === 0){
            return this.http.post<Bug>(this.endPoint, bug);
        } else {
            return this.http.put<Bug>(`${this.endPoint}/${bug.id}`, bug);
        }
    }

    remove(bug : Bug) : Observable<any>{
        return this.http.delete<any>(`${this.endPoint}/${bug.id}`);
    }
}