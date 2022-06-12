import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AtividadeFisicaComponent} from "./atividade-fisica.component";

const routes: Routes = [
    {
        path: '',
        component: AtividadeFisicaComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtividadeFisicaRoutingModule {

}