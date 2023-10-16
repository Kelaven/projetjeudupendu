// *************** word ***************
//! créer un tableau pour centraliser les mots
const words = ["BARBE", "CERF", "LOURD", "POUMON", "TOMATE", "JOURNAL", "POTERIE", "BANQUISE", "TOURISME", "GRAPHIQUE"];
console.log(words);

//! Fonction pour obtenir un mot aléatoire depuis cette liste
function getWord() {
    let wordRandom;
    let wordRandomName;

    wordRandom = Math.floor(Math.random()*words.length);
    wordRandomName = words[wordRandom];

    return wordRandomName;
};
// je stocke cette fonction dans une variable :
const wordToFind = getWord();
console.log(wordToFind);

//! je découpe mon mot en valeurs que je stocke dans un tableau exemple : B_ A_ R_ B_ E_
let wordToFindSplited = wordToFind.split("")
const wordToFindUnderscore = wordToFind.split("")
console.log(wordToFindSplited);

//! je remplace les valeurs des index par des underscoress
for (let index = 0; index < wordToFindSplited.length; index++) {
    wordToFindUnderscore[index] = "_";
}
console.log(wordToFindUnderscore);









// *************** keyboard ***************
// variable pour désigner l'ensemble des touches que l'utilisateur peut sélectionner : 
const chosenLetters = document.querySelectorAll(".touch");
// variable pour comptabiliser le nombre d'erreurs de l'utiliasteur :
let counter = 0
let counterMax = 7


// Pour chaque touche sélectionnée, je vais lancer un évènement au click :
chosenLetters.forEach(chosenLetter => {
    chosenLetter.addEventListener("click", () => {
        // je grise la couleur de la touche :
        chosenLetter.classList.add("usedColor")
        // je récupère la valeur de la lettre :
        const chosenLetterValue = chosenLetter.textContent
        //* console.log(chosenLetterValue);
        // si la lettre choisie par l'utilisateur est bien inclue dans le mot splité :
        if (wordToFindSplited.includes(chosenLetterValue)) {
            // les asterix doivent prendre la valeur de la lettre :
            for (let index = 0; index < wordToFindUnderscore.length; index++) {
                if (chosenLetterValue === wordToFindSplited[index]) {
                    wordToFindUnderscore[index] = chosenLetterValue
                    }
            }
            // sinon c'est une erreur :
        } else {
            // console.log("erreur");
                if (counter < counterMax) {
                    counter ++
                        if (counter == 1) {
                            console.log("erreur1");
                        } else if (counter == 2){
                            console.log("erreur2");
                        } else if (counter == 3){
                            console.log("erreur3");
                        } else if (counter == 4){
                            console.log("erreur4");
                        } else if (counter == 5){
                            console.log("erreur5");
                        }else if (counter == 6){
                            console.log("erreur6");
                        } else if (counter == 7){
                            console.log("Game Over");
                        }
                }
            
        }
        console.log(wordToFindUnderscore);
        // j'affiche sur le site les lettres coorectes trouvées par l'utilisateur :
        placeUnderscores.appendChild(displayWord).innerText = wordToFindUnderscore.join(" ")
    })
});





//! j'affiche le mot sous forme d'étoiles sur la page
// Variable pour sélectionner la div #word
const placeUnderscores = document.getElementById("word");
// création d'un <p>
let displayWord = document.createElement("p")
// placer ce <p> qui a la valeur de wordToFindUnderscore dans la div
placeUnderscores.appendChild(displayWord).innerText = wordToFindUnderscore.join(" ")











