async function getPhotographers() {
    try {
        const response = await fetch("data/photographers.json");
        const data = await response.json(); // transforme la réponse en objet JS
        return {
            photographers: data.photographers
        };
    } catch (error) {
        console.error("Erreur lors du chargement des photographes :", error);
        return { photographers: [] }; // en cas d’erreur, retourne un tableau vide
    }
}


    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
