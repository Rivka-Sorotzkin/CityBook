import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  public numOfChildren=0;
  addressForm = this.fb.group({
    company: null,
    FullName: [null, Validators.required],
    Tz: [null, Validators.required],
    DateBorn: [null, Validators.required],
  
  });

  hasUnitNumber = false;
  fullName:string="";
  Tz:string="";
  BornDate=new Date()

  
  constructor(private fb: FormBuilder) {}
  AddChild():void{
    this.numOfChildren=this.numOfChildren+1;
    console.log(this.numOfChildren);
  }
  onSubmit(): void {
    alert('Thanks!');
  }
}
