function start(){
    var posts=["post1","post2","post3","post4","post5"]
    for(var i in posts){
        post(posts[i]);
    }
}

function post(post){
    var content="";
    var likes=0;
    const d=new Date();
    content+="<fieldset><img id=\"icon\" src=\"user.png\" alt=\"icon\" width=\"70em\"><h1>Dummy User</h1><p id=\"dateposted\">" + d.toLocaleString();
    content+="</p><p id=\"post\">" + post + "</p>";
    
    content+="<p id=\"like_comment" + post + "\"><input id=\"like" + post + "\" type=\"submit\" value=\"" + likes + "\" style=\"margin-right: 1%\">";
    content+="<input name=\"comment" + post + "\" id=\"comment" + post + "\" type=\"text\" placeholder=\"Comment\" size=\"60%\">";
    content+="<input type=\"submit\" value=\"post\">" + "</p</fieldset>";
    // content+="<p id=\"likebutton\"><input id=\"like" + img + "\" type=\"button\" value=\"" + likes[img] + "\" style=\"margin-right: 1%\">";
    // content+="<input name=\"comment" + img + "\" id=\"comment" + img + "\" type=\"text\" placeholder=\"Comment\" size=\"60%\">" + "</p>" + "</fieldset>";
    document.getElementById("blog").innerHTML+=content;
    
}

window.addEventListener("load",start,false);