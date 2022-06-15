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
        return this.http.post(`https://ht-app-back.herokuapp.com/api/v1/registro-peso` , model);
    }

    public buscarTodosRegistros(cpf: string) {
        return this.http.get('https://ht-app-back.herokuapp.com/api/v1/registro-peso/?cpf=' + cpf);
    }

    public deletById(id: number ) {
        return this.http.delete('https://ht-app-back.herokuapp.com/api/v1/registro-peso/?id=' + id);
    }
}