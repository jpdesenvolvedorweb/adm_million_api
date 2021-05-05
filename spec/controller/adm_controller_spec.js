const { response } = require('express');
const request = require('request-promise');
const host = "http://localhost:3000";

describe("AdmController", () => {
    describe("GET /adm.json - deve retornar uma lista de administradores", () => {
        it("deve retornar o status code de 200", (done) => {
            let options = {
                method: 'GET',
                uri: `${host}/adm.json`,
                resolveWithFullResponse: true
            };
            request(options).then(response => {
                expect(response.statusCode).toBe(200);
                console.log(response.statusCode);
            })
                .catch((err) => {
                    throw err.message
                }).finally(done);
        });

        it("deve dados na API", (done) => {
            let options = {
                method: 'GET',
                uri: `${host}/adm.json`,
                resolveWithFullResponse: true
            };
            request(options).then(response => {
                itens = JSON.parse(response.body);
                expect(itens[0].id).toBe(1);
                expect(itens[1].id).toBe(2);
            })
                .catch((err) => {
                    throw err.message
                }).finally(done);
        });
        /*
        it("deve retornar dados na API", (done) => {
            request.get(host + "/adm.json", (error, response, body) => {
                if (response === undefined) {
                    console.log("Não consegui localizar o servidor");
                    expect(503).toBe(200);
                }
                else {
                    expect(response.statusBody).toBe([
                        {
                            id: 1,
                            nome: "João Paulo",
                            senha: "1234567890",
                        },
                        {
                            id: 2,
                            nome: "João PAulo 2",
                            senha: "0987654321",
                        }
                    ]);
                }
                done();
            });
        });
        */
    });
});