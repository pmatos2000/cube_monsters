import { ID_CARTA_MONSTRO, prioridade } from "./constantes.js";

const imagemFabrica = () => {
  const dadosImagem = {
    [ID_CARTA_MONSTRO]: {
      local: "./resources/img/carta_monstro.png",
      prioridade: prioridade.ALTA,
    },
    toadd: {
      local: "./resources/img/toadd.png",
    },
  };

  const imagemCarregadas = new Map();

  const carregarImagem = (idImagem) => {
    const dados = dadosImagem[idImagem];
    if (dados) {
      const img = new Image();
      img.src = dados.local;
      return img;
    }
  };

  const desenharImagem = (ctx, idImagem, x = 0, y = 0, escala = 1) => {
    const img = imagemCarregadas.get(idImagem) ?? carregarImagem(idImagem);
    if (img) {
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        x,
        y,
        img.width * escala,
        img.height * escala
      );
      console.log(escala);
    }
  };

  return {
    desenharImagem,
  };
};

export default imagemFabrica;
