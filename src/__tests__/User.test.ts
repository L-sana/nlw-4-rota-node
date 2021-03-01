import request  from "supertest";
import { app } from "../app";
import createConnection from "../database";


describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Testando a criação de usuario", async () => {
        const response = await request(app).post("/users").send({
            email: "user-test1@exemple.com",
            name: "User exemple"
        });
        expect(response.status).toBe(201);
    });
});

