import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
// routerConfig.ts

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'table',
    component: TableComponent
  }
];


@NgModule ({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})

export class AppRoutingModule {}
