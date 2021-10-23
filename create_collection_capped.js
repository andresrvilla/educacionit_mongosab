db = db.getSiblingDB("mongosabado");
db.log.drop();
print("dropped");
db.createCollection("log", {
    capped: true,
    size: 1000,
    max: 10
});