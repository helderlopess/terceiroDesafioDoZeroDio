/** Helder Lopes 29/02/2024
 *  3️⃣ Escrevendo as classes de um Jogo*/

//classe generica do heroi
class heroi {
  constructor (nome,idade,tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  //metodo que classifica o tipo de ataque em favor da vocação e imprime o ataque
  atacar() {
    let ataque = "-"
    switch (this.tipo) {
      case "mago":
        ataque = "magia"
        break;

      case "guerreiro":
        ataque = "espada"
        break;

      case "monge":
        ataque = "artes marciais"
        break;

      case "ninja":
        ataque = "shuriken"
        break;

      default:
        console.log("Heroi não encontrado")
        return;
    }


    //quadro layout decorativo
    function criarQuadro(largura,altura,texto) {
      // Cria a parte superior do quadro
      let linhaSuperior = "+" + "-".repeat(largura) + "+";

      // Cria as linhas intermediárias com o texto centralizado
      let linhaIntermediaria = "|" + texto.padStart((largura - texto.length) / 2 + texto.length," ").padEnd(largura + 0," ") + "|";

      // Constrói o quadro com base na altura especificada
      let quadro = linhaSuperior;
      for (let i = 0;i < altura;i++) {
        quadro += "\n" + linhaIntermediaria;
      }
      quadro += "\n" + linhaSuperior;

      return quadro;
    }

    //imprimindo a vocação, seu ataque e o quadro
    console.log(criarQuadro(50,1,`O ${this.tipo} ${this.nome} atacou usando ${ataque}`))
  }

}

//-------------------------instanciando heroi e imprimingo seus ataques
let mago = new heroi("Lenin",100,"mago")
mago.atacar()

let guerreiro = new heroi("Stalin",90,"guerreiro")
guerreiro.atacar()

let monge = new heroi("Nadejda",85,"monge")
monge.atacar()

let ninja = new heroi("Mao TseTung",131,"ninja")
ninja.atacar();
