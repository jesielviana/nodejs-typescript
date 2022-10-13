import express from 'express';
import rotas from './rotas';

// criação de uma instância do express/servidor http
const app = express();

app.use(express.json());

// middleware de tratamento de todas as rotas
app.use('/', rotas);

export default app;

