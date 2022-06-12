import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-cadastrar',
    templateUrl: './cadastrar.component.html',
    styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

    constructor(
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    salvar() {
        this.router.navigate([''])
    }
}
