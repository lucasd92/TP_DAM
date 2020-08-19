import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/Medicion';
import { MedicionService } from '../services/medicion.service';

@Component({
  selector: 'app-log-ev',
  templateUrl: './log-ev.page.html',
  styleUrls: ['./log-ev.page.scss'],
})
export class LogEvPage implements OnInit {

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
