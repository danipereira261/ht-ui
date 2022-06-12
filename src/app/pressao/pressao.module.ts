import {NgModule} from "@angular/core";
import {PressaoRoutingModule} from "./pressao-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {PressaoComponent} from "./pressao.component";

@NgModule({
    declarations: [PressaoComponent],
    imports: [PressaoRoutingModule, CommonModule],
    exports: [HttpClientModule]
})
export class PressaoModule {

}