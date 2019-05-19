import { TableComponent } from './table/table.component';
// routerConfig.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'table',
    component: TableComponent
  }
];
export default appRoutes;
