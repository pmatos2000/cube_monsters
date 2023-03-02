import cartasFabrica from "./cartas.js";

const alturaJogo = 768;
const larguraJogo = 1366;

const jogoFabrica = (canvas) => {
  const ctx = canvas.getContext("2d");
  const alturaCarnvas = canvas.height;
  const larguraCarnvas = canvas.width;

  const cartas = cartasFabrica();

  const limparCanvas = () => {
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, larguraCarnvas, alturaCarnvas);
  };

  const atualizarTela = () => {
    limparCanvas();

    cartas.desenharCarta(ctx, { idCarta: "toadd" });
    requestAnimationFrame(atualizarTela);
  };

  const inicializar = () => {
    requestAnimationFrame(atualizarTela);
  };

  return {
    inicializar,
  };
};

export default jogoFabrica;
