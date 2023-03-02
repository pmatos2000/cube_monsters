import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(express.static("public"));

const PORTA = 3000;

server.listen(PORTA, () => {
  console.log(`Servidor executando na porta ${PORTA}`);
});
