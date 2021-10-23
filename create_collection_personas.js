// OJO! Que esto es un peligro!!!
// LO hago de esta manera porque modificar una validacion no es tan amigable...
// collMod es el comando con el que modifico
db.personas.drop();
print("Se borro la coleccion");
db.createCollection("personas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "apellido", "edad", "dni"],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "objectId"
                },
                nombre: {
                    bsonType: "string",
                    minLength: 3,
                    description: "Debe ser string y con 3 caracteres al menos"
                },
                apellido: {
                    bsonType: "string",
                    minLength: 3,
                    description: "Debe ser string y con 3 caracteres al menos"
                },
                edad:{
                    bsonType: "int",
                    minimum: 0,
                    description: "Debe ser entero y minimo un valor igual a cero"
                },
                dni:{
                    bsonType: "object",
                    required: ["tipo","numero"],
                    properties:{
                        tipo: {
                            enum: ["DNI","Pasaporte"]
                        },
                        numero: {
                            bsonType: "string"
                        }
                    }
                }
            }
        }
    }
})