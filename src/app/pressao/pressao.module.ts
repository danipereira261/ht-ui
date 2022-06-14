import {NgModule} from "@angular/core";
import {PressaoRoutingModule} from "./pressao-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {PressaoComponent} from "./pressao.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";

@NgModule({
    declarations: [PressaoComponent],
    imports: [PressaoRoutingModule, CommonModule, ReactiveFormsModule, MatTableModule],
    exports: [HttpClientModule]
})
export class PressaoModule {

}