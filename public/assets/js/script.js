// *************** Tirer un mot au hasard à la fois sous forme de lettres et sous forme d'underscores *************** //
// ! Variables : 
// créer un tableau pour centraliser les mots
const words = ["CACTUS", "CHARRIOT", "PISTOLET", "RODEO", "GIBET", "TIRAILLEUR", "VIREVOLTANT", "SELLE", "BANDITISME", "DILIGENCE", "BRACONNAGE"];

console.log(words);
// * je stocke la fonction qui sert à obtenir un mot aléatoire dans une variable :
const wordToFind = getWord();
console.log(wordToFind);
// * je découpe mon mot en valeurs que je stocke dans un tableau exemple : B_ A_ R_ B_ E_
let wordToFindSplited = wordToFind.split("");
const wordToFindUnderscore = wordToFind.split("");
console.log(wordToFindSplited);
//! Fonction pour obtenir un mot aléatoire depuis la liste :
function getWord() {
    let wordRandom;
    let wordRandomName;

    wordRandom = Math.floor(Math.random()*words.length);
    wordRandomName = words[wordRandom];

    return wordRandomName;
};
//! je remplace les valeurs des index par des underscores :
for (let index = 0; index < wordToFindSplited.length; index++) {
    wordToFindUnderscore[index] = "_";
}
console.log(wordToFindUnderscore);



// *************** AFficher le mot sous forme d'underscores sur la page *************** //
// ! Variables :
// Variable pour sélectionner la div #word
const placeUnderscores = document.getElementById("word");
// création d'un <p>
let displayWord = document.createElement("p")
// ! Fonction :
// placer ce <p> qui a la valeur de wordToFindUnderscore dans la div
placeUnderscores.appendChild(displayWord).innerText = wordToFindUnderscore.join(" ")





// *************** Intéractions de l'utilisateur *************** //
// ! Variables :
// désigner l'ensemble des touches que l'utilisateur peut sélectionner : 
const chosenLetters = document.querySelectorAll(".touch");
// comptabiliser le nombre d'erreurs de l'utiliasteur :
let counter = 0;
let counterMax = 7;
// sélectionner l'écran de win ou de lose : 
const winScreen = document.getElementById("win-div");
const loseScreen = document.getElementById("lose-div");
// sélectionner le bouton rejouer :
const replayBtn = document.getElementById("replay-btn");
// sélectionner l'image d'arrière plan à modifier pour la potence : 
let backgroundHangman = document.getElementById("background-img-to-modify");

// ! Fonction
// Pour chaque touche sélectionnée, je vais lancer un évènement au click :
chosenLetters.forEach(chosenLetter => {
    chosenLetter.addEventListener("click", () => {
        // je grise la couleur de la touche :
        chosenLetter.classList.add("usedColor")
        // je récupère la valeur de la lettre :
        const chosenLetterValue = chosenLetter.textContent
        // console.log(chosenLetterValue);
        // si la lettre choisie par l'utilisateur est bien inclue dans le mot splité :
        if (wordToFindSplited.includes(chosenLetterValue)) {
            // les underscores doivent prendre la valeur de la lettre :
            for (let index = 0; index < wordToFindUnderscore.length; index++) {
                if (chosenLetterValue === wordToFindSplited[index]) {
                    wordToFindUnderscore[index] = chosenLetterValue
                    }
            }
        // sinon c'est une erreur :
        } else {
                // si le counter qui comment à 0 est inférieur au max qui est à 7 :
                if (counter < counterMax) {
                    // j'incrémente ce counter :
                    counter ++
                        // pour chaque déclenchement d'incrémentation j'affiche une image : 
                        if (counter == 1) {
                            backgroundHangman.setAttribute("src", "./public/assets/img/pixel-art-wallpaper-hangman-western-1.jpg")
                        } else if (counter == 2){
                            backgroundHangman.setAttribute("src", "./public/assets/img/pixel-art-wallpaper-hangman-western-2.jpg")
                        } else if (counter == 3){
                            backgroundHangman.setAttribute("src", "./public/assets/img/pixel-art-wallpaper-hangman-western-3.jpg")
                        } else if (counter == 4){
                            backgroundHangman.setAttribute("src", "./public/assets/img/pixel-art-wallpaper-hangman-western-4.jpg")
                        } else if (counter == 5){
                            backgroundHangman.setAttribute("src", "./public/assets/img/pixel-art-wallpaper-hangman-western-5.jpg")
                        }else if (counter == 6){
                            backgroundHangman.setAttribute("src", "./public/assets/img/pixel-art-wallpaper-hangman-western-6.jpg")
                        } else if (counter == 7){
                            backgroundHangman.setAttribute("src", "./public/assets/img/pixel-art-wallpaper-hangman-western-7.jpg")
                            loseScreen.classList.remove("d-none");
                        };
                };
        };
        if (wordToFindUnderscore.join(" ") === wordToFindSplited.join(" ")) {
            winScreen.classList.remove("d-none")
        }
        console.log(wordToFindUnderscore);
        // j'affiche sur le site les lettres correctes trouvées par l'utilisateur :
        placeUnderscores.appendChild(displayWord).innerText = wordToFindUnderscore.join(" ");
    });
});














