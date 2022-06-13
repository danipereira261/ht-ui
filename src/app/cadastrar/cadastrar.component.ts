import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CadastroPessoaModel} from "../../service/model/cadastro-pessoa.model";
import {PessoaService} from "../../service/pessoa.service";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-cadastrar',
    templateUrl: './cadastrar.component.html',
    styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

    myControl = new FormGroup({
        nome: new FormControl(),
        sexo: new FormControl(),
        dataNascimento: new FormControl(),
        cpf: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
        rePassword: new FormControl()
    });

    constructor(
        private pessoaService: PessoaService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    salvar() {

        // @ts-ignore
        const nome = this.myControl.get('nome').value;
        // @ts-ignore
        const sexo = this.myControl.get('sexo').value;
        // @ts-ignore
        const dataNascimento = this.myControl.get('dataNascimento').value;
        // @ts-ignore
        const cpf = this.myControl.get('cpf').value;
        // @ts-ignore
        const email = this.myControl.get('email').value;
        // @ts-ignore
        const password = this.myControl.get('password').value;
        // @ts-ignore
        const rePassword = this.myControl.get('rePassword').value;

        // @ts-ignore
        const newDate = new DatePipe('en-US').transform(dataNascimento, 'dd/MM/yyyy');
        const pessoa = new CadastroPessoaModel(nome, sexo, newDate, cpf, email, password);

        console.log(password)
        console.log(rePassword)
        if (password != rePassword) {
            alert('Senhas diferentes');
        } else {
            this.pessoaService.cadastrar(pessoa).subscribe(
                c => this.router.navigate([''])
            );
        }
    }

    voltar() {
        this.router.navigate([''])
    }
}
