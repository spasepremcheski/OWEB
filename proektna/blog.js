
function liked(like){
    like.value++;
}

function likeds(smiley){
    smiley.parentElement.parentElement.querySelectorAll("#like")[0].value++;
}

function input(comment){
    var user=prompt("Enter name:");
    comment.parentElement.parentElement.parentElement.parentElement.innerHTML+="<p id=\"comment\"><img src=\"user.png\" alt=\"icon\" width=\"15em\"> " + user + ": " + comment.value + "</p>";
}

function postStatija(){
    const d=new Date();
    var ime=document.getElementById("name1").value;
    var naslov=document.getElementById("title1").value;
    var tekst1=document.getElementById("myText").value;

    if(ime==""){
        ime=prompt("Name:");
        document.getElementById("name1").value=ime;
    }

    if(naslov==""){
        naslov=prompt("Title:");
        document.getElementById("title1").value=naslov;
    }

    if(tekst1==""){
        alert("Enter you post!");
        return;
    }

    var uploadtext="<fieldset><p><label>Name:</label><input id=\"name1\" name=\"name\" type=\"text\" size=\"25\" placeholder=\"Ryan\"></p><p id=\"naslov\">";
    uploadtext+="<p id=\"naslov\"><label for=\"title\">Title:</label><input id=\"title1\" name=\"title\" type=\"text\" size=\"25\" placeholder=\"Title\"></p><p id=\"statija\">";
    uploadtext+="<label for=\"myText\">Write your post here:</label><br><textarea type=\"text\" id=\"myText\" name=\"mojastatija\" rows=\"10\" cols=\"80\" autocapitalize=\"sentences\"></textarea>";
    uploadtext+="</p><p><input id=\"submit\" type=\"submit\" value=\"Post\" onclick=\"postStatija()\"></p></fieldset>";
    document.getElementById("uploadblog").innerHTML=uploadtext;
    // console.log("da");

    var tekst="<fieldset><img id=\"icon\" src=\"user.png\" alt=\"icon\" width=\"70em\"><h1>" + ime + "</h1><p id=\"dateposted\">" + d.toLocaleString() + "</p><h2>" + naslov + "</h2><p id=\"post\">";
    tekst+=tekst1 + "</p><div id=\"like_comment\"><ul id=\"lc\"><li>";
    tekst+="<input id=\"smiley\" type=\"button\" onclick=\"likeds(this)\" value=\"&#128525;\"></li><li><input id=\"like\" type=\"button\" onclick=\"liked(this)\" value=\"0\">";
    tekst+="</li><li><input name=\"comment\" type=\"text\" placeholder=\"Comment\" size=\"60%\" onchange=\"input(this)\"></li></ul></div></fieldset>";

    var gall=document.getElementById("blog").innerHTML;
    document.getElementById("blog").innerHTML=tekst + gall;

}