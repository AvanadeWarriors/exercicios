import { AuthGuardService } from './../../guards/auth-guard.service';
import { ToastrService } from 'ngx-toastr';
import { CervejaService } from './../../services/cerveja.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  dados: any = {
    email: '',
    password: ''
  };

  constructor(private formBuilder: FormBuilder,
    private cervejaService: CervejaService,
    private toastrService: ToastrService,
    private router: Router,
    private authGuardService: AuthGuardService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: [null, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(8),
        Validators.required
      ])]
    });

  }


  onSubmit() {
    console.log(this.formulario);
    if (this.formulario.valid) {
      this.dados.email = this.formulario.value.email;
      this.dados.password = this.formulario.value.password;

      this.cervejaService.login(this.dados).then(
        res => {
          console.log('Logado');
          this.authGuardService.login();
          localStorage.setItem('token', JSON.stringify(res));
          this.toastrService.success('Usuario logado!');
          this.router.navigate(['/welcome']);
        })
        .catch(err => {
          this.toastrService.error('Falha ao logar');
        });
    } else {
      console.log('teste');
    }

  }

}
