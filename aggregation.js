db = db.getSiblingDB("mongosabado");
/*
var cursor = db.movieDetails.aggregate([
    { $match: { "imdb.votes": { $gt: 50} } },
    //{ $match: { year: 2013 } },
    { $project: { title: 1, year: 1, director: 1, type: 1} },
    { $group: { _id: "$director", cant: { $sum: 1} } }
]);

var count = 0;
while (cursor.hasNext()) {
    printjson(cursor.next());
    count++;
}
print("Cantidad: "+count);

*/
// Ejercicio 1 laboratorio

var cursorEjercicioUno = db.movieDetails.aggregate(
    [
        { $match: { director: "Stanley Kubrick", year: 1968 } },
        { $project: { title: 1, awards: 1, _id: 0 } }

    ]
);

var count = 0;
while (cursorEjercicioUno.hasNext()) {
    printjson(cursorEjercicioUno.next());
    count++;
}
print("Cantidad: " + count);

// Ejercicio 2 laborartorio

var cursorEjercicioDos = db.cursos.aggregate(
    [
        { $group: { _id: "$by_user", horas: { $sum: "$horas" } } }
    ]
)


var count = 0;
while (cursorEjercicioDos.hasNext()) {
    printjson(cursorEjercicioDos.next());
    count++;
}
print("Cantidad: " + count);

// Ejercicio 3 laborartorio

var cursorEjercicioTres = db.cursos.aggregate(
    [
        { $group: { _id: "$by_user", likes: { $sum: "$likes" } } }
    ]
)


var count = 0;
while (cursorEjercicioTres.hasNext()) {
    printjson(cursorEjercicioTres.next());
    count++;
}
print("Cantidad: " + count);