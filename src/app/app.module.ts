import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { SkedService } from "./services/sked.service";
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ViewTableComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [SkedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
