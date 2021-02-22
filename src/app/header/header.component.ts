import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService, public util:UtilsService) { }

  ngOnInit(): void {
    console.log(this.util.user);
    
  }

  logout(){
    this.util.user.type = '';
    this.authService.logout();
  }

}
