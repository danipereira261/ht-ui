import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "./model/auth.model";
import {CadastroPessoaModel} from "./model/cadastro-pessoa.model";

@Injectable({providedIn: 'root'})
export class PessoaService{

    constructor(
        public http: HttpClient
    ) {
    }

    public cadastrar(model: CadastroPessoaModel) {
        // return this.http.post(`http://localhost:8080/api/v1/pessoa`, model);
        return this.http.post(`https://ht-app-back.herokuapp.com/api/v1/pessoa`, model);
    }
}