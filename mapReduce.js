db = db.getSiblingDB("mongosabado");

db.movieDetails.mapReduce(
    function() { emit(this.year,this.title) },// Step "MAP"
    //aca, el motor conviernte en este formato: año: [titulo1,titulo2,tituloN
    function(key,values) { return { peliculas: values,cantidad:values.length}; },
    {
        out: "peliculas_año"
    }
)