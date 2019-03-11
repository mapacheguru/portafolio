import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  constructor( private http: HttpClient ) {
   // mensaje
    // console.log('servicio info pagina listo');
    // leer archivo json
    this.http.get('assets/data/data-pagina.json')
    // recibe la respuesta
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
   }
}
