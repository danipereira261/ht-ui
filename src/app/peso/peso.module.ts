import {NgModule} from "@angular/core";
import {PesoRoutingModule} from "./peso-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {PesoComponent} from "./peso.component";

@NgModule({
    declarations: [PesoComponent],
    imports: [PesoRoutingModule, CommonModule],
    exports: [HttpClientModule]
})
export class PesoModule {

}