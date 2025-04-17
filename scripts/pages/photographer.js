const dropdown = document.querySelector('.dropdown');
const selectedText = dropdown.querySelector('.selected-text');
const options = dropdown.querySelectorAll('.dropdown-options li');

// Ajout de l'écoute sur chaque option
options.forEach(option => {
  option.addEventListener('click', () => {
    const value = option.getAttribute('data-value');

    // Récupérer l'ancien texte sélectionné
    const oldText = selectedText.textContent;

    // Mise à jour du texte visible dans le summary
    selectedText.textContent = option.textContent;
    option.textContent = oldText;

    // Fermeture manuelle du menu
    dropdown.removeAttribute('open');

    // Appel de ta logique de tri ici
    console.log("Trier par :", value);
  });
});



async function getPhotographer() {
    try {
        const response = await fetch("data/photographers.json");
        const data = await response.json(); // transforme la réponse en objet JS
        console.log("Données récupérées :", data);

        const params = new URLSearchParams(window.location.search)
        const id = parseInt(params.get("id"))
        const photographer = data.photographers.find(p => p.id === id)

        return {photographer};

        
    } catch (error) {
        console.error("Erreur lors du chargement des photographes :", error);
        return { error };
    }

}

async function displayPhotographer(photographer) {
    const photographerContent = document.querySelector(".photographerContent");
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographerContent.appendChild(userCardDOM);
    };




async function init() {
    // Récupère les datas des photographes
    const { photographer } = await getPhotographer();
    displayPhotographer(photographer);
}

init();//Mettre le code JavaScript lié à la page photographer.html