import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RespLogin } from '../models/login';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService:AuthService, private router:Router) {

    this.formLogin = this.formBuilder.group({
      password: [null, Validators.required],
      email: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      console.log('este usuario ya entro');
      let user:RespLogin = JSON.parse(localStorage.getItem('user')||'');
      switch (user.user.type) {
        case 'c':
          this.router.navigate(['admin']);
          break;
        case 'LIBRARIAN':
          this.router.navigate(['librarian']);
          break;
        case 'LECTOR':
          this.router.navigate(['user']);
          break;
        default: this.router.navigate(['login']);
          break;
      }
      
    }else{
      console.log('usuario sin entrar');
      
    }
  }

  send(){
    this.authService.login(this.formLogin.value).subscribe(resp => {
      
      localStorage.setItem('user',JSON.stringify(resp));

      this.authService.user = resp;
      switch (resp.user.type) {
        case 'ADMIN':
          this.router.navigate(['admin']);
          break;
        case 'LIBRARIAN':
          this.router.navigate(['librarian']);
          break;
        case 'LECTOR':
          this.router.navigate(['user']);
          break;
        default: this.router.navigate(['login']);
          break;
      }
      
    }, e => {
      console.error(e);
      alert("Lo sentimos, su correo o contraseña están incorrectos. Ingrese los datos nuevamente")
      this.clean();
    });
  }

  clean(){
    this.formLogin.reset();
  }

}
