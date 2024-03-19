const Turma = require("./Turma")

class TurmaPresencial extends Turma {
    #frequencia

    constructor() {
        super("Turma")
        this.#frequencia = null
    }

    aprovado() {
        return super.aprovado() && this.#frequencia >= 80
    }

    get frequencia() {
        return this.#frequencia
    }

    set frequencia(frequencia) {
        this.#frequencia = frequencia
    }
}

module.exports = TurmaPresencial