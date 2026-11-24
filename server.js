import express from "express";
import bcrypt from "bcrypt";



import {cadastRout} from "./src/routers/cadastro.alunos.js";
import { notasRout } from "./src/routers/notas.alunos.js";
import { turmaRout } from "./src/routers/turmas.js";
import { brasilRout } from "./src/routers/brasilapi.js";

const app = express();
app.use(express.json());
app.use(cadastRout);
app.use(notasRout);
app.use(turmaRout);
app.use(brasilRout);

const senha="123456";
const senhaHash= await
bcrypt.hash(senha, 10);
console.log(senhaHash);

app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333");
})