import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogSensorPageRoutingModule } from './log-sensor-routing.module';
import { DatePipe } from '../pipes/date-pipe.pipe';
import { LogSensorPage } from './log-sensor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogSensorPageRoutingModule
  ],
  declarations: [LogSensorPage,DatePipe]
})
export class LogSensorPageModule {}
