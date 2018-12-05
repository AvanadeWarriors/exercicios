import { EspacoMoedaPipe } from './../../pipes/espaco-moeda.pipe';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-cervejas',
  templateUrl: './listar-cervejas.component.html',
  styleUrls: ['./listar-cervejas.component.css']
})
export class ListarCervejasComponent implements OnInit {

  titulo: string = "Lista de cervejas";
  showImage: boolean = false;
  filtro: string = "";
  cervejas: any = [
    {
      "id": 1,
      "nome": "Indica Colorado",
      "familia": "IPA",
      "litragem": 600,
      "preco": 15.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/169389-1000-1000/ColoradoIndica1000x1000.jpg?v=636542262631100000",
      "data": "2010-10-05",
      "ranking": 4.9,
      "unidade" : "L"
    },
    {
      "id": 2,
      "nome": "Cauim Colorado",
      "familia": "ALE",
      "litragem": 300,
      "preco": 6.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/171330-1000-1000/Cauim.gif?v=636643219616730000",
      "data": "2017-12-12",
      "ranking": 3.8,
      "unidade" : "L"
    },
    {
      "id": 3,
      "nome": "Appia Colorado",
      "familia": "ALE",
      "litragem": 600,
      "preco": 11.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/169375-1000-1000/ColoradoAppia1000x1000.jpg?v=636538020330630000",
      "data": "2018-12-01",
      "ranking": 2,
      "unidade" : "M"
    },
    {
      "id": 4,
      "nome": "Gabiru Colorado",
      "familia": "IPA",
      "litragem": 600,
      "preco": 17.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/172094-1000-1000/01.jpg?v=636704778305900000",
      "data": "2017-03-17",
      "ranking": 1,
      "unidade" : "M"
    }
  ];

  totalCervejas: number = this.cervejas.length;

  constructor() { }

  ngOnInit() {

  }

  mostrarImagens() {
    this.showImage = !this.showImage;
  }

 }
  



