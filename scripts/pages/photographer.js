
const dropdown = document.querySelector('.dropdown');
const selectedText = dropdown.querySelector('.selected-text');
const options = dropdown.querySelectorAll('.dropdown-options li');



  



options.forEach((option, index) => {
    // Clic souris
    option.addEventListener("click", () => handleOptionSelect(option));
  
    // Navigation clavier
    option.addEventListener("keydown", (e) => {
      const key = e.key;
  
      if (key === "Enter" || key === " ") {
        e.preventDefault();
        handleOptionSelect(option);
      } else if (key === "ArrowDown") {
        e.preventDefault();
        const next = options[index + 1] || options[0];
        next.focus();
      } else if (key === "ArrowUp") {
        e.preventDefault();
        const prev = options[index - 1] || options[options.length - 1];
        prev.focus();
      }
    });
  
    // Rendre les options focusables
    option.setAttribute("tabindex", "0");
  });
  
  
  function handleOptionSelect(option) {
    const value = option.getAttribute('data-value');
    const oldText = selectedText.textContent;
    selectedText.textContent = option.textContent;
    option.textContent = oldText;
  
    dropdown.removeAttribute('open');
    sortAndDisplayMedia(value);
  }
  




function sortAndDisplayMedia(criteria) {
    // 1. Trier filteredMedia selon le critère
    if (criteria === "popularity") {
      filteredMedia.sort((a, b) => b.likes - a.likes);
    } else if (criteria === "date") {
      // Suppose que tu as une clé "date" dans chaque objet media
      filteredMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (criteria === "title") {
      filteredMedia.sort((a, b) => a.title.localeCompare(b.title));
    }
  
    // 2. Vider la galerie
    const container = document.querySelector(".media-gallery");
    container.innerHTML = "";
  
    // 3. Réafficher les médias triés
    filteredMedia.forEach((media, index) => {
      const mediaModel = mediaFactory(media);
      const mediaCard = mediaModel.getMediaCardDOM();
  
      const mediaElement = mediaCard.querySelector("img, video");
      if (mediaElement) {
        mediaElement.style.cursor = "pointer";
        mediaElement.addEventListener("click", () => {
          openLightbox(index);
        });
      }
  
      container.appendChild(mediaCard);
    });
  }
  ;



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