let libButton = document.getElementById('lib-button');

let noun = document.getElementById("noun");
let adjec = document.getElementById("adjective");
let person = document.getElementById("person");


let libIt = function() {
    let storyDiv = document.getElementById("story");

    storyDiv.innerHTML = "C'est l'histoire de " + noun.value + " qui était " + adjec.value + " avec " + person.value;

};

libButton.addEventListener('click', libIt);









