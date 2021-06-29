import { Injectable } from '@angular/core';
import { Child } from './Child';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {
  firstNameS: string = "";
  lastNameS: string = "";
  TzS: string = "";
  GenderS: string = "";
  HmoS: string = "";
  BornDateS: Date = new Date();
  childrenS:Child[]=[];
  constructor() { }
}
