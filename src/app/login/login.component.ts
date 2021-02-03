import { Component, OnInit } from '@angular/core';
import { LoginData } from './login.data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData:LoginData = new LoginData();
  constructor() { }

  ngOnInit(): void {
    
  }
  login(){
    if(this.loginData.username !== "admin"){
      alert("invalid username");
    }
    if(this.loginData.password === ""){
      alert("fill the field");
    }
  }

}
