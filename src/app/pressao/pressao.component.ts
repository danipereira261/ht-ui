import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {PressaoService} from "../../service/pressao.service";
import {DatePipe} from "@angular/common";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {FormControl, FormGroup} from "@angular/forms";
import {PressaoModel} from "../../service/model/pressao.model";

@Component({
    selector: 'app-pressao',
    templateUrl: './pressao.component.html',
    styleUrls: ['./pressao.component.css']
})
export class PressaoComponent implements OnInit {

    @ViewChild('asdf') asdf: ElementRef | undefined;
    @ViewChild(MatTable) myTable!: MatTable<any>;

    myControl = new FormGroup({
        medicao: new FormControl(),
        dataRegistro: new FormControl(),
    });
    displayedColumns: string[] = ['data', 'medicao', 'acao'];

    dataSource = new MatTableDataSource<PressaoModel>([]);


    constructor(
        private renderer: Renderer2,
        private service: PressaoService,
        private router: Router
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
                console.log(data);
                this.dataSource = data;
            }
        );
    }

    salvar() {

        // @ts-ignore
        const medicao = this.myControl.get('medicao').value;
        // @ts-ignore
        const dataRegistro = this.myControl.get('dataRegistro').value;
        const newDate = new DatePipe('en-US').transform(dataRegistro, 'dd/MM/yyyy');
        const cpf = localStorage.getItem('cpf');
        // @ts-ignore
        const pressaoModel = new PressaoModel(medicao, newDate, cpf);

        this.service.salvar(pressaoModel).subscribe(
            c => {
                this.clean();
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

    delete(element: any) {
        this.service.deletById(element.id).subscribe((data: any) => {
                this.dataSource = data;
                this.refreshFunc();
            }
        );
    }

    clean() {
        this.myControl.get('medicao')?.setValue('');
        this.myControl.get('dataRegistro')?.setValue('');
    }
}
