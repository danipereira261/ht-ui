import {NgModule} from "@angular/core";
import {RefeicaoRoutingModule} from "./refeicao-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RefeicaoComponent} from "./refeicao.component";

@NgModule({
    declarations: [RefeicaoComponent],
    imports: [RefeicaoRoutingModule, CommonModule],
    exports: [HttpClientModule]
})
export class RefeicaoModule {

}