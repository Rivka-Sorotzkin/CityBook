import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { SaveDataService } from '../save-data.service';

@Component({
  selector: 'app-instractions',
  templateUrl: './instractions.component.html',
  styleUrls: ['./instractions.component.css']
})
export class InstractionsComponent implements OnInit {
HelloUser:string="";
  constructor(private data:UserDetailsService,private service:SaveDataService) { }

  ngOnInit(): void {
    this.HelloUser=this.service.firstNameS
  }

}
