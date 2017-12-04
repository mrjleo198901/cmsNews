import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetNewsAllService {

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }
  // server='192.168.1.133';
 // server= '13.92.179.84';
  server= '127.0.0.1';
  apiUrl = 'http://' + this.server + ':3000/api/noticia';
  apiUrl2 = 'http://' + this.server + ':3003/api/productoAlt';

  getProducts(tipo) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '?tipo=' + tipo).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCategorias() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
        console.log(data[0].imagen);
      }, err => {
        console.log(err);
      });
    });
  }

}
