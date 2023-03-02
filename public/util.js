export const gerarIdAleatorio = (
  tamanhoId,
  simbolo = "0123456789abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ"
) => {
  const tamanhoSimbolo = simbolo.length;
  let id = "";
  for (i = 0; i < tamanhoId; i++) {
    let posSimbolo = Math.floor(Math.random() * tamanhoSimbolo);
    id += tamanhoSimbolo[posSimbolo];
  }
  return id;
};
