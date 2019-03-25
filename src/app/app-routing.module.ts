import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListLanguagesComponent} from './routing/list-languages/list-languages.component';
import {ListSystemesComponent} from './routing/list-systemes/list-systemes.component';
import {PageNotFoundComponent} from './routing/page-not-found/page-not-found.component';
import {SystemDetailComponent} from './routing/system-detail/system-detail.component';
import {SystemOverviewComponent} from './routing/system-overview/system-overview.component';

const routes: Routes = [
  {path: '', redirectTo: '/languages', pathMatch: 'full'},
  {path: 'languages', component: ListLanguagesComponent},
  {path: 'systems', component: ListSystemesComponent},
  {
    path: 'systems/:id',
    component: SystemDetailComponent,
    children: [
      {path: 'overview', component: SystemOverviewComponent},
    ]
  },

  // Should be the last at this routing table
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponent = [ListLanguagesComponent, ListSystemesComponent, PageNotFoundComponent, SystemDetailComponent, SystemOverviewComponent];
