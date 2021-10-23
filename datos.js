print("Inicio de busqueda de personas");
var cursor = db.personas.find(); //Puede tener condiciones, etc

while(cursor.hasNext()){
    var objeto = cursor.next();
    printjson(objeto);
}
print("Fin del script");