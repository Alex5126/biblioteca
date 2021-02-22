import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public load: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router:Router,
    private util:UtilsService
  ) { 
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  login() {
    if(!this.formLogin.valid){
      alert('datos invalidos');
    }

    this.load = true;
      
    this.authService.login(this.formLogin.value).subscribe(data => {
      localStorage.setItem('user',JSON.stringify(data));
      this.load = false;
      this.util.user = data.user;
      switch (data.user.type) {
        case 'LECTOR': this.router.navigate(['users']);
          break;
        case 'LIBRARIAN': this.router.navigate(['librarian']);
          break;
        case 'ADMIN': this.router.navigate(['admin']);
          break;
        default:
          break;
      }
    }, error => {
      console.log(error.error.message);
      alert(`Error ${error.error.message}`);
      this.load = false;
    });
  }

}
