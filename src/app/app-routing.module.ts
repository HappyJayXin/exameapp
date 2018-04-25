import { Week01Component } from './week01/week01.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Week09Component } from './week09/week09.component';
import { Week02Component } from './week02/week02.component';
import { Week03Component } from './week03/week03.component';
import { Week04Component } from './week04/week04.component';
import { Week07Component } from './week07/week07.component';
import { Week05Component } from './week05/week05.component';
import { Week06Component } from './week06/week06.component';
import { Week08Component } from './week08/week08.component';
import { AndroidhomeComponent } from './androidhome/androidhome.component';


const routes: Routes = [
  {path:'',component:AndroidhomeComponent},
  {path:"week01",component:Week01Component},
  {path:"week02",component:Week02Component},
  {path:"week03",component:Week03Component},
  {path:"week04",component:Week04Component},
  {path:"week05",component:Week05Component},
  {path:"week06",component:Week06Component},
  {path:"week07",component:Week07Component},
  {path:"week08",component:Week08Component},
  {path:"week09",component:Week09Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[Week01Component,Week02Component,
  Week03Component,Week04Component,Week05Component,Week06Component,
  Week07Component,Week08Component,Week09Component,AndroidhomeComponent];
