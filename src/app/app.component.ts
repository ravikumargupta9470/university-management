import { Component } from '@angular/core';
import { stud } from './stud';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'univ';
  sarr=[{name:"Ravi Kumar",age:"23",course:"MCA"}];

  add(name:string,age:string,course:string)
  {
this.sarr.push({name,age,course});

console.log(this.sarr);
  }


}