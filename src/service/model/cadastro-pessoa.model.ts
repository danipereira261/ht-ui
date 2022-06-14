export class CadastroPessoaModel {

    public nome: string;
    public sexo: string;
    public dataNascimento: any;
    public cpf: string;
    public email: string;
    public password: string;

    constructor(nome: string, sexo: string, dataNascimento: any, cpf: string, email: string, password: string) {
        this.nome = nome;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.email = email;
        this.password = password;
    }

}