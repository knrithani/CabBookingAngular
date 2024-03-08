import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menu:string|null="true";
  isUserLogedIn:boolean=true;
  
  constructor(){
    this.menu = localStorage.getItem("menu");
  }

  showMenu(){
    console.log("inside show menu");
    if(localStorage.getItem("menu")=="false" )
      return false;
    else
      return true;
  }

  userLogin(){
    console.log("userLogin");
    localStorage.setItem("menu","false");
    this.menu="false";
  }
  userAdmin(){
    
  }
  userDriver(){
    
  }
 }
