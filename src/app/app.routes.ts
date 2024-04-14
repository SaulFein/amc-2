import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'inventory', component: InventoryComponent },
  {
    pathMatch: 'full',
    redirectTo: '',
    path: '**',
  },
];
