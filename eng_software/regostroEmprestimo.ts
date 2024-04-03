import { Amigo } from "./amigo";
import { DVD } from "./dvd";
import { Emprestimo } from "./emprestimo";

export class RegistroEmprestimo {
    public emprestimos: Emprestimo[]

    public empresta(amigo: Amigo, dvd: DVD) {}
    public devolve(dvd: DVD) {}
    private estahEmprestado(dvd: DVD) {}
    private faixaEtariaAbaixo(amigo: Amigo, dvd: DVD) {}
}