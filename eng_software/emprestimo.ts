import { Amigo } from "./amigo"
import { DVD } from "./dvd"

export class Emprestimo {
    private amigo: Amigo
    private dvd: DVD
    private dataEmprestimo: Date
    private dataDevolver: Date
}