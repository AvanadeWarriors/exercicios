function iniciar(){
    var players = [getUrlParameter('p1'), getUrlParameter('p2')];
    retornaDadosPrimeiro(players[0],players[1]);
}
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function preencherResultado(usuarios){
    for(var i = 0; i < usuarios.length; i++){
        document.getElementById('user-'+i+'-img').setAttribute('src', usuarios[i].avatar_url);
        document.getElementById('preps-' + i + '-qtd').innerText = usuarios[i].public_repos;
        document.getElementById('preps-' + i + '-pts').innerText = usuarios[i].pontosRepositoriosPublicos;
        document.getElementById('followers-'+i+'-qtd').innerText = usuarios[i].followers;
        document.getElementById('followers-'+i+'-pts').innerText = usuarios[i].pontosFollowers;
        document.getElementById('following-'+i+'-qtd').innerText = usuarios[i].following;
        document.getElementById('following-'+i+'-pts').innerText = usuarios[i].pontosFollowing;
        document.getElementById('following-'+i+'-pts').innerText = usuarios[i].pontosFollowing;
        document.getElementById('stars-'+i+'-qtd').innerText = usuarios[i].estrelasRepositorios;
        document.getElementById('stars-'+i+'-pts').innerText = usuarios[i].pontosEstrelas;
        document.getElementById('gists-'+i+'-qtd').innerText = usuarios[i].public_gists;
        document.getElementById('gists-'+i+'-pts').innerText = usuarios[i].pontosGists;
        document.getElementById('maior-nome-'+i+'-qtd').innerText = usuarios[i].login.length;
        document.getElementById('maior-nome-'+i+'-pts').innerText = usuarios[i].pontosNome;
        document.getElementById('total-points-user-'+i).innerText = usuarios[i].pontosTotais;
    }

}

function comparar(usuario1, usuario2){
    var usuarios = [usuario1, usuario2];
    usuarios[0].pontosTotais = 0;
    usuarios[1].pontosTotais = 0;
   
   
    for(i = 0; i<usuarios.length; i++){
        usuarios[i].pontosRepositoriosPublicos = usuarios[i].public_repos * 20;
        usuarios[i].pontosFollowers = usuarios[i].followers * 10;
        usuarios[i].pontosFollowing = usuarios[i].following * 5;
        
      
        
        for(var x = 0; x < usuarios[i].repositorios; x++){
            usuarios[i].estrelasRepositorios += usuarios[i].repositorios[x].stargazers_count;
        
        }
        if(usuarios[i].estrelasRepositorios == undefined)
            usuarios[i].estrelasRepositorios = 0;

        usuarios[i].pontosGists = usuarios[i].public_gists * 5;
        
        usuarios[i].pontosTotais += usuarios[i].pontosRepositoriosPublicos + usuarios[i].pontosFollowers +  usuarios[i].pontosFollowers + usuarios[i].pontosGists;

    }

    if(usuarios[0].estrelasRepositorios > usuarios[1].estrelasRepositorios ){
        usuarios[0].pontosEstrelas += 100;
        usuarios[0].pontosTotais += 100;
    }else if(usuarios[0].estrelasRepositorios < usuarios[1].estrelasRepositorios ){
        usuarios[1].pontosEstrelas += 100;
        usuarios[1].pontosTotais += 100;
    }else{
        usuarios[0].pontosEstrelas = 0;
        usuarios[1].pontosEstrelas = 0
    }

    if(usuarios[0].login.length > usuarios[1].login.length){
        usuarios[0].pontosNome = 20;
        usuarios[0].pontosTotais += 20;
        usuarios[1].pontosNome = 0
    }else if(usuarios[0].login.length < usuarios[1].login.length){
        usuarios[1].pontosTotais += 20;
        usuarios[1].pontosNome = 20;
        usuarios[0].pontosNome = 0;
    }else{
        usuario[1].pontosNome = 0;
        usuario[0].pontosNome = 0;
    }


    preencherResultado(usuarios);
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
            usuario.repositorios = JSON.parse(xhttp.responseText);
            retornaDadosRepositoriosSegundo(usuario, usuario2)

        }
    }

    xhttp.open("GET", "https://api.github.com/users/" + usuario.login + "/repos", true);
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

    xhttp.open("GET", "https://api.github.com/users/" + usuario2.login + "/repos", true);
    xhttp.send();
}


