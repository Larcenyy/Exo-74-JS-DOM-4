//Votre code ci dessous

let monImg = document.getElementById("cat-pic");
let monChat = document.getElementById("cat-chat");

function miaule() {
    monChat.innerText = "Miam miam neggae"
}

monImg.addEventListener("click", function (){
    miaule()
    console.log("bouton déclancher");
})

