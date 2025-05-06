const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    console.log()
    e.preventDefault(); // empêche le rechargement de la page
    
    // vérification entrée prénom
    const baliseFirst = document.getElementById("firstName");
    let valeurFirst = baliseFirst.value.trim();
    console.log(valeurFirst)
    
    // vérification entrée nom
    const baliseLast = document.getElementById("lastName")
    let valeurLast = baliseLast.value.trim()
    console.log(valeurLast)
    
    // vérification entrée email
    const email = document.getElementById("email")
    let valeurEmail = email.value.trim()
    console.log(valeurEmail)

    // vérification entrée message
    const message = document.getElementById("message")
    let valeurMessage = message.value.trim()
    console.log(valeurMessage)

    closeModal(); // Ferme la modale
    await init(); // Recharge les infos du photographe si nécessaire
});


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



