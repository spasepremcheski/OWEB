// Иницијализација на низа која ги содржи сите 10 слики по два пати
var library = ['mickey.jpg','mowgli.jpg','tarzan.jpg','simba.jpg','aladin.jpg','blanche%20neige.jpg','alice.png','peter%20pan.jpg','pinocchio.jpg','raiponce.jpg','mickey.jpg','mowgli.jpg','tarzan.jpg','simba.jpg','aladin.jpg','blanche%20neige.jpg','alice.png','peter%20pan.jpg','pinocchio.jpg','raiponce.jpg'];

// Иницијализација на сите неопходни променливи (дополнете со тоа што мислите дека ќе ви треба)
var images = [];
var click = 0;
var tempElt1; 
var tempElt2;
var win = 0;
var score = 0;
var time = 0;
var boxElts = [];

var r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  //za random sliki popolnuvanje ako e popolento mestoto zema 1
var brojac=0; //isto kako time valjda
var klik=0;
var prvaslika;  //tempElt1
var vtoraslika; //tempElt2
var timeoutID;

// Конструирајте низа boxElts која ќе ги содржи сите div елементи кои содржат box во id редоследно
var i;
for(i=1;i<=20;i++){
  boxElts[i-1]=document.getElementById("box" + i);
}

// Помошни променливи кои може да бидат од корист
var mainElt = document.getElementById("main_section");
var timeElt = document.getElementById("time");
var scoreElt = document.getElementById("score");
var postElt = document.getElementById("post");
var finalElt = document.getElementById("final");

function start() {
  // Напишете код за вгнездување img елементи во boxElts[i] и притоа сликите од library треба да бидат случајно разместени на почеток на играта
  vgnezduvanje();
}

function vgnezduvanje(){
  var j;
  for(j=0;j<20;j++){
    randomslika(j);
  }
}

function randomslika(j){
  var rand=Math.round(Math.random()*20);
  if(r[rand]==0){
    content="<img src=\"" + library[rand] + "\" alt=\"" + library[rand] + "\" class=\"hidden\">";
    boxElts[j].innerHTML+=content;
    r[rand]=1;
  }
  else{
    randomslika(j);
  }
}

// Ова искористете го како готово за да започне играта
mainElt.addEventListener("click", gameLogic);

//тајмер
mainElt.addEventListener("click", timerstart);

function timerstart(){
  if(brojac==0){
    timer();
  }
}

function timer(){
  var vreme=document.getElementById("time");
  brojac++;
  vreme.innerHTML=brojac;
  timeoutID=setTimeout(timer,1000);
}

function gameLogic(e) {
  // Овде да се напише главната логика на играта
  var slika=e.target.getElementsByTagName("img")[0];
  click++;
  console.log(click);

  if(click>2){
    return;
  }

  //pretpostavuvam deka vo slika e zachuvan element so tag img od kliknatata slika

  slika.classList.add("show");
  slika.classList.remove("hidden");
  
  // Првиот од двата клика
  if(klik==0){
    prvaslika=slika; //prvata slika
    klik=1;
  }
  
  // вториот клик
  else if(klik==1){
    vtoraslika=slika;  //vtorata slika
    // код за справување на ситуација на исти слики
    if(prvaslika.alt==vtoraslika.alt){
      win++;
      score+=10;
      scoreElt.innerHTML=score;
      kraj();
    }
    else{
      score-=2;
      if(score<0){
        score=0;
      }
      scoreElt.innerHTML=score;
      //napravi hide na dvete sliki
      setTimeout(function (){prvaslika.classList.add("hidden");
      prvaslika.classList.remove("show");
      vtoraslika.classList.add("hidden");
      vtoraslika.classList.remove("show");
      click=0;},1000);
      
    }
    klik=0;
  }

}

function kraj(){
  click=0;
  //se proveruvaat poenite posle sekoj pogodok
  if(win==10){
    document.getElementById("post").classList.add("show");
    document.getElementById("post").classList.remove("hidden");
    document.getElementById("final").innerHTML="Osvoivte " + score + " poeni<br>za " + brojac + " sekundi";
    clearTimeout(timeoutID);
  }
}

window.addEventListener("load", start, false);