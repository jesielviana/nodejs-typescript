import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const rotas = Router();
const prisma = new PrismaClient();

rotas.get('/', async (req: Request, res: Response) => {
  const usuarios = await prisma.usuario.findMany({});
  res.json(usuarios);
});

rotas.post('/', async (req: Request, res: Response) => {
  const { nome, email } = req.body;
  try {
    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
      },
    });
    res.status(201).json(usuario);
  } catch (erro) {
    res.status(400).send(erro);
  }
});

export default rotas;
