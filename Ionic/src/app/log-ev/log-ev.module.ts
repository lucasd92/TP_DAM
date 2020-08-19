import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogEvPageRoutingModule } from './log-ev-routing.module';
import { DatePipe } from '../pipes/date-pipe.pipe';
import { LogEvPage } from './log-ev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogEvPageRoutingModule
  ],
  declarations: [LogEvPage,DatePipe]
})
export class LogEvPageModule {}
