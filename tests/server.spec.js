const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");

let token;
beforeAll(async done => {
    await db("users").truncate();
    request(server)
    .post("/api/auth/register")
    .send({
        username: "user",
        password: "pw",
        email: "123@123.com",
        location: "Miami, Fl"
    })
    .end((err, response ) => {
        token = response.body.token;
        done();
    });
});

describe("server.js", () => {
    let post = {
        recipe_title: "Pizza"
    };
    describe("GET /api/posts", () => {
        it("should set testing environment", () => {
            expect(process.env.DB_ENV).toBe("testing");
        });

        it("should return JSON", () => {
            return request(server)
            .get("/api/posts")
            .then(res => {
                expect(res.type).toBe("application/json");
            });
        });
        
        it("should return status code 401 when not authorized.", () =>{
            return request(server)
            .get("/api/posts")
            .then(res => {
                expect(res.status).toBe(401);
            });
        });

        it.skip("should return status code 200 when authorized", () => {
            return request(server)
            .set("Authorization", `${token}`)
            .get("/api/posts")
            .then(reponse => {
                expect(reponse.statusCode).toBe(200);
            });
        });
    });

    describe("POST /api/posts", () => {
        let post = {
            recipe_title: "Pizza"
        };
        it("should return JSON", () => {
            return request(server)
            .post("/api/posts")
            .set("Authorization", `${token}`)
            .send(post)
            .then(res => {
                expect(res.type).toBe("applicaiton/json");
            });
        });

        it("should return status code 401 when not authorized.", () => {
            return request(server)
            .post("/api/posts")
            .then(res => {
                expect(res.status).toBe(401);
            });
        });
    });

    
})