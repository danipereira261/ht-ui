import {NgModule} from "@angular/core";
import {PesoRoutingModule} from "./peso-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {PesoComponent} from "./peso.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [PesoComponent],
    imports: [PesoRoutingModule, CommonModule,
        ReactiveFormsModule, MatTableModule, MatIconModule, MatButtonModule],
    exports: [HttpClientModule]
})
export class PesoModule {

}