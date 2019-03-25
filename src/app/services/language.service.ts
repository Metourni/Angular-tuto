import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ILanguage} from '../models/language';
import {Observable} from 'rxjs';
import {throwError, of} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _url = '/assets/data/languages.json';

  constructor(private http: HttpClient) {
    this.getLanguages();
    // Languages
  }

  public getLanguages(): Observable<ILanguage[]> {
    // In this example we use a static data stored on this application
    return this.http.get<ILanguage[]>(this._url);
  }

  public getStaticLanguages() {
    return [
      {id: 1, name: 'Java', version: 4},
      {id: 2, name: 'Python', version: 3},
      {id: 3, name: 'PHP', version: 7},
      {id: 4, name: 'Angular', version: 7}
    ];
  }

  private errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'server error');
  }
}
