db = db.getSiblingDB("mongosabado");

function map() {
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        emit(item.nombre, { importe: item.importe, cantidad: item.cantidad });
    }
}

/*

    {
        "comprador": "comp3",
        "items": [
            { "nombre": "Pantalon", "cantidad": 7, "importe": 5000 },
            { "nombre": "Remera", "cantidad": 3, "importe": 1500 },
            { "nombre": "Zapatillas", "cantidad": 2, "importe": 9000 },
            { "nombre": "Medias", "cantidad": 7, "importe": 3000 },
        ]
    },

*/

function reduce(nombreProducto, datosProducto){
    var importeTotal = 0;
    var cantidadTotal = 0;
    for(var i = 0; i < datosProducto.length; i++){
        importeTotal += datosProducto[i].importe;
        cantidadTotal += datosProducto[i].cantidad;
    }
    return {
        importeTotal: importeTotal,
        cantidadTotal: cantidadTotal,
        datosOriginales: datosProducto
    }
}

/*const opciones = {
    out: "informe_ventas_producto"
}*/

db.facturas.mapReduce(map, reduce, opciones);