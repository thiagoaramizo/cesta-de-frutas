import logo from "../../assets/icon.png";
import tomate from "../../assets/frutas/tomate.png";
import laranja from "../../assets/frutas/laranja.png";
import banana from "../../assets/frutas/banana.png";
import maca from "../../assets/frutas/maca.png";
import uva from "../../assets/frutas/uva.png";


const cesta = {
    cabecalho: {
        titulo: "Cesta de Frutas"
    },
    detalhes: {
        nome: "Cesta da manhã",
        fazenda: {
            nomeFazenda: "Nome da fazenda",
            logoFazenda: logo,
        },
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
        preco: 40,
        botao: "Comprar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Laranja",
            imagem: laranja,
          },
          {
            nome: "Banana",
            imagem: banana,
          },
          {
            nome: "Maça",
            imagem: maca,
          },
          {
            nome: "Uva",
            imagem: uva,
          }
        ]
      }
}

export default cesta