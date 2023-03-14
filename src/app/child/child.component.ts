import { Component, Input } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  constructor(){}

  @Input() count:number = 0;

}
