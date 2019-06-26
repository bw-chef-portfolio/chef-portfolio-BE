const request = require("supertest");
const db = require("../data/dbConfig.js");
const server = require("../api/server.js");

let token;
beforeAll(async done => {
  await db("users").truncate();
  request(server)
    .post("/api/auth/register")
    .send({
      username: "user",
      password: "pw",
      email: "123@123.com",
      location: "Miami, FL"
    })
    .end((err, response) => {
      token = response.body.token;
      done();
    });
});

describe("server.js", () => {
  let post = {
    wedding_theme: "Rustic"
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

    it("should return status code 401 when not authorized.", () => {
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
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

  describe("POST /api/posts", () => {
    let post = {
      wedding_theme: "Rustic"
    };
    it("should return JSON", () => {
      return request(server)
        .post("/api/posts")
        .set("Authorization", `${token}`)
        .send(post)
        .then(res => {
          expect(res.type).toBe("application/json");
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

  describe("PUT /api/posts", () => {
    it("should return JSON", () => {
      return request(server)
        .put(`/api/posts/${post.id}`)
        .set("Authorization", `${token}`)
        .send(post)
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });

    it.skip("should return status code 200 when authorized", () => {
      return request(server)
        .set("Authorization", `${token}`)
        .put(`/api/posts/18`)
        .send(post)
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

  describe("DELETE /api/posts", () => {
    it("should return JSON", () => {
      return request(server)
        .delete(`/api/posts/${post.id}`)
        .set("Authorization", `${token}`)
        .send(post)
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });

    it("should return status code 401 when not authorized.", () => {
      return request(server)
        .delete(`/api/posts/${post.id}`)
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    it.skip("should return status code 200 when authorized", () => {
      return request(server)
        .set("Authorization", `${token}`)
        .put(`/api/posts/${posts.id}`)
        .send(post)
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });
});

afterEach(async () => {
  await db("posts").truncate();
});