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

let ordenar = function(obj,type){
    switch (type) {
        case "publicacao":
            let pub = obj.sort(function(a, b){return a.publicacao - b.publicacao});

            console.log(pub);
        break;

        case "titulo":
            let tit = obj.sort(function(a, b){
                var x = a.titulo.toLowerCase();
                var y = b.titulo.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });

            console.log(tit);
        break;

        default:
            console.log("Opção invalida");
        break;
    }
}

ordenar(livros,"publicacao");
console.log("------------------------------------------------------")
ordenar(livros,"titulo");