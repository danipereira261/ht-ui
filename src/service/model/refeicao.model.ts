export class RefeicaoModel{

    public dataRegistro: any;
    public tipoRefeicao: string;
    public quantidadeEmGramas: number;
    public descricao: string;
    public cpf: string;

    constructor(dataRegistro: any, tipoRefeicao: string, quantidadeEmGramas: number, descricao: string, cpf: string) {
        this.dataRegistro = dataRegistro;
        this.tipoRefeicao = tipoRefeicao;
        this.quantidadeEmGramas = quantidadeEmGramas;
        this.descricao = descricao;
        this.cpf = cpf;
    }

}