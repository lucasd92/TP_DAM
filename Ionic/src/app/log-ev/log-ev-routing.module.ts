import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogEvPage } from './log-ev.page';

const routes: Routes = [
  {
    path: '',
    component: LogEvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogEvPageRoutingModule {}
