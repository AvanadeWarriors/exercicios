function iniciar(){
    
}
function comparar(usuario1, usuario2){
    var usuarios = [usuario1, usuario2];
    usuarios[0].pontosTotais = 0;
    usuarios[1].pontosTotais = 0;
   
   
    for(i = 0; i<usuarios.length; i++){
        usuarios[i].pontosRepositoriosPublicos = usuarios[i].public_repos * 20;
        usuarios[i].pontosFollowers = usuarios[i].followers * 10;
        usuarios[i].pontosFollowers = usuarios[i].following * 5;
        
      
        
        for(var x = 0; x < usuarios[i].repositorios; x++){
            usuarios[i].estrelasRepositorios += usuarios[i].repositorios[x].stargazers_count;
        
        }
        usuarios[i].pontosGists = usuarios[i].public_gists * 5;
        
        usuarios[i].pontosTotais += usuarios[i].pontosRepositoriosPublicos + usuarios[i].pontosFollowers +  usuarios[i].pontosFollowers + usuarios[i].pontosGists;

    }

    if(usuarios[0].estrelasRepositorios > usuarios[1].estrelasRepositorios ){
        usuarios[0].pontosTotais += 100;
    }else if(usuarios[0].estrelasRepositorios < usuarios[1].estrelasRepositorios ){
        usuarios[1].pontosTotais += 100;
    }

    if(usuarios[0].login.length > usuarios[0].login.length > )
        usuarios[0].pontosTotais += 20;
    else if(usuarios[0].login.length < usuarios[0].login.length > )
        usuarios[1].pontosTotais += 20;


}


function retornaDadosPrimeiro(usuario, usuario2){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var json = JSON.parse(xhttp.responseText);
            retornaDadosSegundo(json, usuario2)
        }
        
    }

    xhttp.open("GET", "https://api.github.com/users/"+usuario, true);
    xhttp.send();


}
function retornaDadosSegundo(usuario, usuario2){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var json = JSON.parse(xhttp.responseText);
            retornaDadosRepositoriosPrimeiro(usuario, json);
        }
        
    }

    xhttp.open("GET", "https://api.github.com/users/"+usuario2, true);
    xhttp.send();


}

function retornaDadosRepositoriosPrimeiro(usuario, usuario2){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            usuario.repositorios =  JSON.parse(xhttp.responseText);
            retornaDadosRepositoriosSegundo(usuario, usuario2)

        }
    }

    xhttp.open("GET", "https://api.github.com/users/" + usuario + "/repos", true);
    xhttp.send();
}

function retornaDadosRepositoriosSegundo(usuario, usuario2){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            usuario2.repositorios =  JSON.parse(xhttp.responseText);
            comparar(usuario, usuario2);
        }
    }

    xhttp.open("GET", "https://api.github.com/users/" + usuario + "/repos", true);
    xhttp.send();
}


