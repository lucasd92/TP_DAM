import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispositivoPageRoutingModule } from './dispositivo-routing.module';
import { ResaltarBotonDirective } from '../directives/resaltar-boton.directive';

import { DispositivoPage } from './dispositivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispositivoPageRoutingModule
  ],
  declarations: [DispositivoPage,ResaltarBotonDirective]
})
export class DispositivoPageModule {}
