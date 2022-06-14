import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PesoModel} from "./model/peso.model";

@Injectable({providedIn: 'root'})
export class PessoaService {

    constructor(
        public http: HttpClient
    ) {
    }

    public cadastrarPeso(pesoModel: PesoModel) {
        console.log(pesoModel);
        // return this.http.post(`http://localhost:8080/api/v1/registro-peso`, pesoModel);
        return this.http.post(`https://ht-app-back.herokuapp.com/api/v1/registro-peso` , pesoModel);
    }

    public buscarTodosRegistros(cpf: string) {
        // return this.http.get('http://localhost:8080/api/v1/registro-peso/?cpf='  + cpf);
        return this.http.get('https://ht-app-back.herokuapp.com/api/v1/registro-peso/?cpf=' + cpf);
    }
}