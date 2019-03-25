import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  protected textColor = 'orange';
  protected errorColor = 'red';
  protected successColor = 'green';
  protected hasError = false;

  protected titleStyle = {
    color: this.hasError ? this.errorColor : this.successColor,
    fontStyle: 'italic',
  };

  ngOnInit(): void {
  }


}
