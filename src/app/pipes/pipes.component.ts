import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name = 'Metoutni noureddine';
  object = {
    name : this.name,
    city : 'Alger'
  };

  date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}
