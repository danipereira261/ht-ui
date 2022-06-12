import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-atividade-fisica',
    templateUrl: './atividade-fisica.component.html',
    styleUrls: ['./atividade-fisica.component.css']
})
export class AtividadeFisicaComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    home() {
        this.router.navigate(['home'])
    }
}
