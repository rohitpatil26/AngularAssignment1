import { Http } from '@angular/http';
import { Subject, Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class UserDataService {
    totalRows:number = 0;
    dataList: any[] = [];
    activated=new Subject();
    sorts=new Subject();
    constructor(private http:Http){
        
      }

      getList(): Observable<any>{
        return this.http.get("https://api.github.com/users");
    }

    getListByName(name:string): Observable<any>{
       // return this.http.get("https://api.github.com/users/"+name+"/repos");
       return this.http.get("https://api.github.com/search/users?q="+name);
    }
    

    
}