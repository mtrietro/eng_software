import { Pessoa } from "./pessoa"

export class Amigo extends Pessoa {
    private numTelefone: string
    private email: string
    private endereco: string
    private faixaEtaria: FaixaEtaria
}