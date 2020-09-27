import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AuthenComponent } from './Component/authen/authen.component';
//import { PageIndexComponent } from './Component/page-index/page-index.component';
//import { PageIndexModule } from './Component/page-index/page-index.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthoriGuard } from './Guard/authori.guard';
import { AuthoriCanLoadGuard } from './Guard/authori-can-load.guard';
import { UnitCurrencyPipe } from './Pipe/unit-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UnitCurrencyPipe,
    //AuthenComponent,
    //PageIndexComponent
  ],
  imports: [
    BrowserModule,
    //PageIndexModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthoriCanLoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
