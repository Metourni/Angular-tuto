import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp-interaction',
  templateUrl: './comp-interaction.component.html',
  styleUrls: ['./comp-interaction.component.css']
})
export class CompInteractionComponent implements OnInit {

  @Input('parentData')
  public text ;

  constructor() { }

  ngOnInit() {
  }

}
