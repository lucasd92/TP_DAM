import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Riego } from '../model/Riego';
import { RiegoService } from '../services/riego.service';

@Component({
  selector: 'app-log-ev',
  templateUrl: './log-ev.page.html',
  styleUrls: ['./log-ev.page.scss'],
})
export class LogEvPage implements OnInit {


  public idDispositivo:String;
  public riegoArray:Riego[];



  constructor(private router:ActivatedRoute, private mServ:RiegoService) { 

  }

  ngOnInit() {
    
    
  }

  async ionViewWillEnter() {
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    this.riegoArray = await this.mServ.getRiegosByIdDispositivo(this.idDispositivo);
    console.log(this.idDispositivo)
    console.log(this.riegoArray.length)

  }

}


