import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChennaidistrictComponent } from './chennaidistrict/chennaidistrict.component';
import{HttpClientModule} from '@angular/common/http';
import { DistrictdetailsService } from './districtdetails.service';
import { TopViewComponent } from './top-view/top-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ChennaidistrictComponent,
    TopViewComponent,
    FooterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [DistrictdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
