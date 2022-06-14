export class PressaoModel{

    public dataRegistro: any;
    public cpf: string;
    public medicao: string;

    constructor(medicao: string, dataRegistro: any, cpf: string) {
        this.medicao = medicao;
        this.dataRegistro = dataRegistro;
        this.cpf = cpf;
    }

}