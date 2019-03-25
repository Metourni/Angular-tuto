import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClassBindingComponent} from './class-binding/class-binding.component';
import {StyleBindingComponent} from './style-binding/style-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {TemplateRefVarComponent} from './template-ref-var/template-ref-var.component';
import {TwoWayBindingComponent} from './two-way-binding/two-way-binding.component';
import {NgIfComponent} from './ng-if/ng-if.component';
import {NgSwitchComponent} from './ng-switch/ng-switch.component';
import {NgForComponent} from './ng-for/ng-for.component';
import {CompInteractionComponent} from './comp-interaction/comp-interaction.component';
import {PipesComponent} from './pipes/pipes.component';
import {ListLanguagesComponent} from './usingServices/list-languages/list-languages.component';
import {ListDetailsLanguagesComponent} from './usingServices/list-details-languages/list-details-languages.component';

import {LanguageService} from './services/language.service';

@NgModule({
  declarations: [
    AppComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateRefVarComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    CompInteractionComponent,
    PipesComponent,
    ListLanguagesComponent,
    ListDetailsLanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
