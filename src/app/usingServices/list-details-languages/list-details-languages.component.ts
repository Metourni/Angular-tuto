import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-list-details-languages',
  templateUrl: './list-details-languages.component.html',
  styleUrls: ['./list-details-languages.component.css']
})
export class ListDetailsLanguagesComponent implements OnInit {
  languages = [];
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
    this.errorMessage = error.message;
  }

}
