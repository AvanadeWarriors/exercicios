import { CervejaService } from './../../services/cerveja.service';
import { Component, OnInit } from '@angular/core';
import { ICerveja } from 'src/app/models/cerveja.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cerveja',
  templateUrl: './cadastro-cerveja.component.html',
  styleUrls: ['./cadastro-cerveja.component.css']
})
export class CadastroCervejaComponent implements OnInit {

  tipos: string[] = ['IPA', 'ICA', 'ALE'];


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

  constructor(private cervejaService: CervejaService, private toastService: ToastrService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit(form) {
    console.log(form.value);
    this.cervejaService.postCerveja(form.value)
      .then(dados => {
        this.toastService.success('Cerveja cadastrada com sucesso!');
        this.router.navigate(['/cervejas']);
        console.log('Retorno' + dados);
      })
      .catch(err => {
        this.toastService.error('Erro ao cadastrar cerveja!');
        this.router.navigate(['/cervejas']);
      });

  }
}
