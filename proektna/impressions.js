
function accept(){

    document.getElementById("focus").select();
    var submitButton=document.getElementById("submit");
    submitButton.addEventListener("click", function (){alert("Thank you for sharing your opinion with us. We appreciate your effort to make our website better.")},false);
}

window.addEventListener("load",accept,false);