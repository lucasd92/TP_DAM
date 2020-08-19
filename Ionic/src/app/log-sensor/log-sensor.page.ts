import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/Medicion';
import { MedicionService } from '../services/medicion.service';

@Component({
  selector: 'app-log-sensor',
  templateUrl: './log-sensor.page.html',
  styleUrls: ['./log-sensor.page.scss'],
})
export class LogSensorPage implements OnInit {

  private valorObtenido:number=0;
  public idDispositivo:String;
  public medicion:Medicion;


  constructor(private router:ActivatedRoute, private mServ:MedicionService) { 

  }

  ngOnInit() {
    
    
  }

  async ionViewWillEnter() {
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    this.medicion = await this.mServ.getMedicionByIdDispositivo(this.idDispositivo);
    
    this.valorObtenido = this.medicion.valor;
    console.log(this.valorObtenido);
    
  }

}




