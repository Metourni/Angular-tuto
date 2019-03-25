import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CompInteractionComponent } from './comp-interaction/comp-interaction.component';

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
    CompInteractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
