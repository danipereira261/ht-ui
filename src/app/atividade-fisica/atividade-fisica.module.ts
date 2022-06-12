import {NgModule} from "@angular/core";
import {AtividadeFisicaRoutingModule} from "./atividade-fisica-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AtividadeFisicaComponent} from "./atividade-fisica.component";

@NgModule({
    declarations: [AtividadeFisicaComponent],
    imports: [AtividadeFisicaRoutingModule, CommonModule],
    exports: [HttpClientModule]
})
export class AtividadeFisicaModule {

}