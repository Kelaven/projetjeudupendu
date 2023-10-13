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






//? je découpe mon mot en valeurs que je stocke dans un tableau exemple : B_ A_ R_ B_ E_
let wordsSplice = result.split("")
console.log(wordsSplice);
//? cela va s'afficher en d-none sur la page
// Variable pour sélectionner la div #word
const placeUnderscores = document.getElementById("word");
// création d'un <p>
let displayWord = document.createElement("p")
// placer ce <p> qui a la valeur du mot généré dans la div
placeUnderscores.appendChild(displayWord).innerText = wordsSplice
// pour chaque index, créer une classe d-none
wordsSplice.forEach(wordSplice => {
    wordSplice.classList.remove("d-none")
});

//? 
//? quand l'utilisateur va cliquer sur une lettre si elle correspond à un ou des index du tableau alors le d-none se retire
//? B_ _ _ B_ _
//? 
//? Donc une div en d-none  = une lettre du mot = un index une fois que ce mot est découpé















//? Afficher les underscores sur la page
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


//! fonction pour creer un paragraphe et le placer dans la div
// function displayNormalWord(params) {
//     let paragraph = document.createElement("p")
//     placeUnderscores.appendChild(paragraph).innerText="test"
// }
// displayNormalWord();