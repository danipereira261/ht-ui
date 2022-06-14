export class PesoModel{

    public peso: number;
    public dataRegistro: any;
    public cpf: string;

    constructor(peso: number, dataRegistro: any, cpf: string) {
        this.peso = peso;
        this.dataRegistro = dataRegistro;
        this.cpf = cpf;
    }

}