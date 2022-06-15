export class AtividadeFisicaModel{

    public duracaoEmMinutos: number;
    public dataRegistro: any;
    public tipoAtividadeFisica: string;
    public cpf: string;

    constructor(duracaoEmMinutos: number, dataRegistro: any, tipoAtividadeFisica: string, cpf: string) {
        this.duracaoEmMinutos = duracaoEmMinutos;
        this.dataRegistro = dataRegistro;
        this.tipoAtividadeFisica = tipoAtividadeFisica;
        this.cpf = cpf;
    }
}