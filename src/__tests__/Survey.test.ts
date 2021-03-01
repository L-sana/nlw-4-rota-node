import request  from "supertest";
import { app } from "../app";
import createConnection from "../database";


describe("Surveys", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Testando a criação de pesquisa", async () => {
        const response = await request(app).post("/surveys").send({
            title: "Teste pesquisa",
            description: "exemplo de descrição"
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("Testando a criação de pesquisa", async () => {
        await request(app).post("/surveys").send({
            title: "Teste pesquisa2",
            description: "exemplo de descrição2"
        });

        const response = await request(app).get("/surveys");

        expect(response.body.length).toBe(2);

    });
});
