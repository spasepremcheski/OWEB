function start(){
    var images=["image1.jpeg","image2.jpeg","image3.jpeg","image4.jpeg","image5.jpeg"]
    for(var i in images){
        image(images[i]);
    }
}

function image(image){
    var content="";
    var likes=0;
    const d=new Date();
    content+="<fieldset><img id=\"icon\" src=\"user.png\" alt=\"icon\" width=\"70em\"><h1>Dummy User</h1><p id=\"dateposted\">" + d.toLocaleString();
    content+="</p><p><img id=\"slika\" src=\"" + image + "\" alt=\"" + image + "\" width=\"70%\"></p>";
    
    content+="<p id=\"like_comment" + image + "\"><input id=\"like" + image + "\" type=\"submit\" value=\"" + likes + "\" style=\"margin-right: 1%\">";
    content+="<input name=\"comment" + image + "\" id=\"comment" + image + "\" type=\"text\" placeholder=\"Comment\" size=\"60%\">";
    content+="<input type=\"submit\" value=\"post\">" + "</p></fieldset>";
    // content+="<p id=\"likebutton\"><input id=\"like" + img + "\" type=\"button\" value=\"" + likes[img] + "\" style=\"margin-right: 1%\">";
    // content+="<input name=\"comment" + img + "\" id=\"comment" + img + "\" type=\"text\" placeholder=\"Comment\" size=\"60%\">" + "</p>" + "</fieldset>";
    document.getElementById("gallery").innerHTML+=content;
    
    var l=document.getElementById("likeimage1.jpeg");
    l.addEventListener("click",asdf(image,likes),false);
}

function asdf(image,likes){
    likes++;
    var l=document.getElementById("like_comment"+image);
    var content="";
    content+="<input id=\"like" + image + "\" type=\"submit\" value=\"" + likes + "\" style=\"margin-right: 1%\">";
    content+="<input name=\"comment" + image + "\" id=\"comment" + image + "\" type=\"text\" placeholder=\"Comment\" size=\"60%\">";
    content+="<input type=\"submit\" value=\"post\">";
    l.innerHTML=content;
    var k=document.getElementById("like"+image);
    // k.addEventListener("click",asdf(image,likes),false);
}

window.addEventListener("load",start,false);