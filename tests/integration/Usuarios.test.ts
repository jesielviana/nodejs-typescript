import "jest";
import { PrismaClient } from "@prisma/client";
import request from "supertest";
import app from "../../src/App";

let prisma;

beforeAll(async () => {
  prisma = new PrismaClient();
  const removeUsuarios = prisma.usuario.deleteMany();
  await prisma.$transaction([removeUsuarios]);
});

afterAll(async () => {
  const removeUsuarios = prisma.usuario.deleteMany();
  await prisma.$transaction([removeUsuarios]);
  await prisma.$disconnect();
});

describe("Usuários", () => {
  test("Cadastro com sucesso", async () => {
    const usuario = {
      nome: "Usuário de teste 1",
      email: "usuario1@email.com",
    };
    const response = await request(app).post("/usuarios").send(usuario);
    expect(response.statusCode).toBe(201);
  });

  test("Cadastro com erro email duplicado", async () => {
    const usuario = {
      nome: "Usuário de teste 1",
      email: "usuario1@email.com",
    };
    const response = await request(app).post("/usuarios").send(usuario);
    expect(response.statusCode).toBe(400);
  });

  test('Get todos usuarios', async() => {
    const response = await request(app).get("/usuarios");
    expect(response.statusCode).toBe(200);
    const usuarios = response.body;
    console.log(typeof(usuarios));
    expect(usuarios.length).toBe(1);

  })
});
