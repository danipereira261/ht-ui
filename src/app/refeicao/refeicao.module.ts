import {NgModule} from "@angular/core";
import {RefeicaoRoutingModule} from "./refeicao-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RefeicaoComponent} from "./refeicao.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";

@NgModule({
    declarations: [RefeicaoComponent],
    imports: [RefeicaoRoutingModule, CommonModule, ReactiveFormsModule, MatTableModule],
    exports: [HttpClientModule]
})
export class RefeicaoModule {

}