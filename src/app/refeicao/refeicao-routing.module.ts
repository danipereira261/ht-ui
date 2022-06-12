import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RefeicaoComponent} from "./refeicao.component";

const routes: Routes = [
    {
        path: '',
        component: RefeicaoComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RefeicaoRoutingModule {

}