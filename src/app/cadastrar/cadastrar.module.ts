import {NgModule} from "@angular/core";
import {CadastrarRoutingModule} from "./cadastrar-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {CadastrarComponent} from "./cadastrar.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [CadastrarComponent],
    imports: [CadastrarRoutingModule, CommonModule, ReactiveFormsModule],
    exports: [HttpClientModule]
})
export class CadastrarModule {

}