import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {FormControl, FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {RefeicaoModel} from "../../service/model/refeicao.model";
import {RefeicaoService} from "../../service/refeicao.service";

@Component({
    selector: 'app-refeicao',
    templateUrl: './refeicao.component.html',
    styleUrls: ['./refeicao.component.css']
})
export class RefeicaoComponent implements OnInit {

    @ViewChild('asdf') asdf: ElementRef | undefined;
    @ViewChild(MatTable) myTable!: MatTable<any>;

    myControl = new FormGroup({
        dataRegistro: new FormControl(),
        tipoRefeicao: new FormControl(),
        quantidadeEmGramas: new FormControl(),
        descricao: new FormControl()
    });
    displayedColumns: string[] = ['dataRegistro', 'tipoRefeicao', 'quantidadeEmGramas', 'descricao'];

    dataSource = new MatTableDataSource<RefeicaoModel>([]);

    constructor(
        private renderer: Renderer2,
        private router: Router,
        private service: RefeicaoService
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

        const cpf = localStorage.getItem('cpf');
        // @ts-ignore
        const dataRegistro = this.myControl.get('dataRegistro').value;
        const newDate = new DatePipe('en-US').transform(dataRegistro, 'dd/MM/yyyy');
        // @ts-ignore
        const tipoRefeicao = this.myControl.get('tipoRefeicao').value;
        // @ts-ignore
        const quantidadeEmGramas = this.myControl.get('quantidadeEmGramas').value;
        // @ts-ignore
        const descricao = this.myControl.get('descricao').value;
        // @ts-ignore
        const model = new RefeicaoModel(newDate, tipoRefeicao, quantidadeEmGramas, descricao, cpf);

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
