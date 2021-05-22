import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Xml0Component } from './xml0/xml0.component';
import { Xml1Component } from './xml1/xml1.component';
import { Xml2Component } from './xml2/xml2.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    Xml0Component,
    Xml1Component,
    Xml2Component,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, HomeComponent]
})
export class AppModule { }