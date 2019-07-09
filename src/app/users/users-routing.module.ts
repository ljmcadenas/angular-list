import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.UsersLayoutComponent,
    children: [
      {
        path: '',
        component: fromContainers.UsersListComponent,
        data: {
          title: 'Users'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
