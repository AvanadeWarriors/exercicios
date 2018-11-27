let livros = [
    {
        titulo: "João e o pé de feijão",
        publicacao: 1964
    },
    {
        titulo: "Chapéuzinho vermelho",
        publicacao: 1930
    },
    {
        titulo: "Rapunzel",
        publicacao: 1940
    },
    {
        titulo: "A bela e a fera",
        publicacao: 2000
    },
    {
        titulo: "Branca de neve",
        publicacao: 1901
    }
    
];

//Modificação no código para que o mesmo possa ser usado para diferentes atributos.

var ordenar = function(listaObj, attr){
    var listaOrdenada = listaObj.sort(function(a,b){
        return (a[attr] < b[attr])? -1 : ((a[attr] > b[attr])? 1: 0);
    });

    console.log(listaOrdenada);
}

ordenar(livros,"titulo");

