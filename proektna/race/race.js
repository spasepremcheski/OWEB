var zhelka=1;
var zajak=1;

function start(){
    var kopche=document.getElementById("kopche");
    kopche.addEventListener("click", igra1, false);
}

function igra1(){
    var output="<p>Zhelkata e do " + zhelka + " pozicija.</p><p>Zajakot e do "
    + zajak + " pozicija.</p>";
    document.getElementById("igra").innerHTML=output;
    setTimeout(igra,1000);
}

function igra(){
    var chekor=Math.ceil(Math.random()*10);
    if(chekor>=1 || chekor<=5){
        zhelka+=3;
    }
    else if(chekor==6 || chekor==7){
        zhelka-=6;
    }
    else if(chekor>=8 || chekor<=10){
        zhelka+=1;
    }
    if(chekor==3 || chekor==4){
        zajak+=9;
    }
    else if(chekor==5){
        zajak-=12;
    }
    else if(chekor>=6 || chekor<=8){
        zajak+=1;
    }
    else if(chekor==9 || chekor==10){
        zajak-=2;
    }

    if(zhelka<1){
        zhelka=1;
    }
    if(zajak<1){
        zajak=1;
    }
    if(zhelka>70){
        zhelka=70;
    }
    if(zajak>70){
        zajak=70;
    }
    
    var output="<p>Zhelkata e do " + zhelka + " pozicija.</p><p>Zajakot e do "
                + zajak + " pozicija.</p>";

    if(zhelka==zajak){
        output+="<p>OUCH</p>";
    }
    document.getElementById("igra").innerHTML=output;

    if(zhelka>=70){
        alert("Pobednik e zhelkata.");
    }
    else if(zajak>=70){
        alert("Pobednik e zajakot.");
    }
    else{
        setTimeout(igra, 1000);
    }
}

window.addEventListener("load", start, false);