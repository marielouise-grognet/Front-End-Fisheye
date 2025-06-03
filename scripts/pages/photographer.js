document.addEventListener('DOMContentLoaded', () => {
  const dropdown     = document.querySelector('.dropdown');
  const selectedText = dropdown.querySelector('.selected-text');
  const options      = dropdown.querySelectorAll('.dropdown-options li');

  // 1) Initialisation : on force le résume à « Popularité »
  selectedText.textContent   = "Popularité";
  selectedText.dataset.value = "popularity";

  // 2) Quand on ouvre le <details>, on cache la ligne correspondante au critère déjà sélectionné
  dropdown.addEventListener('toggle', () => {
    if (dropdown.open) {
      // Parcours de chaque <li> :
      options.forEach(li => {
        if (li.dataset.value === selectedText.dataset.value) {
          // Si le data-value = critère actif, on masque ce <li>
          li.style.display = "none";
        } else {
          // Sinon, on l'affiche normalement
          li.style.display = "";
        }
      });
    }
  });

  // 3) Ajout des listeners sur chaque option
  options.forEach(option => {
    // a) clic souris
    option.addEventListener("click", () => handleOptionSelect(option));

    // b) navigation clavier (Enter / Espace / flèches haut-bas)
    option.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOptionSelect(option);
      } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        // focus cyclique
        const list = Array.from(options).filter(li => li.style.display !== "none");
        const idx = list.indexOf(option);
        if (e.key === "ArrowDown") {
          list[(idx + 1) % list.length].focus();
        } else {
          list[(idx - 1 + list.length) % list.length].focus();
        }
      }
    });

    // c) rendre focusable
    option.setAttribute("tabindex", "0");
  });

  function handleOptionSelect(option) {
    // 1) On lit la valeur du <li> cliqué
    const value = option.dataset.value;          
    const label = option.textContent.trim();     

    // 2) On met à jour le <span class="selected-text">
    selectedText.textContent   = label;
    selectedText.dataset.value = value;

    // 3) On ferme le <details>
    dropdown.removeAttribute("open");

    // 4) On appelle le tri
    sortAndDisplayMedia(value);
  }

  // ========== TRI / AFFICHAGE ==========
  function sortAndDisplayMedia(criteria) {
    if (criteria === "popularity") {
      filteredMedia.sort((a, b) => b.likes - a.likes);
    } else if (criteria === "date") {
      filteredMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (criteria === "title") {
      filteredMedia.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      console.warn(`Critère inconnu : ${criteria}`);
      return;
    }

    const container = document.querySelector(".media-gallery");
    container.innerHTML = "";

    filteredMedia.forEach((media, index) => {
      const mediaModel = mediaFactory(media);
      const mediaCard  = mediaModel.getMediaCardDOM();
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

  // Tri initial au chargement (popularity)
  sortAndDisplayMedia("popularity");

  // ========== LE RESTE DU CODE (getPhotographer, displayPhotographer, init...) ==========
  async function getPhotographer() {
    try {
      const response = await fetch("data/photographers.json");
      const data     = await response.json();
      const params   = new URLSearchParams(window.location.search);
      const id       = parseInt(params.get("id"), 10);
      const photographer = data.photographers.find(p => p.id === id);
      return { photographer };
    } catch (error) {
      console.error("Erreur lors du chargement des photographes :", error);
      return { error };
    }
  }

  async function displayPhotographer(photographer) {
    const photographerContent = document.querySelector(".photographerContent");
    const photographerModel   = photographerTemplate(photographer);
    const userCardDOM         = photographerModel.getUserCardPhotographerPageDOM();
    photographerContent.appendChild(userCardDOM);
  }

  async function init() {
    const { photographer } = await getPhotographer();
    displayPhotographer(photographer);
  }
  init();
});
