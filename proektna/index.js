
function pagjacko(button){
    // console.log(button.parentElement.querySelectorAll("ul")[0]);
    
    var x = button.parentElement.querySelectorAll("ul")[0];
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}