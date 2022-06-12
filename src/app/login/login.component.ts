import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthModel} from "../../service/model/auth.model";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    myControl = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
    });

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    login() {

        // @ts-ignore
        const email = this.myControl.get('email').value;
        // @ts-ignore
        const password = this.myControl.get('password').value;
        const auth = new AuthModel(email, password);


        this.auth.auth(auth).subscribe(
            c =>
                this.router.navigate(['home'])
            ,
            err => {
                console.log('Erro ao Efetuar login');
            });

    }

    cadastro() {
        this.router.navigate(['cadastrar'])
    }
}
