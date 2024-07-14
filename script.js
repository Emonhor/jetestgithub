const dictionary = {
    "Abrégé": "Version écourtée, généralement d'un livre. D'où l'expression édition abrégée. Bref synopsis d'un ouvrage qui en donne le sens général. (définition ABF)",
    "Achevé d'imprimé": "Mention figurant à la fin d'une publication qui donne des informations sur l'éditeur, l'imprimeur, la date de publication ou d'impression. A remplacé le terme colophon utilisé au début de l'imprimerie. (définition ABF)",
    "Actes de colloques": "Les actes sont le recueil des communications présentées lors de congrès, colloques ou réunions savantes, par des chercheurs ou des spécialistes. Chaque communication, souvent confondue avec un article de périodique, contient le résumé détaillé de la présentation faite par un ou plusieurs chercheurs. Ce type de document aborde les tout derniers résultats de la recherche concernant des thèmes très spécifiques. Ces contenus précèdent souvent ceux publiés dans les articles. Les outils les plus efficaces pour les repérer en ligne sont les bases de données spécialisées, Google scholar. (Source : Infosphère)",
    
    
    
    // Ajoutez d'autres mots et définitions ici
};

document.addEventListener("DOMContentLoaded", function() {
    const wordList = document.getElementById("word-list");
    for (let word in dictionary) {
        let listItem = document.createElement("li");
        listItem.textContent = word;
        listItem.onclick = function() {
            displayDefinition(word);
        };
        wordList.appendChild(listItem);
    }
});

function searchWord() {
    const searchBar = document.getElementById("search-bar");
    const searchWord = searchBar.value.toLowerCase();
    displayDefinition(searchWord);
}

function displayDefinition(word) {
    const display = document.getElementById("definition-display");
    display.innerHTML = "";
    if (dictionary[word]) {
        display.innerHTML = `<p><strong>${word}:</strong> ${dictionary[word]}</p>`;
    } else {
        display.innerHTML = `<p>La définition du mot "${word}" est introuvable car ce mot n'a pas encore été enregistré.</p>`;
    }
}
