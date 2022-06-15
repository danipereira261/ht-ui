import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PesoModel} from "./model/peso.model";
import {PressaoModel} from "./model/pressao.model";

@Injectable({providedIn: 'root'})
export class PressaoService {

    constructor(
        public http: HttpClient
    ) {
    }

    public salvar(model: PressaoModel) {
        // return this.http.post(`http://localhost:8080/api/v1/registro-pressao-arterial`, model);
        return this.http.post(`https://ht-app-back.herokuapp.com/api/v1/registro-pressao-arterial` , model);
    }

    public buscarTodosRegistros(cpf: string) {
        // return this.http.get('http://localhost:8080/api/v1/registro-pressao-arterial/?cpf='  + cpf);
        return this.http.get('https://ht-app-back.herokuapp.com/api/v1/registro-pressao-arterial/?cpf=' + cpf);
    }

    public deletById(id: number ) {
        // return this.http.delete('http://localhost:8080/api/v1/registro-pressao-arterial/?id=' + id);
        return this.http.delete('https://ht-app-back.herokuapp.com/api/v1/registro-pressao-arterial/?id=' + id);
    }
}