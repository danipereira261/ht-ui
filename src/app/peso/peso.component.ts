import {Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {Router} from "@angular/router";
import {PessoaService} from "../../service/peso.service";
import {PesoModel} from "../../service/model/peso.model";
import {FormControl, FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {MatTable, MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
    registro: any;
    data: any;
    peso: any;
    acoes: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {registro: 1, data: 'Hydrogen', peso: 1.0079, acoes: 'H'},
    {registro: 2, data: 'Helium', peso: 4.0026, acoes: 'He'},
    {registro: 3, data: 'Lithium', peso: 6.941, acoes: 'Li'},
    {registro: 4, data: 'Beryllium', peso: 9.0122, acoes: 'Be'},
    {registro: 5, data: 'Boron', peso: 10.811, acoes: 'B'},
];

@Component({
    selector: 'app-peso',
    templateUrl: './peso.component.html',
    styleUrls: ['./peso.component.css']
})
export class PesoComponent implements OnInit {

    @ViewChild('asdf') asdf: ElementRef | undefined;
    @ViewChild(MatTable) myTable!: MatTable<any>;

    myControl = new FormGroup({
        peso: new FormControl(),
        dataRegistro: new FormControl(),
    });
    displayedColumns: string[] = ['registro', 'data', 'peso'];

    dataSource = new MatTableDataSource<PesoModel>([]);

    constructor(
        private renderer: Renderer2,
        private router: Router,
        private service: PessoaService
    ) {
    }

    ngOnInit(): void {
        this.buscarTodos();
    }

    home() {
        this.router.navigate(['home'])
    }

    buscarTodos() {
        const cpf = localStorage.getItem('cpf');
        // @ts-ignore
        this.service.buscarTodosRegistros(cpf).subscribe((data: any) => {
                this.dataSource = data;
            }
        );
    }

    salvar() {

        // @ts-ignore
        const peso = this.myControl.get('peso').value;
        // @ts-ignore
        const dataRegistro = this.myControl.get('dataRegistro').value;
        const newDate = new DatePipe('en-US').transform(dataRegistro, 'dd/MM/yyyy');
        const cpf = localStorage.getItem('cpf');
        // @ts-ignore
        const model = new PesoModel(peso, newDate, cpf);

        this.service.cadastrar(model).subscribe(
            c => {
                this.refreshFunc()
                this.show()
                setTimeout(() => {
                    this.remove();
                }, 2000);
            }
        );
    }

    refreshFunc() {
        this.buscarTodos();
        this.myTable.renderRows();
    }

    sair() {
        this.router.navigate([''])
    }

    show() {
        const p: HTMLParagraphElement = this.renderer.createElement('p');
        p.innerHTML = '<p id="alerta" class="alert alert-info" style="text-align: center">Dados Adicionado com sucesso!</p>';
        // @ts-ignore
        this.renderer.appendChild(this.asdf.nativeElement, p)

    }

    remove() {
        const e = this.renderer.selectRootElement('.another-test', false);
    }
}
