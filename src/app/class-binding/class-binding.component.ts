import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  protected textToTest = 'Metourni Noureddine';
  protected successClass = 'text-success';
  protected hasError = false;
  protected isItalic = true;
  protected messageClass = {
    'text-danger': this.hasError,
    'text-success': !this.hasError,
    'text-it': this.isItalic,
  };

  constructor() {
  }

  ngOnInit() {
  }

}
