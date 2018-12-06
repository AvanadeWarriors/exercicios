import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICerveja } from '../models/cerveja.model';


@Injectable({
  providedIn: 'root'
})
export class CervejaService {

  url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getCervejas()  {
    return this.http.get<ICerveja[]>(this.url + 'beers');
  }

}
