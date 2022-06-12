import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PesoComponent} from "./peso.component";

const routes: Routes = [
    {
        path: '',
        component: PesoComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PesoRoutingModule {

}