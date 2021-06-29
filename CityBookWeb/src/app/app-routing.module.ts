import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstractionsComponent } from './instractions/instractions.component';
import { UserComponentComponent } from './user-component/user-component.component';

const routes: Routes = [
  {path:"",redirectTo:"/instractions",pathMatch:"full"},
  {path:"instractions",component:InstractionsComponent},
  {path:"loginUser",component:UserComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
