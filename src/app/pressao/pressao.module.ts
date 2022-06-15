import {NgModule} from "@angular/core";
import {PressaoRoutingModule} from "./pressao-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {PressaoComponent} from "./pressao.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [PressaoComponent],
    imports: [PressaoRoutingModule, CommonModule, ReactiveFormsModule, MatTableModule, MatIconModule, MatButtonModule],
    exports: [HttpClientModule]
})
export class PressaoModule {

}