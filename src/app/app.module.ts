import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { Xml0Component } from './xml0/xml0.component';
import { Xml1Component } from './xml1/xml1.component';
import { Xml2Component } from './xml2/xml2.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
@NgModule({
  declarations: [
    AppComponent,
    Xml0Component,
    Xml1Component,
    Xml2Component,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, HomeComponent, SidenavListComponent]
})
export class AppModule { }