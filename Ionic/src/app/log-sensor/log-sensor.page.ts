import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/Medicion';
import { MedicionService } from '../services/medicion.service';

@Component({
  selector: 'app-log-sensor',
  templateUrl: './log-sensor.page.html',
  styleUrls: ['./log-sensor.page.scss'],
})
export class LogSensorPage {

  public idDispositivo:String;
  public medicionArray:Medicion[];

  constructor(private router:ActivatedRoute, private mServ:MedicionService) { 

  }

  async ionViewWillEnter() {
    // Tomo el Id del dispositivo por argumento
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    // Hago consulta para traerme todos los logs
    this.medicionArray = await this.mServ.getMedicionesByIdDispositivo(this.idDispositivo);
  }



}




