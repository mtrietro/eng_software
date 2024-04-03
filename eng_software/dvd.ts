import { FaixaEtaria } from "./faixaEtaria"
import { Genero } from "./genero"
import { Pessoa } from "./pessoa"

export class DVD {
    private titulo: string
    private sinopse: string
    private artistaPrincipal: Pessoa
    private direto: Pessoa
    private genero: Genero 
    private classificacao: FaixaEtaria
}
