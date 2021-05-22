import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Xml0Component } from './xml0/xml0.component';
import { Xml1Component } from './xml1/xml1.component';
import { Xml2Component } from './xml2/xml2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'xml0', component: Xml0Component },
  { path: 'xml1', component: Xml1Component },
  { path: 'xml2', component: Xml2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }