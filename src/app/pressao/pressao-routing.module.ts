import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PressaoComponent} from "./pressao.component";

const routes: Routes = [
    {
        path: '',
        component: PressaoComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PressaoRoutingModule {

}