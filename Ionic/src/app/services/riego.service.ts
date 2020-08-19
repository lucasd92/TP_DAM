import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Riego } from '../model/Riego'

@Injectable({
  providedIn: 'root'
})

export class RiegoService {
  urlApi="http://localhost:3000";
  
  constructor(private _http: HttpClient ) {
   }

  getRiegoByIdDispositivo(id):Promise<Riego>{     
    return this._http.get(this.urlApi+"/api/riego/"+id).toPromise().then((riego:Riego)=>{
      return riego;
    });
  };

  getRiegosByIdDispositivo(id):Promise<Riego[]>{     
    return this._http.get(this.urlApi+"/api/riego/"+id+"/todas").toPromise().then((riego:Riego[])=>{
      return riego;
    });
  };

  agregarRiego(riego:Riego){
    return this._http.post(this.urlApi+"/api/riego/agregar",{fecha:riego.fecha,valor:riego.apertura,dispositivoId: riego.electrovalvulaId}).toPromise().then((result)=>{
      return result;
    });
  }
}
