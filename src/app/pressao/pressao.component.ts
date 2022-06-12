import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pressao',
  templateUrl: './pressao.component.html',
  styleUrls: ['./pressao.component.css']
})
export class PressaoComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['home'])
  }

}
