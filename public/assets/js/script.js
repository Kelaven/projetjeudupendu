// *************** Tirer un mot au hasard à la fois sous forme de lettres et sous forme d'underscores *************** //

// ! Variables :
const words = ["CACTUS", "CHARRIOT", "PISTOLET", "RODEO", "GIBET", "TIRAILLEUR", "VIREVOLTANT", "SELLE", "BANDITISME", "DILIGENCE", "BRACONNAGE"];
const wordToFind = getWord(); // je stocke la fonction qui sert à obtenir un mot aléatoire dans une variable
console.log(`Le mot a trouver est : ${wordToFind}`);
// je découpe mon mot en valeurs que je stocke dans un tableau (exemple : B_ A_ R_ B_ E_) :
let wordToFindSplited = wordToFind.split("");
const wordToFindUnderscore = wordToFind.split("");


//! Fonctions :
function getWord() { // pour obtenir un mot aléatoire depuis la liste
    let wordRandom;
    let wordRandomName;

    wordRandom = Math.floor(Math.random() * words.length);
    wordRandomName = words[wordRandom];

    return wordRandomName;
};

function replaceByUnderscore() { // pour remplacer les valeurs des index par des underscores :
    for (let index = 0; index < wordToFindSplited.length; index++) {
        wordToFindUnderscore[index] = "_";
    }
}




// *************** Afficher le mot sous forme d'underscores sur la page *************** //

// ! Variables :
const placeUnderscores = document.getElementById("word"); // Variable pour sélectionner la div #word
let displayWord = document.createElement("p"); // création d'un <p>

// ! Fonction :
function placeUnderscore() {
    placeUnderscores.appendChild(displayWord).innerText = wordToFindUnderscore.join(" "); // placer ce <p> qui a la valeur de wordToFindUnderscore dans la div
}




// *************** Interactions de l'utilisateur *************** //

// ! Variables :
const chosenLetters = document.querySelectorAll(".touch"); // désigner l'ensemble des touches que l'utilisateur peut sélectionner
let counter = 0; // initialiser le nombre d'erreurs de l'utilisateur à 0
let counterMax = 7;  // initialiser le nombre d'erreurs maximum de l'utilisateur à 7
const winScreen = document.getElementById("win-div"); // sélectionner l'écran de win
const loseScreen = document.getElementById("lose-div"); // sélectionner l'écran de loose
const replayBtn = document.getElementById("replay-btn"); // sélectionner le bouton rejouer
let backgroundHangman = document.getElementById("background-img-to-modify"); // sélectionner l'image d'arrière plan à modifier pour la potence

// ! Fonction :
function LetterSelect() { // Pour chaque touche sélectionnée, je vais lancer un évènement au click
    chosenLetters.forEach(chosenLetter => {
        chosenLetter.addEventListener("click", () => {
            chosenLetter.classList.add("usedColor"); // je grise la couleur de la touche
            const chosenLetterValue = chosenLetter.textContent // je récupère la valeur de la lettre
            if (wordToFindSplited.includes(chosenLetterValue)) { // si la lettre choisie par l'utilisateur est bien inclue dans le mot splité
                // les underscores doivent prendre la valeur de la lettre :
                for (let index = 0; index < wordToFindUnderscore.length; index++) {
                    if (chosenLetterValue === wordToFindSplited[index]) {
                        wordToFindUnderscore[index] = chosenLetterValue
                    }
                }
            } else { // sinon c'est une erreur
                if (counter < counterMax) { // si le counter qui comment à 0 est inférieur au max qui est à 7

                    counter++ // j'incrémente ce counter

                    // pour chaque déclenchement d'incrémentation j'affiche une image : 
                    function addImage(name) {
                        backgroundHangman.setAttribute("src", `./public/assets/img/${name}.jpg`);
                    }
                    switch (counter) {
                        case 1: addImage("pixel-art-wallpaper-hangman-western-1");
                            break;
                        case 2: addImage("pixel-art-wallpaper-hangman-western-2");
                            break;
                        case 3: addImage("pixel-art-wallpaper-hangman-western-3");
                            break;
                        case 4: addImage("pixel-art-wallpaper-hangman-western-4");
                            break;
                        case 5: addImage("pixel-art-wallpaper-hangman-western-5");
                            break;
                        case 6: addImage("pixel-art-wallpaper-hangman-western-6");
                            break;
                        case 7:
                            addImage("pixel-art-wallpaper-hangman-western-7");
                            loseScreen.classList.remove("d-none"); // la partie est perdue
                            break;
                    }
                };
            };
            if (wordToFindUnderscore.join(" ") === wordToFindSplited.join(" ")) {
                winScreen.classList.remove("d-none"); // la partie est gagnée
            }
            // j'affiche sur le site les lettres correctes trouvées par l'utilisateur :
            placeUnderscores.appendChild(displayWord).innerText = wordToFindUnderscore.join(" ");
        });
    });
};








// ! MAIN ! //
replaceByUnderscore();
placeUnderscore();
LetterSelect();