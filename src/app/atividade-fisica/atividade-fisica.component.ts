import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {AtividadeFisicaService} from "../../service/atividade-fisica.service";
import {AtividadeFisicaModel} from "../../service/model/atividade-fisica.model";
import {MatTable, MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-atividade-fisica',
    templateUrl: './atividade-fisica.component.html',
    styleUrls: ['./atividade-fisica.component.css']
})
export class AtividadeFisicaComponent implements OnInit {

    @ViewChild('asdf') asdf: ElementRef | undefined;
    @ViewChild(MatTable) myTable!: MatTable<any>;

    myControl = new FormGroup({
        dataRegistro: new FormControl(),
        atividade: new FormControl(),
        tempo: new FormControl()
    });
    displayedColumns: string[] = ['dataRegistro', 'tipoAtividadeFisica', 'duracaoEmMinutos', 'acao'];

    dataSource = new MatTableDataSource<AtividadeFisicaModel>([]);

    constructor(
        private renderer: Renderer2,
        private router: Router,
        private service: AtividadeFisicaService) {
    }

    ngOnInit(): void {
        this.buscarTodos();
    }

    home() {
        this.router.navigate(['home'])
    }

    salvar() {
        const cpf = localStorage.getItem('cpf');
        // @ts-ignore
        const dataRegistro = this.myControl.get('dataRegistro').value;
        const newDate = new DatePipe('en-US').transform(dataRegistro, 'dd/MM/yyyy');
        // @ts-ignore
        const atividade = this.myControl.get('atividade').value;
        // @ts-ignore
        const tempo = this.myControl.get('tempo').value;
        // @ts-ignore
        const model = new AtividadeFisicaModel(tempo, newDate, atividade, cpf);

        this.service.cadastrar(model).subscribe(
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

    buscarTodos() {
        const cpf = localStorage.getItem('cpf');
        // @ts-ignore
        this.service.buscarTodosRegistros(cpf).subscribe((data: any) => {
                this.dataSource = data;
            }
        );
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
        this.myControl.get('atividade')?.setValue('');
        this.myControl.get('tempo')?.setValue('');
        this.myControl.get('dataRegistro')?.setValue('');
    }
}
