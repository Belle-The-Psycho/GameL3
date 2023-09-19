var charactet = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate"); 
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = (setInterval(){
    window.getComputedStyle(character).getPropertyValue("top");
},10);