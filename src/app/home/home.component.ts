import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
  }


  refeicao() {
    this.router.navigate(['refeicao'])
  }

  peso() {
    this.router.navigate(['peso'])
  }

  atividadeFisica() {
    this.router.navigate(['atividade-fisica'])
  }

  pressao() {
    this.router.navigate(['pressao'])
  }

  logout() {
    this.router.navigate([''])
  }
}
