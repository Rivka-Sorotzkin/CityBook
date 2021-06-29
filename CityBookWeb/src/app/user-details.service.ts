import { Injectable } from '@angular/core';
import {User} from './User';
import { Child } from './Child';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
// firstName:string="";
User:User={firstName:"",lastName:"",Tz:"",BornDate:new Date(),Hmo:"",Gender:"",Childrens:[]}

  constructor() { }
}
