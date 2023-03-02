import { ID_CARTA_MONSTRO } from "./constantes.js";
import imagemFabrica from "./imagem.js";
import { gerarIdAleatorio } from "./util.js";

const cartasFabrica = () => {
  const alturaCarta = 756;
  const larguraCarta = 1039;

  const dadosCartas = {
    toadd: {
      titulo: "Toadd",
      descricao: "Um toadd perdido no mundo",
      ataque: 1,
      defesa: 1,
      vida: 1,
      velocidade: 1,
      alcance: 1,
      nivel: 1,
      habilidades: [],
    },
  };

  const imagens = imagemFabrica();

  const obterInformacaoCarta = (idCarta) => {
    return { ...dadosCartas[idCarta], idCarta, idUnico: gerarIdAleatorio(8) };
  };

  const desenharCarta = (ctx, carta, x = 0, y = 0, escala = 1) => {
    const dados = dadosCartas[carta.idCarta];
    if (dados) {
      imagens.desenharImagem(ctx, carta.idCarta, x + 21, y + 21, escala);
      imagens.desenharImagem(ctx, ID_CARTA_MONSTRO, x, y, escala);
    }
  };

  return {
    obterInformacaoCarta,
    desenharCarta,
  };
};

export default cartasFabrica;
