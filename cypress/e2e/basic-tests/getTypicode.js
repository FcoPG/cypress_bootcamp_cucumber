describe("User GET request", () => {

    it("GET with properties", () => {
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.request({
            method: "GET",
            url: "/posts",
        })
    });

    it("GET without properties", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts")
    });

    it("GET without properties and check the Characteristics in reponse", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100);
            expect(response.body).to.have.length.greaterThan(90);
            expect(response.body).to.be.an("array");
            expect(response.body).not.to.be.an("number");
            expect(response.body).not.to.be.empty;
        })
    });

    it("GET check the Characteristics for each object in reponse using property", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then((response) => {
            expect(response.status).to.eq(200);
            response.body.forEach((array) => {
                expect(array).to.have.property("userId");
                expect(array).to.have.property("id");
                expect(array).to.have.property("title");
                expect(array).to.have.property("body");
            });
        })
    });

    it("GET check the Characteristics for each object in reponse using include", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then((response) => {
            expect(response.status).to.eq(200);
            response.body.forEach((array) => {
                expect(array).to.include.keys("userId", "id", "title", "body");
            });
        })
    });

    it("GET request and check the Characteristics in reponse", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an("object");
            expect(response.body).not.to.be.an("number");
            expect(response.body).not.to.be.empty;
        })
    });

    it("GET request, check the  total number of objects in reponse", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/comments").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(500);
        })
    });

// ejercicio 31/03/2025
// Nivel 1
    // Añadir tests que hagan get sobre los endpoints :
    // https://jsonplaceholder.typicode.com/photos
    // https://jsonplaceholder.typicode.com/todos
    // Comprobar el status code de cada una de las request así como el tipo de dato que contienen y longitud,

    
    it("GET photos request, Level 1 check status, type and lenght", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/photos").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an("array");
            expect(response.body).to.have.length(5000);
            
        })
    });

    it("GET todos request, Level 1 check status, type and lenght", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/todos").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an("array");
            expect(response.body).to.have.length(200);
            
        })
    });

    // Nivel 2
        // Añadir tests que hagan get sobre el endpoint :
        // https://jsonplaceholder.typicode.com/todos/1
        // Comprobar que en el body de la respuesta title es igual a "delectus aut autem"
        // Comprobar de que tipo de dato es la clave  "completed"
        // Comprobar que el body de la respuesta contenga exactamente:

    it("GET todos/1 request, Level 2 check status, type and lenght", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/todos/1").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an("object");
            expect(response.body).not.to.be.empty;
            expect(response.body).to.have.property("title", "delectus aut autem");
            expect(response.body.title).to.eq("delectus aut autem");
            expect(response.body.completed).to.be.a("boolean");
            expect(response.body).to.include.keys("userId", "id", "title", "completed");
            expect(response.body).deep.equal({
                userId: 1,
                id: 1,
                title: "delectus aut autem",
                completed: false
            });
        })
    });

    //Ejercicio 4/04/2025
    it("Level 1, GET", () => { 
        cy.request("GET", "https://api.restful-api.dev/objects/1").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("id", "1");
            expect(response.body.id).to.be.a("string");
            expect(response.body).to.have.property("name", "Google Pixel 6 Pro");
            expect(response.body.name).to.be.a("string");
            expect(response.body).to.have.property("data");
            expect(response.body.data).to.be.an("object");
            expect(response.body.data).to.include.keys("color", "capacity");
            expect(response.body.data).not.to.be.empty;
            expect(response.body.data).deep.equal({
                color: "Cloudy White",
                capacity: "128 GB"
            });
            expect(response.body.data.color).to.be.a("string");
            expect(response.body.data.capacity).to.be.a("string");
        })
        
    });   

    it.only("Level 1, PUT", () => {
        const postDataTest = {
            "name": "testNamePost",
            "data": {
                "color": "dataColorTestPost",
                "capacity": "dataCapacityTestPost"
            }

        }
        const putDataTest = {
            "name": "testNamePUT",
            "data": {
                "color": "dataColorTestPUT",
                "capacity": "dataCapacityTestPUT"
            }

        }

        cy.log("creando un nuevo objeto con POST");
        cy.request("POST", "https://api.restful-api.dev/objects", postDataTest).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.include(postDataTest);
            cy.wrap(response.body.id).as("objectId"); // Guardar el ID del nuevo objeto creado 
        });


        cy.get("@objectId").then((objectId) => {
            cy.log("ID del nuevo objeto creado:", objectId);
            cy.request("GET", `https://api.restful-api.dev/objects/${objectId}`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.deep.include(postDataTest);
            });

            //hacemos un put para modificar el objeto creado
            cy.log("modificando el objeto creado con PATCH");
            cy.request("PUT", `https://api.restful-api.dev/objects/${objectId}`, putDataTest).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.deep.include(putDataTest);
            })

            cy.log("comprobando que el objeto ha sido modificado correctamente con GET");
            cy.request("GET", `https://api.restful-api.dev/objects/${objectId}`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.deep.include(putDataTest);
            });


        });
        
    });

    it("Level 1, PATCH", () => {
        const postDataTest = {
            "name": "testNamePost",
            "data": {
                "color": "dataColorTestPost",
                "capacity": "dataCapacityTestPost"
            }

        }
        const patchDataTest = {
            "name": "testNamePatch",
            "data": {
                "color": "dataColorTestPatch",
                "capacity": "dataCapacityTestPatch"
            }

        }

        cy.log("creando un nuevo objeto con POST");
        cy.request("POST", "https://api.restful-api.dev/objects", postDataTest).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.include(postDataTest);
            cy.wrap(response.body.id).as("objectId"); // Guardar el ID del nuevo objeto creado 
        });


        cy.get("@objectId").then((objectId) => {
            cy.log("ID del nuevo objeto creado:", objectId);
            cy.request("GET", `https://api.restful-api.dev/objects/${objectId}`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.deep.include(postDataTest);
            });

            //hacemos un patch para modificar el objeto creado
            cy.log("modificando el objeto creado con PATCH");
            cy.request("PATCH", `https://api.restful-api.dev/objects/${objectId}`, patchDataTest).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.deep.include(patchDataTest);
            })

            cy.log("comprobando que el objeto ha sido modificado correctamente con GET");
            cy.request("GET", `https://api.restful-api.dev/objects/${objectId}`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.deep.include(patchDataTest);
            });


        });
        
        
    });

    it("Level 2, POST create new object", () => {
        const postDataTest = {
            "name": "testNameNewObjectPOST",
            "data": {
                "color": "dataColorTestNewObjectPOST",
                "capacity": "dataCapacityNewObjectPOST"
            }

        }
        cy.request("POST", "https://api.restful-api.dev/objects", postDataTest).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.include(postDataTest);
            cy.wrap(response.body.id).as("objectId"); // Guardar el ID del nuevo objeto creado 
        });

        //hacemos un get, delete y get
        cy.get("@objectId").then((objectId) => {


            cy.log("ID del nuevo objeto creado:", objectId);
            cy.request("GET", `https://api.restful-api.dev/objects/${objectId}`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.deep.include(postDataTest);
            });
        
        

            //hacemos un delete para eliminar el objeto creado
            cy.request("DELETE", `https://api.restful-api.dev/objects/${objectId}`).then((response) => {    
                expect(response.status).to.eq(200);
            });

            //hacemos un get para comprobar que el objeto se ha eliminado correctamente
            cy.request("GET", `https://api.restful-api.dev/objects/${objectId}`).then((response) => {
                expect(response.status).to.eq(404); // Comprobar que el objeto no existe
                expect(response.body.message).to.eq(`Oject with id = ${objectId} was not found.`); // Comprobar que el objeto no existe
                // expect(response.body.error).to.eq(`Oject with id = ${objectId} was not found.`);
            });
        });

    });

})