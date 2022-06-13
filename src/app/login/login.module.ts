import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [LoginComponent],
    imports: [LoginRoutingModule, CommonModule,ReactiveFormsModule],
    exports: [HttpClientModule]
})
export class LoginModule {

}