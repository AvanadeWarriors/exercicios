import { CervejaService } from './../../services/cerveja.service';
import { ICerveja } from './../../models/cerveja.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cervejas',
  templateUrl: './listar-cervejas.component.html',
  styleUrls: ['./listar-cervejas.component.css']
})
export class ListarCervejasComponent implements OnInit {

  titulo = 'Lista de cervejas';
  showImage = false;
  totalCervejas: number;
  filtro = '';
  cervejas: ICerveja[] = [];


  constructor(private cervejaService: CervejaService) { }

  ngOnInit() {

    this.cervejaService.getCervejas()
    .then(dados => {
      this.cervejas = dados;
      this.totalCervejas = dados.length;
    })
    .catch(erro => {
      console.log(erro);
    });


    this.cervejaService.getCerveja(2)
    .then(dados => {
      console.log(dados);
    })
    .catch(erro => {
      console.log(erro);
    });



  }

  mostrarImagens() {
    this.showImage = !this.showImage;
  }

}




