import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-list-systemes',
  templateUrl: './list-systemes.component.html',
  styleUrls: ['./list-systemes.component.css']
})
export class ListSystemesComponent implements OnInit {

  systems = [];
  selectedSystemId;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.systems = [
      {id: 1, name: 'mac'},
      {id: 2, name: 'windows'},
      {id: 3, name: 'linux'}
    ];

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedSystemId = id;
    });

  }

  onSelect(system) {
    // this.router.navigate(['/systems', system.id]);
    // Using Relative path
    this.router.navigate([system.id], {relativeTo: this.activatedRoute});
  }

  isSelected(system) {
    return system.id === this.selectedSystemId;
  }
}
