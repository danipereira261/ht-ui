import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
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

    @ViewChild('exampleDiv') exampleDiv: ElementRef | undefined;


    myControl = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
    });

    constructor(
        private renderer: Renderer2,
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
                this.addElement()
            });

    }

    addElement() {
        const p: HTMLParagraphElement = this.renderer.createElement('p');
        p.innerHTML = '<p class="alert alert-danger" style="text-align: center">Erro ao Efetuar login<br> usuário ou senha incorretos</p>' ;
        // @ts-ignore
        this.renderer.appendChild(this.exampleDiv.nativeElement, p)
    }

    cadastro() {
        this.router.navigate(['cadastrar'])
    }

}
