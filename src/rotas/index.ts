import { Router, Request, Response } from 'express';
import rotasDeUsuarios from './usuarios';

const rotas = Router();

rotas.get('/', (req: Request, res: Response) => {
  res.send('Ola!');
});

rotas.use('/usuarios', rotasDeUsuarios);

export default rotas;
