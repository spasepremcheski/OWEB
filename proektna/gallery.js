// function start(){
//     var images=["image1.jpeg","image2.jpeg","image3.jpeg","image4.jpeg","image5.jpeg"];
//     for(var i in images){
//         image(images[i]);
//     }
// }

// function image(image){
//     var content="";
//     var likes=0;
//     const d=new Date();
//     content+="<fieldset><img id=\"icon\" src=\"user.png\" alt=\"icon\" width=\"70em\"><h1>Dummy User</h1><p id=\"dateposted\">" + d.toLocaleString();
//     content+="</p><p><img id=\"slika\" src=\"" + image + "\" alt=\"" + image + "\" width=\"70%\"></p>";
    
//     content+="<p id=\"like_comment" + image + "\"><input id=\"like" + image + "\" type=\"submit\" value=\"" + likes + "\" style=\"margin-right: 1%\">";
//     content+="<input name=\"comment" + image + "\" id=\"comment" + image + "\" type=\"text\" placeholder=\"Comment\" size=\"60%\">";
//     content+="<input type=\"submit\" value=\"post\">" + "</p></fieldset>";
//     // content+="<p id=\"likebutton\"><input id=\"like" + img + "\" type=\"button\" value=\"" + likes[img] + "\" style=\"margin-right: 1%\">";
//     // content+="<input name=\"comment" + img + "\" id=\"comment" + img + "\" type=\"text\" placeholder=\"Comment\" size=\"60%\">" + "</p>" + "</fieldset>";
//     document.getElementById("gallery").innerHTML+=content;
    
//     // var a=document.getElementById("like"+image);
//     // a.addEventListener("click",asdf(image,likes),false);
// }

// function asdf(image,likes){
//     likes++;
//     var l=document.getElementById("like_comment"+image);
//     var content="";
//     content+="<input id=\"like" + image + "\" type=\"submit\" value=\"" + likes + "\" style=\"margin-right: 1%\">";
//     content+="<input name=\"comment" + image + "\" id=\"comment" + image + "\" type=\"text\" placeholder=\"Comment\" size=\"60%\">";
//     content+="<input type=\"submit\" value=\"post\">";
//     l.innerHTML=content;
//     var k=document.getElementById("like"+image);
//     // k.addEventListener("click",asdf(image,likes),false);
// }

// var images=["image1.jpeg","image2.jpeg","image3.jpeg","image4.jpeg","image5.jpeg"];
// var likes=new Array();
// for(var i in images){
//     likes[i]=0;
// }

// function start(){
//     imagedisplay();
// }

// function imagedisplay(){
//     var content="";
//     for(var i in images){
//         const d=new Date();
//         content+="<fieldset><img id=\"icon\" src=\"user.png\" alt=\"icon\" width=\"70em\"><h1>Dummy User</h1><p id=\"dateposted\">" + d.toLocaleString();
//         content+="</p><p><img id=\"slika\" src=\"" + images[i] + "\" alt=\"" + images[i] + "\" width=\"70%\"></p>";
        
//         content+="<p id=\"like_comment" + images[i] + "\"><input id=\"like" + images[i] + "\" type=\"submit\" value=\"" + likes[i] + "\" style=\"margin-right: 1%\">";
//         content+="<input name=\"comment" + images[i] + "\" id=\"comment" + images[i] + "\" type=\"text\" placeholder=\"Comment\" size=\"60%\">";
//         content+="<input type=\"submit\" value=\"post\">" + "</p></fieldset>";
//         document.getElementById("gallery").innerHTML=content;
//     }

//     qwer();
// }

// function qwer(){
//     for(var i in images){
//         var k=document.getElementById("like"+images[i]);
//         k.addEventListener("click",k.setAttribute("value",++likes[i]),false);
//     }

// }

// window.addEventListener("load",start,false);

function liked(like){
    like.value++;
}

function likedimg(img){
    var like=img.parentElement.parentElement;
    like=like.querySelectorAll("#like_comment")[0].querySelectorAll("#like")[0].value++;
}

function input(comment){
    var user=prompt("Enter name:");
    comment.parentElement.innerHTML+="<p id=\"comment\"><img src=\"user.png\" alt=\"icon\" width=\"15em\"> " + user + ": " + comment.value + "</p>";
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
    tekst+="<img id=\"slika\" src=" + link + " alt=" + link + " width=\"70%\" ondblclick=\"likedimg(this)\"></p><p id=\"like_comment\">";
    tekst+="<input id=\"like\" type=\"button\" style=\"margin-right: 1%\" onclick=\"liked(this)\" value=\"0\">";
    tekst+="<input name=\"comment\" type=\"text\" placeholder=\"Comment\" size=\"60%\" onchange=\"input(this)\"></p></fieldset>";

    var gall=document.getElementById("gallery").innerHTML;
    document.getElementById("gallery").innerHTML=tekst + gall;

}