import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatepickerDropdownPositionX } from '@angular/material/datepicker';
import { Child } from '../Child';
import { ChildComponent } from '../child/child.component';
import { ConectionService } from '../conection.service';
import { User } from '../User';
import { UserDetailsService } from '../user-details.service';
import { SaveDataService } from '../save-data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as XLSX from 'xlsx';





@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})

export class UserComponentComponent {
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;
  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }
  addChild:boolean=false;
  CountChildren: number = 0
  firstName: string = "";
  lastName: string = "";
  Tz: string = "";
  Gender: string = "";
  Hmo: string = "";
  BornDate: Date = new Date();
  User: User = { firstName: "", lastName: "", Tz: "", BornDate: new Date(), Hmo: "", Gender: "", Childrens: [] }
  children: Child[] = [];
  DownloadUser: any = { firstName: "", lastName: "", Tz: "", BornDate: new Date(), Hmo: "", Gender: "", Children: [] }
  addressForm = this.fb.group({
    company: null,
    firstName: ['',
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
    lastName: ['',
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
    tz: [null],
    HMO: [null, Validators.required],
    Gender: ['male', Validators.required],
    DateBorn: [null, Validators.required],
    FullName: [null],
    Tz: [null, Validators.required],


  });
  constructor(private fb: FormBuilder, private service: ConectionService, private data: SaveDataService) { }
  hmo = [
    { name: 'Maccabi Health Fund' },
    { name: 'Leumit Health Care Services' },
    { name: 'United Health Insurance Fund' },
    { name: 'Clalit Health Services' },
  ];
  gender = [
    'Male',
    'Female'
  ];
  ngOnInit(): void {
    this.firstName = this.data.firstNameS,
      this.lastName = this.data.lastNameS,
      this.Tz = this.data.TzS;
    this.Gender = this.data.GenderS;
    this.Hmo = this.data.HmoS;
    this.BornDate = this.data.BornDateS;
    debugger;
    this.children = this.data.childrenS;
    //this.children.forEach(t=>this.data.childrenS.forEach(ngmodel=>ngmodel=t))
  }
  ngOnDestroy(): void {
    console.log("hello")
    this.data.firstNameS = this.firstName,
      this.data.lastNameS = this.lastName,
      this.data.TzS = this.Tz,
      this.data.GenderS = this.Gender,
      this.data.HmoS = this.Hmo,
      this.data.BornDateS = this.BornDate;
      debugger;
    this.data.childrenS = this.children;
   // this.data.childrenS.forEach(t=>this.children.forEach(ngmodel=>ngmodel=t))


  }
  AddChild(): void {
   this.addChild=true;
   this.children.push({}as Child);
  }
  SaveChild(): Child[] {
    this.data.childrenS.forEach(child => this.children.forEach(ngmodel => ngmodel = child))
    return this.children;
  };
  SaveAgainChild(): Child[] {
    this.children.forEach(t => this.data.childrenS.forEach(ngmodel => ngmodel = t))
    return this.data.childrenS;
  }
  Try(i: number): void {
    console.log(this.children[i]);
  }
  sendData(): void {
    this.User.firstName = this.firstName;
    this.User.lastName = this.lastName;
    this.User.Tz = this.Tz;
    this.User.Hmo = this.Hmo;
    this.User.Gender = this.Gender;
    this.User.Childrens = this.children;
    this.service.AddUser(this.User).subscribe();
    // this.DownloadUser = this.service.GetUser();
  }
}
