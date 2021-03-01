import 'reflect-metadata';
import express from "express";
import createConnection from "./database";
import { router } from '../routes';

createConnection();

const app = express();

//http://localhost:3333/users

//1 param: rota (recurso API)
//2 param: (request, response)

// app.get("/", (request, response) => {
//     return response.json({message: "Hello word - NLW04"});
// });

// app.post("/", (request, response) =>{
//     return response.json({message: "os dados foram salvos com sucesso!"});
// });

app.use(express.json());
app.use(router);

export { app };