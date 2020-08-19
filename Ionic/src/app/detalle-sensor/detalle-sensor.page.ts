//correr antes npm install --save highcharts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/Medicion';
import { Riego } from '../model/Riego';
import { MedicionService } from '../services/medicion.service';


import * as Highcharts from 'highcharts';
import { RiegoService } from '../services/riego.service';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-detalle-sensor',
  templateUrl: './detalle-sensor.page.html',
  styleUrls: ['./detalle-sensor.page.scss'],
})
export class DetalleSensorPage implements OnInit {

  private valorObtenido:number=0;
  public myChart;
  private chartOptions;
  public idDispositivo:String;
  public medicion:Medicion;
  public riego:Riego;
  public Accionar_EV:String = 'Abrir';
  public Estado_EV:number = 0;

  constructor(private router:ActivatedRoute, private mServ:MedicionService, private rServ:RiegoService) { 

  }

  ngOnInit() {
    
    
  }

  async switchEV(){
    //Calculo la fecha
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 
    
    // Calculo valor aleatorio entre 0 y 100
    this.valorObtenido = Math.round(Math.random()*100);
    console.log(formatted_date);
    if(this.Accionar_EV == 'Abrir'){
      // Invierto estado del botón
      this.Accionar_EV = 'Cerrar';

    }

    else{
      // Invierto estado del botón
      this.Accionar_EV = 'Abrir';

      // Loggueo medición
      let a : Medicion= new Medicion(99,formatted_date,+this.valorObtenido,this.idDispositivo);
      
      await this.mServ.agregarMedicion(a);

      // Actualizo Chart
      this.myChart.update({series: [{
        name: 'kPA',
        data: [+this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
      }]});
    }

    //Invierto estado de electroválvula
    if(this.Estado_EV)
      this.Estado_EV = 0;
    else
      this.Estado_EV = 1;

    // loggeo cambio en la tabla
    let r : Riego = new Riego(99,formatted_date,this.Estado_EV,this.riego.electrovalvulaId);

    this.rServ.agregarRiego(r);

  }

  async ionViewWillEnter() {
    //Para un determinado ID
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    // Busco la última medición
    this.medicion = await this.mServ.getMedicionByIdDispositivo(this.idDispositivo);
    // y el último log de riego
    this.riego = await this.rServ.getRiegoByIdDispositivo(this.idDispositivo);
    
    // Cargo el valor en una variable para mostrar
    this.valorObtenido = this.medicion.valor;
    console.log(this.valorObtenido);

    // Veo estado de EV según último Log
    this.Estado_EV = this.riego.apertura;
    
    // Si está abierta, la acción del botoń es cerrar
    if(this.Estado_EV)
      this.Accionar_EV = 'Cerrar';
    else
      this.Accionar_EV = 'Abrir';


    // Genero Chart
    this.generarChart();
    
    this.myChart.update({series: [{
      name: 'kPA',
      data: [+this.valorObtenido],
      tooltip: {
          valueSuffix: ' kPA'
      }
    }]});



  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor N° ' + this.idDispositivo
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [+this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
    console.log('chart');
  }

}