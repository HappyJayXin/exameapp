import { Component } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // hi:boolean=false;
  constructor(){
  }
  here(btn){
    $('nav ul li a').removeClass('clickme');
    $(btn).addClass( "clickme" );
  }  
}
