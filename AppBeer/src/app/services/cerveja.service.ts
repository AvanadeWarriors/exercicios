import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICerveja } from '../models/cerveja.model';


@Injectable({
  providedIn: 'root'
})
export class CervejaService {

  url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getCervejas() {
    return this.http.get<ICerveja[]>(this.url + 'beers').toPromise();
  }

  getCerveja(id: number) {
    return this.http.get<ICerveja>(this.url + `beer/${id}`).toPromise();
  }

  postCerveja(cerveja: ICerveja) {
    return this.http.post(this.url + 'beer', cerveja).toPromise();
  }

  putCerveja(cerveja: ICerveja) {
    return this.http.put(this.url + `beer/${cerveja.id}`, cerveja).toPromise();
  }

  deleteCerveja(id: number) {
    return this.http.delete(this.url + `beer/${id}`).toPromise();
  }

  login(dados: any) {
    return this.http.post(this.url + 'login', dados).toPromise();
  }
}
