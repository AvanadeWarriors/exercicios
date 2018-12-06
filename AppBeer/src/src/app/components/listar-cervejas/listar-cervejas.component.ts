import { CervejaService } from './../../services/cerveja.service';
import { ICerveja } from './../../models/cerveja.model';
import { EspacoMoedaPipe } from './../../pipes/espaco-moeda.pipe';
import { Component, OnInit, Input, Output } from '@angular/core';

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

    this.cervejaService.getCervejas().subscribe(dados => {
      this.cervejas = dados;
      this.totalCervejas = this.cervejas.length;
    });


  }

  mostrarImagens() {
    this.showImage = !this.showImage;
  }

}




