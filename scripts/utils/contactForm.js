// ============= VARIABLES GLOBALES POUR LE FOCUS TRAP =============
let lastFocusedElement = null;
let focusableElementsInModal = [];
let firstFocusableEl = null;
let lastFocusableEl = null;
let trapFocusHandler = null;

// ============= GESTION DU FORMULAIRE =============
const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // empêche le rechargement de la page
  
  // Récupérer et logger les valeurs (facultatif)
  const valeurFirst   = document.getElementById("firstName").value.trim();
  const valeurLast    = document.getElementById("lastName").value.trim();
  const valeurEmail   = document.getElementById("email").value.trim();
  const valeurMessage = document.getElementById("message").value.trim();
  console.log(valeurFirst, valeurLast, valeurEmail, valeurMessage);

  // Fermer la modale
  closeModal();

  // Si vous devez rafraîchir la page ou recharger certaines données
  await init(); 
});


// ============= OUVRIR LA MODALE ET PRÉPARER LE FOCUS TRAP =============
function displayModal() {
  const modal        = document.getElementById("contact_modal");
  const mainContent  = document.querySelector("main");
  const contactButton = document.querySelector(".contact_button");

  // 1) On garde en mémoire l’élément qui a déclenché la modale 
  lastFocusedElement = document.activeElement || contactButton;

  // 2) Masquer le <main> aux aides techniques et à la navigation clavier
  mainContent.setAttribute("aria-hidden", "true");

  // 3) Afficher la modale (mise en display)
  modal.style.display = "block";
  modal.removeAttribute("aria-hidden");

  // 3.1) DONNER LE FOCUS À LA DIV DE LA MODALE
  modal.focus();

  // 4) Construire la liste des éléments focusables à l’intérieur de la modale
  focusableElementsInModal = Array.from(
    modal.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), ' +
      'input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );

  if (focusableElementsInModal.length > 0) {
    firstFocusableEl = focusableElementsInModal[0];
    lastFocusableEl  = focusableElementsInModal[focusableElementsInModal.length - 1];
  }

  // ✱ On ne place plus automatiquement le focus sur firstFocusableEl,
  //    on laisse le navigateur amener le focus dessus au premier Tab.

  // 5) Installer le focus trap
  trapFocusHandler = function(e) {
    if (e.key === "Tab") {
      // Si Tab sans Shift et qu’on est sur le dernier, on boucle au premier
      if (!e.shiftKey && document.activeElement === lastFocusableEl) {
        e.preventDefault();
        firstFocusableEl.focus();
      }
      // Si Shift+Tab et qu’on est sur le premier, on boucle au dernier
      else if (e.shiftKey && document.activeElement === firstFocusableEl) {
        e.preventDefault();
        lastFocusableEl.focus();
      }
    }
    else if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
    }
  };
  modal.addEventListener("keydown", trapFocusHandler);

  // 6) Fermer si clic à l’extérieur du contenu .modal
  modal.addEventListener("click", outsideClickListener);
}

// Helper pour détecter le clic hors de .modal (au niveau de l’overlay #contact_modal)
function outsideClickListener(e) {
  const modal = document.getElementById("contact_modal");
  if (e.target === modal) {
    closeModal();
  }
}


// ============= FERMER LA MODALE ET RESTAURER LE FOCUS =============
function closeModal() {
  const modal       = document.getElementById("contact_modal");
  const mainContent = document.querySelector("main");

  // 1) Cacher la modale
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");

  // 2) Restituer l’accessibilité du <main>
  mainContent.removeAttribute("aria-hidden");

  // 3) Retirer le focus trap
  if (trapFocusHandler) {
    modal.removeEventListener("keydown", trapFocusHandler);
    trapFocusHandler = null;
  }

  // 4) Retirer le listener de clic extérieur
  modal.removeEventListener("click", outsideClickListener);

  // 5) Rendre le focus à l’élément qui a ouvert la modale
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}


// ============= AFFICHER LE NOM DU PHOTOGRAPHE DANS LA MODALE =============
async function displayPhotographerName() {
  async function getPhotographer() {
    try {
      const response = await fetch("data/photographers.json");
      const data = await response.json();
      const params = new URLSearchParams(window.location.search);
      const id = parseInt(params.get("id"), 10);
      const photographer = data.photographers.find((p) => p.id === id);
      return { photographer };
    } catch (error) {
      console.error("Erreur lors du chargement des photographes :", error);
      return { error };
    }
  }

  const { photographer } = await getPhotographer();
  const h2 = document.getElementById("contact");
  if (h2 && photographer) {
    h2.innerHTML = `Contactez-moi<br>${photographer.name}`;
  }
}


// ============= INITIALISATION =============
async function init() {
  // Mettre à jour le nom du photographe dans la modale
  await displayPhotographerName();
}

// On appelle init() dès que le fichier est chargé
init();
