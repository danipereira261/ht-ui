import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AtividadeFisicaModel} from "./model/atividade-fisica.model";

@Injectable({providedIn: 'root'})
export class AtividadeFisicaService {

    constructor(
        public http: HttpClient
    ) {
    }


    public cadastrar(request: AtividadeFisicaModel) {
        console.log(request);
        // return this.http.post(`http://localhost:8080/api/v1/registro-atividade-fisica`, request);
        return this.http.post(`https://ht-app-back.herokuapp.com/api/v1/registro-atividade-fisica` , request);
    }

    public buscarTodosRegistros(cpf: string) {
        // return this.http.get('http://localhost:8080/api/v1/registro-atividade-fisica/?cpf=' + cpf);
        return this.http.get('https://ht-app-back.herokuapp.com/api/v1/registro-atividade-fisica/?cpf=' + cpf);
    }

    public deletById(id: number ) {
        // return this.http.delete('http://localhost:8080/api/v1/registro-atividade-fisica/?id=' + id);
        return this.http.delete('https://ht-app-back.herokuapp.com/api/v1/registro-atividade-fisica/?id=' + id);
    }
}