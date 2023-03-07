

function Sobrefunc(){
    document.getElementById('texto').style.transition = '1s' ;
    var text = document.getElementById("texto").style.display = "inline"
    var buttonSobre =  document.getElementById("btn-sobre").style.display = "none"
    var buttonMenos =  document.getElementById("btn-menos").style.display = "inline"

    
    

    
}



function menosfunc(){
    var text = document.getElementById("texto").style.display = "none"
    var buttonSobre =  document.getElementById("btn-sobre").style.display = "inline"
    var buttonMenos =  document.getElementById("btn-menos").style.display = "none"

}
 










var img1 = "./Assets/imgs/pedraFilosofal.jpg"
var img2 = "./Assets/imgs/camaraSecreta.jpg"
var img3 = "./Assets/imgs/prisioneirodeaskaban.jpg"
var img4 = "./Assets/imgs/caliseDeFogo.jpg"
var img5 = "./Assets/imgs/ordem.jpg"
var img6 = "./Assets/imgs/eni.jpg"
var img7 = "./Assets/imgs/reliquiasDaMorte.jpg"


var imgArea = document.getElementById('img')
 
var audio = document.getElementById('BookAudio')
    

function harryPotter01() {
    imgArea =  document.getElementById('img').src = img1 ;
    audio.play();
}

function harryPotter02(){
    imgArea =  document.getElementById('img').src = img2;
    audio.play();
    
}
function harryPotter03(){
    imgArea =  document.getElementById('img').src = img3;
    audio.play();

}
function harryPotter04(){
    imgArea =  document.getElementById('img').src = img4;
    audio.play();

}
function harryPotter05(){
    imgArea =  document.getElementById('img').src = img5;
    audio.play();

}
function harryPotter06(){
    imgArea =  document.getElementById('img').src = img6;
    audio.play();

}
function harryPotter07(){
    imgArea =  document.getElementById('img').src = img7;
    audio.play();

}


