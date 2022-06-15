import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RefeicaoModel} from "./model/refeicao.model";

@Injectable({providedIn: 'root'})
export class RefeicaoService {

    constructor(
        public http: HttpClient
    ) {
    }


    public cadastrar(request: RefeicaoModel) {
        // return this.http.post(`http://localhost:8080/api/v1/registro-refeicao`, request);
        return this.http.post(`https://ht-app-back.herokuapp.com/api/v1/registro-refeicao` , request);
    }

    public buscarTodosRegistros(cpf: string) {
        // return this.http.get('http://localhost:8080/api/v1/registro-refeicao?cpf=' + cpf);
        return this.http.get('https://ht-app-back.herokuapp.com/api/v1/registro-refeicao/?cpf=' + cpf);
    }

    public deletById(id: number ) {
        // return this.http.delete('http://localhost:8080/api/v1/registro-refeicao/?id=' + id);
        return this.http.delete('https://ht-app-back.herokuapp.com/api/v1/registro-refeicao/?id=' + id);
    }
}