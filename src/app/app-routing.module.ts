import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChennaidistrictComponent } from './chennaidistrict/chennaidistrict.component';

const routes: Routes = [
  {
    path:'',component:ChennaidistrictComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
