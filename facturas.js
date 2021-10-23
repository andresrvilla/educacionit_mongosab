db = db.getSiblingDB("mongosabado");

var facturas = [
    {
        "comprador": "comp1",
        "items": [
            { "nombre": "Pantalon", "cantidad": 2, "importe": 2000 },
            { "nombre": "Remera", "cantidad": 1, "importe": 500 },
            { "nombre": "Zapatillas", "cantidad": 1, "importe": 1500 },
            { "nombre": "Medias", "cantidad": 3, "importe": 1700 },
        ]
    },
    {
        "comprador": "comp2",
        "items": [
            { "nombre": "Pantalon", "cantidad": 1, "importe": 1000 },
            { "nombre": "Zapatillas", "cantidad": 2, "importe": 3500 },
            { "nombre": "Medias", "cantidad": 1, "importe": 700 },
        ]
    },
    {
        "comprador": "comp3",
        "items": [
            { "nombre": "Remera", "cantidad": 3, "importe": 1500 }
        ]
    },
    {
        "comprador": "comp2",
        "items": [
            { "nombre": "Medias", "cantidad": 3, "importe": 1700 }
        ]
    },
    {
        "comprador": "comp3",
        "items": [
            { "nombre": "Pantalon", "cantidad": 7, "importe": 5000 },
            { "nombre": "Remera", "cantidad": 3, "importe": 1500 },
            { "nombre": "Zapatillas", "cantidad": 2, "importe": 9000 },
            { "nombre": "Medias", "cantidad": 7, "importe": 3000 },
        ]
    },
]

db.facturas.insert(facturas);