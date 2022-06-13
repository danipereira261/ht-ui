import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CadastrarComponent} from "./cadastrar/cadastrar.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: LoginComponent,
        data: {
            title: 'Login Page'
        }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Home'
        }
    },
    {
        path: 'cadastrar',
        component: CadastrarComponent,
        data: {
            title: 'Cadastrar'
        }
    },
    {
        path: 'login',
        component: AppComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: '',
                loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
            },
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'cadastrar',
                loadChildren: () => import('./cadastrar/cadastrar.module').then(m => m.CadastrarModule)
            },
            {
                path: 'atividade-fisica',
                loadChildren: () => import('./atividade-fisica/atividade-fisica.module').then(m => m.AtividadeFisicaModule)
            },
            {
                path: 'peso',
                loadChildren: () => import('./peso/peso.module').then(m => m.PesoModule)
            },
            {
                path: 'refeicao',
                loadChildren: () => import('./refeicao/refeicao.module').then(m => m.RefeicaoModule)
            },
            {
                path: 'pressao',
                loadChildren: () => import('./pressao/pressao.module').then(m => m.PressaoModule)
            }
        ]

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
