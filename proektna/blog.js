// function start(){
//     var posts=["post1","post2","post3","post4","post5"]
//     for(var i in posts){
//         post(posts[i]);
//     }
// }

// function post(post){
//     var content="";
//     var likes=0;
//     const d=new Date();
//     content+="<fieldset><img id=\"icon\" src=\"user.png\" alt=\"icon\" width=\"70em\"><h1>Dummy User</h1><p id=\"dateposted\">" + d.toLocaleString();
//     content+="</p><p id=\"post\">" + post + "</p>";
    
//     content+="<p id=\"like_comment" + post + "\"><input id=\"like" + post + "\" type=\"submit\" value=\"" + likes + "\" style=\"margin-right: 1%\">";
//     content+="<input name=\"comment" + post + "\" id=\"comment" + post + "\" type=\"text\" placeholder=\"Comment\" size=\"60%\">";
//     content+="<input type=\"submit\" value=\"post\">" + "</p</fieldset>";
//     // content+="<p id=\"likebutton\"><input id=\"like" + img + "\" type=\"button\" value=\"" + likes[img] + "\" style=\"margin-right: 1%\">";
//     // content+="<input name=\"comment" + img + "\" id=\"comment" + img + "\" type=\"text\" placeholder=\"Comment\" size=\"60%\">" + "</p>" + "</fieldset>";
//     document.getElementById("blog").innerHTML+=content;
    
// }

// window.addEventListener("load",start,false);

function liked(like){
    like.value++;
}

function input(comment){
    var user=prompt("Enter name:");
    comment.parentElement.innerHTML+="<p id=\"comment\"><img src=\"user.png\" alt=\"icon\" width=\"15em\"> " + user + ": " + comment.value + "</p>";
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
    tekst+=tekst1 + "</p><p id=\"like_comment\">";
    tekst+="<input id=\"like\" type=\"button\" style=\"margin-right: 1%\" onclick=\"liked(this)\" value=\"0\">";
    tekst+="<input name=\"comment\" type=\"text\" placeholder=\"Comment\" size=\"60%\" onchange=\"input(this)\"></p></fieldset>";

    var gall=document.getElementById("blog").innerHTML;
    document.getElementById("blog").innerHTML=tekst + gall;

}