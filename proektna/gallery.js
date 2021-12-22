
function liked(like){
    like.value++;
}

function likeds(smiley){
    smiley.parentElement.parentElement.querySelectorAll("#like")[0].value++;
}

function likedimg(img){
    var like=img.parentElement.parentElement;
    like.querySelectorAll("#like_comment")[0].querySelectorAll("#lc")[0].querySelectorAll("#like")[0].value++;
}

function input(comment){
    var user=prompt("Enter name:");
    comment.parentElement.parentElement.parentElement.parentElement.innerHTML+="<p id=\"comment\"><img src=\"user.png\" alt=\"icon\" width=\"15em\"> " + user + ": " + comment.value + "</p>";
}

function slika(img){
    img.parentElement.innerHTML="<img id=\"slika1\" src=" + URL.createObjectURL(img.files[0]) + " alt=" + URL.createObjectURL(img.files[0]) + " width=\"70%\">";
}

function postpicture(){
    const d=new Date();
    var ime=document.getElementById("name1").value;
    var link=document.getElementById("slika1").src;

    if(ime==""){
        ime=prompt("Name:");
        document.getElementById("name1").value=ime;
    }

    var uploadpicture="<fieldset><p><label>Name:</label><input id=\"name1\" name=\"name\" type=\"text\" size=\"25\" placeholder=\"Ryan\">";
    uploadpicture+="</p><p id=\"slika\"><label for=\"myfile\">Select a file:</label><input type=\"file\" id=\"myfile\" name=\"myfile\" onchange=\"slika(this)\"></p>";
    uploadpicture+="<p><input id=\"submit\" type=\"submit\" value=\"Post\" onclick=\"postpicture()\"></p></fieldset>";
    document.getElementById("uploadpicture").innerHTML=uploadpicture;
    // console.log("da");

    var tekst="<fieldset><img id=\"icon\" src=\"user.png\" alt=\"icon\" width=\"70em\"><h1>" + ime + "</h1><p id=\"dateposted\">" + d.toLocaleString() + "</p><p>";
    tekst+="<img id=\"slika\" src=" + link + " alt=" + link + " width=\"70%\" ondblclick=\"likedimg(this)\"></p><div id=\"like_comment\"><ul id=\"lc\"><li>";
    tekst+="<input id=\"smiley\" type=\"button\" onclick=\"likeds(this)\" value=\"&#128525;\"></li><li><input id=\"like\" type=\"button\" onclick=\"liked(this)\" value=\"0\">";
    tekst+="</li><li><input name=\"comment\" type=\"text\" placeholder=\"Comment\" size=\"60%\" onchange=\"input(this)\"></li></ul></div></fieldset>";

    var gall=document.getElementById("gallery").innerHTML;
    document.getElementById("gallery").innerHTML=tekst + gall;

}