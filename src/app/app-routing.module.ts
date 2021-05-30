import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChennaidistrictComponent } from './chennaidistrict/chennaidistrict.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:"",component:ChennaidistrictComponent
  },
  {
    path:"users",component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
