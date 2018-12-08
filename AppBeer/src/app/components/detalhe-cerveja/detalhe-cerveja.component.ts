import { ICerveja } from './../../models/cerveja.model';
import { CervejaService } from './../../services/cerveja.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalhe-cerveja',
  templateUrl: './detalhe-cerveja.component.html',
  styleUrls: ['./detalhe-cerveja.component.css']
})
export class DetalheCervejaComponent implements OnInit {
  tipos: string[] = ['IPA', 'ICA', 'ALE'];
  idCerveja: number;
  cerveja: ICerveja = {
    id: null,
    nome: null,
    familia: null,
    litragem: null,
    preco: null,
    data: null,
    foto: null,
    ranking: null,
    unidade: null
  };

  constructor(private router: Router, private route: ActivatedRoute, private cervejaService: CervejaService) { }

  ngOnInit() {
    this.idCerveja = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.cervejaService.getCerveja(this.idCerveja)
      .then(dados => {
        this.cerveja = dados;
      }).catch(err => {
        console.log(err);
      });
  }

}
