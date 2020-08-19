import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Riego } from '../model/Riego';
import { RiegoService } from '../services/riego.service';

@Component({
  selector: 'app-log-ev',
  templateUrl: './log-ev.page.html',
  styleUrls: ['./log-ev.page.scss'],
})
export class LogEvPage {


  public idDispositivo:String;
  public riegoArray:Riego[];

  constructor(private router:ActivatedRoute, private mServ:RiegoService) { 

  }

  async ionViewWillEnter() {
    // Tomo el Id del dispositivo por argumento
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    // Hago consulta a la tabla para traer todos los logs de riegos de este dispositivo
    this.riegoArray = await this.mServ.getRiegosByIdDispositivo(this.idDispositivo);

  }

}


