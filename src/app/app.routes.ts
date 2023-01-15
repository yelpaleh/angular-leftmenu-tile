import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderStatusComponent } from './order-status/order-status.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'order-status',
    component: OrderStatusComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}