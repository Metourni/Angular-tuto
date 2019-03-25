import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.css']
})
export class ListLanguagesComponent implements OnInit {
  private languages = [];
  private errorMessage = '';

  constructor(private _languageService: LanguageService) {
  }

  ngOnInit() {
    this._languageService.getLanguages()
      .subscribe(
        data => this.languages = data,
        error => this.showErrorMessage(error)
      );
  }

  showErrorMessage(error) {
    console.log(error);
    this.errorMessage = error.message;
  }


}
