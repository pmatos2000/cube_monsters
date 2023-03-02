import jogoFabrica from "./jogo.js";

const main = () => {
  const canvas = document.getElementById("tela");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const jogo = jogoFabrica(canvas);
  jogo.inicializar();
};

export default main;
