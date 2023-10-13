// *************** word ***************
//! créer un tableau pour centraliser les mots
const normalWords = ["Barbe", "Cerf", "Lourd", "Poumon", "Tomate", "Journal", "Poterie", "Banquise", "Tourisme", "Graphique"];
console.log(normalWords);

//! Fonction pour obtenir un mot aléatoire depuis cette liste
function getNormalWord() {
    let normalWordRandom;
    let normalWordRandomName;

    normalWordRandom = Math.floor(Math.random()*normalWords.length);
    normalWordRandomName = normalWords[normalWordRandom];

    return normalWordRandomName;
};
// je stocke cette fonction dans une variable :
let result = getNormalWord();
console.log(result);



// Variable pour sélectionner la div #word
const placeUnderscores = document.getElementById("word");

const divsForLetter = document.querySelectorAll(".divforletter");
// const divForLetter5 = document.querySelector(".divforletter5")
// console.log(divForLetter5);



//! Afficher les underscores sur la page
function getUnderscores() {
    if (result.length == 4){
        divsForLetter.forEach(divForLetter => {
        divForLetter.classList.remove("d-none")
        });
    } else if (result.length == 5){
        let paragraph = document.createElement("p")
        placeUnderscores.appendChild(paragraph).innerText="5"
    } else if (result.length == 6){
        let paragraph = document.createElement("p")
        placeUnderscores.appendChild(paragraph).innerText="6"
    } else if (result.length == 7){
        let paragraph = document.createElement("p")
        placeUnderscores.appendChild(paragraph).innerText="7"
    } else if (result.length == 8){
        let paragraph = document.createElement("p")
        placeUnderscores.appendChild(paragraph).innerText="8"
    } else if (result.length == 9){
        let paragraph = document.createElement("p")
        placeUnderscores.appendChild(paragraph).innerText="9"
    };
};
getUnderscores()

// function getUnderscores() {
//     if (result.length == 4){
//         let paragraph = document.createElement("p")
//         placeUnderscores.appendChild(paragraph).innerText="4"
//     } else if (result.length == 5){
//         let paragraph = document.createElement("p")
//         placeUnderscores.appendChild(paragraph).innerText="5"
//     } else if (result.length == 6){
//         let paragraph = document.createElement("p")
//         placeUnderscores.appendChild(paragraph).innerText="6"
//     } else if (result.length == 7){
//         let paragraph = document.createElement("p")
//         placeUnderscores.appendChild(paragraph).innerText="7"
//     } else if (result.length == 8){
//         let paragraph = document.createElement("p")
//         placeUnderscores.appendChild(paragraph).innerText="8"
//     } else if (result.length == 9){
//         let paragraph = document.createElement("p")
//         placeUnderscores.appendChild(paragraph).innerText="9"
//     };
// };
// getUnderscores()


// *************** keyboard ***************
//! Griser la touche quand l'utilisateur a cliqué une fois dessus
const touchs = document.querySelectorAll(".touch");

touchs.forEach(touch => {
    touch.addEventListener("click", () => {
        touch.classList.add("usedColor")
    })
});



















//************** peut etre utile :

//! Fonction pour générer x underscore selon la taille du mot
// function getUnderscores() {
//     if (result.length == 4){
//         console.log(`4`);
//     } else if (result.length == 5){
//         console.log(`5`);
//     } else if (result.length == 6){
//         console.log(`6`);
//     } else if (result.length == 7){
//         console.log(`7`);
//     } else if (result.length == 8){
//         console.log(`8`);
//     } else if (result.length == 9){
//         console.log(`9`);
//     };
// };
// console.log(getUnderscores());

//! fonction pour creer un paragraphe et le placer dans la div
// function displayNormalWord(params) {
//     let paragraph = document.createElement("p")
//     placeUnderscores.appendChild(paragraph).innerText="test"
// }
// displayNormalWord();