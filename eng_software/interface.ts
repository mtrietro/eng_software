import { Amigo } from "./amigo";
import { DVD } from "./dvd";

export class Interface {
    imprime(string: string) {}
    imprimeMenu() {}
    leDVD() {}
    leAmigo() {}
    leEmprestimo() {}
    alteraFaixaEtaria(amigo: Amigo, dvd: DVD) {}
}

