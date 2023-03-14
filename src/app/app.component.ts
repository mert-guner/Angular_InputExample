import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 public parentCount:number = 0;

 add(){
  this.parentCount += 1;
 }

 remove(){
  if(this.parentCount>0)
  this.parentCount -= 1;
 }

 reset(){this.parentCount=0}

}
