import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detalle-sensor/:id',
    loadChildren: () => import('./detalle-sensor/detalle-sensor.module').then( m => m.DetalleSensorPageModule)
  },
  {
    path: 'log-sensor/:id',
    loadChildren: () => import('./log-sensor/log-sensor.module').then( m => m.LogSensorPageModule)
  },
  {
    path: 'log-ev/:id',
    loadChildren: () => import('./log-ev/log-ev.module').then( m => m.LogEvPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
