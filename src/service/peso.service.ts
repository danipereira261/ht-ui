import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PesoModel} from "./model/peso.model";

@Injectable({providedIn: 'root'})
export class PessoaService {

    constructor(
        public http: HttpClient
    ) {
    }

    public cadastrar(model: PesoModel) {
        return this.http.post(`http://localhost:8080/api/v1/registro-peso`, model);
        // return this.http.post(`https://ht-app-back.herokuapp.com/api/v1/registro-peso` , model);
    }

    public buscarTodosRegistros(cpf: string) {
        return this.http.get('http://localhost:8080/api/v1/registro-peso/?cpf='  + cpf);
        // return this.http.get('https://ht-app-back.herokuapp.com/api/v1/registro-peso/?cpf=' + cpf);
    }

    public deletById(id: number ) {
        return this.http.delete('http://localhost:8080/api/v1/registro-peso/?id=' + id);
        // return this.http.get('https://ht-app-back.herokuapp.com/api/v1/registro-atividade-fisica/?cpf=' + cpf);
    }
}