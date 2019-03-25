import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comp-interaction',
  templateUrl: './comp-interaction.component.html',
  styleUrls: ['./comp-interaction.component.css']
})
export class CompInteractionComponent implements OnInit {

  @Input('parentData')
  public text;

  @Output()
  public childEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.childEvent.emit('heyy from child');
  }
}
