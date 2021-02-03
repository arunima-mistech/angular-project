import { Component, OnInit } from '@angular/core';
import login from '../files/login.json';
import { LoginData } from './login.datas';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginData:LoginData = new LoginData();
  public itemList:{username:string, password:string}[] = login;
  constructor() { }

  ngOnInit(): void {
  }
  
  
}
