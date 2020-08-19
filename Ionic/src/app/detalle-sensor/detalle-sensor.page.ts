//correr antes npm install --save highcharts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicion } from '../model/Medicion';
import { MedicionService } from '../services/medicion.service';


import * as Highcharts from 'highcharts';
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
  public Accionar_EV:String = 'Abrir';

  constructor(private router:ActivatedRoute, private mServ:MedicionService) { 

  }

  ngOnInit() {
    
    
  }

  switchEV(){
    if(this.Accionar_EV == 'Abrir')
      this.Accionar_EV = 'Cerrar';
    else
      this.Accionar_EV = 'Abrir';

  }

  async ionViewWillEnter() {
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    this.medicion = await this.mServ.getMedicionByIdDispositivo(this.idDispositivo);
    
    this.valorObtenido = this.medicion.valor;
    console.log(this.valorObtenido);
    
    this.generarChart();
    
    this.myChart.update({series: [{
      name: 'kPA',
      data: [+this.valorObtenido],
      tooltip: {
          valueSuffix: ' kPA'
      }
    }]});



  }
  
  ionViewDidEnter() {

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