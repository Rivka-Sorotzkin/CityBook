import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor(private http: HttpClient) { }
  public AddUser(user:User): Observable<any>{
    console.log(user);
    return this.http.post("http://localhost:65445/api/User",user);
  }
  // public GetUser(): Observable<any>{
  //   return this.http.get("http://localhost:65445/api/User");
  // }
}
