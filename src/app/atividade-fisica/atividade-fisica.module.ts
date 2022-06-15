import {NgModule} from "@angular/core";
import {AtividadeFisicaRoutingModule} from "./atividade-fisica-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AtividadeFisicaComponent} from "./atividade-fisica.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [AtividadeFisicaComponent],
    imports: [AtividadeFisicaRoutingModule, CommonModule, ReactiveFormsModule, MatTableModule, MatIconModule, MatButtonModule],
    exports: [HttpClientModule]
})
export class AtividadeFisicaModule {

}