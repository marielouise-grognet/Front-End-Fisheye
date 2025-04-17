function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

async function displayPhotographerName() {
    // Récupérer les données du photographe
    const { photographer } = await getPhotographer();

    // Sélectionner l'élément où le nom doit être affiché
    const h2 = document.getElementById('contact');

    if (h2 && photographer) {
        h2.innerHTML = `Contactez-moi <br>${photographer.name}`;
    }
}

async function init() {
    // Mettre à jour le nom du photographe dans la modal
    await displayPhotographerName();
}

init();



