import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JwtInterceptor } from './interceptor/token-interceptor';
import { UserToken } from './models/user';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function jwtTokenGetter(){
  const user:UserToken = JSON.parse(localStorage.getItem('user')||'');
  return  user.token;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    }),

    BrowserAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
