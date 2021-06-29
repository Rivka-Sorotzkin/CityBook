import { Child } from "./Child";

export interface User{
    firstName:string,
    lastName:string,
    Tz:string,
    Gender:string,
    Hmo:string,
    BornDate:Date,
    Childrens:Child[];
}
