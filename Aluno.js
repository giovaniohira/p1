const Turma = require("./Turma");
const TurmaPresencial = require("./TurmaPresencial");

class Aluno {
    #turma

    constructor(nome, login, ra) {
        this.nome = nome
        this.login = login
        this.ra = ra
        this.#turma = null
      }

      get turma() {
        return this.#turma
      }
    
      set turma(turma) {
        if (!(turma instanceof Turma || turma instanceof TurmaPresencial)) {
          throw new Error("Turma inválida")
        }
        this._turma = turma
      }
}

module.exports = Aluno