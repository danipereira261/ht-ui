import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CadastrarComponent} from "./cadastrar.component";

const routes: Routes = [
    {
        path: '',
        component: CadastrarComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastrarRoutingModule {

}