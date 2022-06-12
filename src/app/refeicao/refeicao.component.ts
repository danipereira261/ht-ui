import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-refeicao',
  templateUrl: './refeicao.component.html',
  styleUrls: ['./refeicao.component.css']
})
export class RefeicaoComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['home'])
  }

}
