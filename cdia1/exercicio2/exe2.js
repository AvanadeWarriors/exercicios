let Pessoa = function(nome, idade, cpf){
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
}

let Professor = function(nome, idade, cpf, materia){
    Pessoa.call(this, nome, idade, cpf);
    this.materia = materia;
}

Professor.prototype = new Professor();
Professor.prototype.constructor = Professor();
Professor.prototype.dizMateria = function(){
    console.log(`${this.nome} está ensinado a matéria ${this.materia}`);
}


let prof = new Professor('José', 14, '438.576.728-97', 'Portugues');

prof.dizMateria();