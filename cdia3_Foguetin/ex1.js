var segundos;
var audioTocando = false;
function lancar(){
    var foguete = document.getElementById("rocket");
    foguete.className = "rocket";
    setTimeout(parar, 2000);
}
function passoSegundo(){
    if(segundos == undefined)
        segundos = document.getElementById("txtSegundos").value;
    document.getElementById("btnLancar").disabled = true;
    if(segundos > 0){
        if((!audioTocando) && segundos <= 11){
            let startpoint = (11 - segundos);
            let audio = document.getElementById("audio");
            audio.currentTime = startpoint;
            audio.play();
            audioTocando = true;
        }
        segundos--;
        document.getElementById("lblSegundos").innerText = segundos;
        setTimeout(passoSegundo, 1000);
    }else{
        lancar();
    }
}

function parar(){
    var foguete = document.getElementById("rocket");
    foguete.className = "rocket-stop";
    setTimeout(resetarFoguete, 1000);
}
function resetarFoguete(){
    document.getElementById("btnLancar").disabled = false;
    segundos = document.getElementById("txtSegundos").value;
    var foguete = document.getElementById("rocket");
    foguete.className = "";
    document.getElementById("lblSegundos").innerText = "";
    segundos = undefined;
}

function alteraFoguete(caminho){
    document.getElementById('rocket').setAttribute('src', caminho);
};