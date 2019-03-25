import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-system-detail',
  template: `
    <h4>
      The id of the system : {{systemId}} !
    </h4>
    <div>
      <button (click)="gePrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </div>
    <div>
      <button (click)="goToSystems()">Go Back</button>
      <button></button>
    </div>
  `,
  styles: []
})
export class SystemDetailComponent implements OnInit {

  public systemId;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.systemId = id;
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.systemId = id;
    });
  }

  gePrevious() {
    let prId = this.systemId - 1;
    this.router.navigate(['/systems', prId]);
  }

  goNext() {
    let nxId = this.systemId + 1;
    this.router.navigate(['/systems', nxId]);
  }

  goToSystems() {
    this.router.navigate(['../', {id: this.systemId}], {relativeTo: this.activatedRoute});
  }
}
