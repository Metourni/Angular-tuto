import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-systemes',
  templateUrl: './list-systemes.component.html',
  styleUrls: ['./list-systemes.component.css']
})
export class ListSystemesComponent implements OnInit {

  systems = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.systems = [
      {id: 1, name: 'mac'},
      {id: 2, name: 'windows'},
      {id: 3, name: 'linux'}
    ];
  }

  onSelect(system) {
    this.router.navigate(['/systems', system.id]);
  }
}
