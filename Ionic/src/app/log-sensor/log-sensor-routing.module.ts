import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogSensorPage } from './log-sensor.page';

const routes: Routes = [
  {
    path: '',
    component: LogSensorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogSensorPageRoutingModule {}
