
// 1. UTILITAIRES GÉNÉRAUX
// Récupère l’ID du photographe depuis la query string de l’URL (ex. ?id=930)
const params = new URLSearchParams(window.location.search);
const photographerId = parseInt(params.get("id"), 10);


// 2. DONNÉES 
const mediaList = [
  // { id, photographerId, title, image/video, likes, date }
  { id: 1, photographerId: 930, title: "Connected Curves",    image: "assets/samplephotos-2/Ellie Rose/Architecture_Connected_Curves.jpg",   likes: 12,  date: "2001-12-08" },
  { id: 2, photographerId: 930, title: "Cross Bar",          image: "assets/samplephotos-2/Ellie Rose/Architecture_Cross_Bar.jpg",        likes: 45,  date: "2006-12-08" },
  { id: 3, photographerId: 930, title: "Horseshoe",          image: "assets/samplephotos-2/Ellie Rose/Architecture_Horseshoe.jpg",        likes: 78,  date: "2023-12-08" },
  { id: 4, photographerId: 930, title: "Water on Modern",    image: "assets/samplephotos-2/Ellie Rose/Architecture_Water_on_Modern.jpg",    likes: 87,  date: "2005-12-28" },
  { id: 5, photographerId: 930, title: "White Light",        image: "assets/samplephotos-2/Ellie Rose/Architecture_White_Light.jpg",        likes: 57,  date: "2001-12-28" },
  { id: 6, photographerId: 930, title: "Jump",               image: "assets/samplephotos-2/Ellie Rose/Sport_Jump.jpg",                    likes: 48,  date: "2018-12-28" },
  { id: 7, photographerId: 930, title: "Next Hold",          image: "assets/samplephotos-2/Ellie Rose/Sport_Next_Hold.jpg",               likes: 89,  date: "2019-12-28" },
  { id: 8, photographerId: 930, title: "Race End",           image: "assets/samplephotos-2/Ellie Rose/Sport_Race_End.jpg",                likes: 48,  date: "2020-12-28" },
  { id: 9, photographerId: 930, title: "Sky Cross",          image: "assets/samplephotos-2/Ellie Rose/Sport_Sky_Cross.jpg",               likes: 84,  date: "2021-12-28" },
  { id: 10, photographerId: 930, title: "Tricks in the air", video: "assets/samplephotos-2/Ellie Rose/Sport_Tricks_in_the_air.mp4",        likes: 48,  date: "2022-12-28" },
  { id: 11, photographerId: 930, title: "Water tunnel",       image: "assets/samplephotos-2/Ellie Rose/sport_water_tunnel.jpg",             likes: 57,  date: "2023-12-13" },

  { id: 12, photographerId: 195, title: "Corner Room",     image: "assets/samplephotos-2/Marcel/Architecture_Corner_Room.jpg",         likes: 39,  date: "2011-12-13" },
  { id: 13, photographerId: 195, title: "Cover circle...", video: "assets/samplephotos-2/Marcel/Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4", likes: 39,  date: "2012-12-13" },
  { id: 14, photographerId: 195, title: "Dome",            image: "assets/samplephotos-2/Marcel/Architecture_Dome.jpg",                 likes: 48,  date: "2013-12-13" },
  { id: 15, photographerId: 195, title: "On a hill",       image: "assets/samplephotos-2/Marcel/Architecture_On_a_hill.jpg",             likes: 95,  date: "2014-12-13" },
  { id: 16, photographerId: 195, title: "Contrast",        image: "assets/samplephotos-2/Marcel/Architecure_Contrast.jpg",              likes: 174, date: "2015-12-13" },
  { id: 17, photographerId: 195, title: "Adventure Door",  image: "assets/samplephotos-2/Marcel/Travel _Adventure_Door.jpg",             likes: 68,  date: "2016-12-13" },
  { id: 18, photographerId: 195, title: "Bike and Stair",  image: "assets/samplephotos-2/Marcel/Travel_Bike_and_Stair.jpg",              likes: 39,  date: "2017-12-13" },
  { id: 19, photographerId: 195, title: "Open Mountain",   image: "assets/samplephotos-2/Marcel/Travel_OpenMountain.jpg",                likes: 346, date: "2018-12-13" },
  { id: 20, photographerId: 195, title: "Sunset on Canals",image: "assets/samplephotos-2/Marcel/Travel_SunsetonCanals.jpg",               likes: 68,  date: "2019-12-19" },
  { id: 21, photographerId: 195, title: "Tower",           image: "assets/samplephotos-2/Marcel/Travel_Tower.jpg",                      likes: 89,  date: "2020-12-19" },

  { id: 22, photographerId: 243, title: "Rainbow",               image: "assets/samplephotos-2/Mimi/Animals_Rainbow.jpg",                likes: 89,  date: "2021-12-19" },
  { id: 23, photographerId: 243, title: "Wild Horses...",       video: "assets/samplephotos-2/Mimi/Animals_Wild_Horses_in_the_mountains.mp4", likes: 790, date: "2012-12-19" },
  { id: 24, photographerId: 243, title: "Benevides Wedding",     image: "assets/samplephotos-2/Mimi/Event_BenevidesWedding.jpg",          likes: 469, date: "2013-12-19" },
  { id: 25, photographerId: 243, title: "Pinto Wedding",         image: "assets/samplephotos-2/Mimi/Event_PintoWedding.jpg",              likes: 123, date: "2014-12-19" },
  { id: 26, photographerId: 243, title: "Seaside Wedding",       image: "assets/samplephotos-2/Mimi/Event_SeasideWedding.jpg",            likes: 321, date: "2015-12-19" },
  { id: 27, photographerId: 243, title: "Background",            image: "assets/samplephotos-2/Mimi/Portrait_Background.jpg",             likes: 34,  date: "2016-12-03" },
  { id: 28, photographerId: 243, title: "Nora",                  image: "assets/samplephotos-2/Mimi/Portrait_Nora.jpg",                   likes: 578, date: "2017-12-03" },
  { id: 29, photographerId: 243, title: "Wednesday",             image: "assets/samplephotos-2/Mimi/Portrait_Wednesday.jpg",              likes: 578, date: "2018-12-03" },
  { id: 30, photographerId: 243, title: "Hillside Color",         image: "assets/samplephotos-2/Mimi/Travel_HillsideColor.jpg",            likes: 234, date: "2019-12-03" },
  { id: 31, photographerId: 243, title: "Lonesome",               image: "assets/samplephotos-2/Mimi/Travel_Lonesome.jpg",                 likes: 65,  date: "2020-12-03" },

  { id: 32, photographerId: 527, title: "Afternoon Break",       image: "assets/samplephotos-2/Nabeel/Portrait_AfternoonBreak.jpg",      likes: 65,  date: "2011-12-16" },
  { id: 33, photographerId: 527, title: "Alexandra",             image: "assets/samplephotos-2/Nabeel/Portrait_Alexandra.jpg",           likes: 789, date: "2012-12-16" },
  { id: 34, photographerId: 527, title: "Shaw",                  image: "assets/samplephotos-2/Nabeel/Portrait_Shaw.jpg",                likes: 79,  date: "2013-12-16" },
  { id: 35, photographerId: 527, title: "Sunkissed",             image: "assets/samplephotos-2/Nabeel/Portrait_Sunkissed.jpg",           likes: 987, date: "2014-12-16" },
  { id: 36, photographerId: 527, title: "Boat Wanderer",         image: "assets/samplephotos-2/Nabeel/Travel_Boat_Wanderer.jpg",          likes: 65,  date: "2015-12-16" },
  { id: 37, photographerId: 527, title: "Bridge into Forest",    image: "assets/samplephotos-2/Nabeel/Travel_Bridge_into_Forest.jpg",     likes: 789, date: "2016-12-16" },
  { id: 38, photographerId: 527, title: "On the Road",           image: "assets/samplephotos-2/Nabeel/Travel_On_the_Road.jpg",            likes: 876, date: "2017-12-17" },
  { id: 39, photographerId: 527, title: "Outdoor Baths",         image: "assets/samplephotos-2/Nabeel/Travel_Outdoor_Baths.jpg",          likes: 123, date: "2018-12-17" },
  { id: 40, photographerId: 527, title: "Road into Hill",        image: "assets/samplephotos-2/Nabeel/Travel_Road_into_Hill.jpg",         likes: 789, date: "2019-12-17" },
  { id: 41, photographerId: 527, title: "Bridge into Forest",    video: "assets/samplephotos-2/Nabeel/Travel_Rock_Mountains.mp4",         likes: 789, date: "2020-12-17" },

  { id: 43, photographerId: 925, title: "Puppiness",             video: "assets/samplephotos-2/Rhode/Animals_Puppiness.mp4",             likes: 233, date: "2012-12-17" },
  { id: 44, photographerId: 925, title: "Emcee",                 image: "assets/samplephotos-2/Rhode/Event_KeyboardCheck.jpg",           likes: 654, date: "2013-12-17" },
  { id: 45, photographerId: 925, title: "Product Pitch",         image: "assets/samplephotos-2/Rhode/Event_ProductPitch.jpg",            likes: 67,  date: "2014-12-17" },
  { id: 46, photographerId: 925, title: "Venture Conference",    image: "assets/samplephotos-2/Rhode/Event_VentureConference.jpg",       likes: 76,  date: "2015-12-17" },
  { id: 47, photographerId: 925, title: "Majesty",               image: "assets/samplephotos-2/Rhode/Animals_Majesty.jpg",               likes: 789, date: "2016-12-17" },
  { id: 48, photographerId: 925, title: "Melody Red on Stripes", image: "assets/samplephotos-2/Rhode/Fashion_Melody_Red_on_Stripes.jpg",   likes: 12,  date: "2017-12-20" },
  { id: 49, photographerId: 925, title: "Wings",                 image: "assets/samplephotos-2/Rhode/Fashion_Wings.jpg",                 likes: 789, date: "2018-12-20" },
  { id: 50, photographerId: 925, title: "2000 with 8",           image: "assets/samplephotos-2/Rhode/Sport_2000_with_8.jpg",             likes: 78,  date: "2019-12-20" },
  { id: 51, photographerId: 925, title: "Butterfly",             image: "assets/samplephotos-2/Rhode/Sport_Butterfly.jpg",               likes: 73,  date: "2020-12-20" },

  { id: 52, photographerId: 82,  title: "Mine",                  image: "assets/samplephotos-2/Tracy/Art_Mine.jpg",                     likes: 789, date: "2011-12-20" },
  { id: 53, photographerId: 82,  title: "Purple light",          image: "assets/samplephotos-2/Tracy/Art_Purple_light.jpg",             likes: 78,  date: "2012-12-20" },
  { id: 54, photographerId: 82,  title: "Triangle Man",          image: "assets/samplephotos-2/Tracy/Art_Triangle_Man.jpg",             likes: 876, date: "2013-12-21" },
  { id: 55, photographerId: 82,  title: "Wooden Horse...",       video: "assets/samplephotos-2/Tracy/Art_Wooden_Horse_Sculpture.mp4",    likes: 123, date: "2014-12-21" },
  { id: 56, photographerId: 82,  title: "18th Anniversary",      image: "assets/samplephotos-2/Tracy/Event_18thAnniversary.jpg",        likes: 87,  date: "2015-12-21" },
  { id: 57, photographerId: 82,  title: "Sparklers",             image: "assets/samplephotos-2/Tracy/Event_Sparklers.jpg",              likes: 789, date: "2016-12-21" },
  { id: 58, photographerId: 82,  title: "Wedding Gazebo",        image: "assets/samplephotos-2/Tracy/Event_WeddingGazebo.jpg",           likes: 873, date: "2017-12-21" },
  { id: 59, photographerId: 82,  title: "Pattern on Pattern",    image: "assets/samplephotos-2/Tracy/Fashion_Pattern_on_Pattern.jpg",    likes: 23,  date: "2018-12-21" },
  { id: 60, photographerId: 82,  title: "Urban Jungle",          image: "assets/samplephotos-2/Tracy/Fashion_Urban_Jungle.jpg",          likes: 789, date: "2019-12-21" },
  { id: 61, photographerId: 82,  title: "Yellow Beach",          image: "assets/samplephotos-2/Tracy/Fashion_Yellow_Beach.jpg",          likes: 789, date: "2020-12-21" }
];

// Filtrer d’abord les médias pour le photographe courant
let filteredMedia = mediaList.filter(media => media.photographerId === photographerId);

// 3. ORGA DE LA CARTE MÉDIA
function mediaFactory(media) {
  function getMediaCardDOM() {
    // 3.1 Créer l’élément <article> qui contiendra le média
    const article = document.createElement("article");
    article.classList.add("media-card");
    article.setAttribute("tabindex", "0")

    // 3.2 Créer la balise <img> ou <video> selon le type de média
    let mediaElement;
    if (media.video) {
      mediaElement = document.createElement("video");
      mediaElement.src = media.video;
      mediaElement.controls = true;
    } else {
      mediaElement = document.createElement("img");
      mediaElement.src = media.image;
      mediaElement.alt = media.title;
    }

    // 3.3 Créer le titre du média
    const title = document.createElement("h3");
    title.textContent = media.title;
    title.setAttribute("tabindex", "0")
    title.setAttribute("aria-label","media.title")
    

    // 3.4 Créer le wrapper pour les likes
    const likeWrapper = document.createElement("div");
    likeWrapper.classList.add("like-wrapper");

    const likesSpan = document.createElement("span");
    likesSpan.classList.add("like-count");
    likesSpan.textContent = media.likes;

    const likeBtn = document.createElement("button");
    likeBtn.classList.add("like-btn");
    likeBtn.innerHTML = "❤";
    likeBtn.setAttribute("aria-label", "Ajouter un like");

    // 3.5 Gérer le clic pour incrémenter les likes une seule fois
    let liked = false;
    likeBtn.addEventListener("click", () => {
      if (!liked) {
        media.likes += 1;
        likesSpan.textContent = media.likes;
        totalLikes += 1;
        updateTotalLikes();
        liked = true;
      }
    });

    likeWrapper.appendChild(likesSpan);
    likeWrapper.appendChild(likeBtn);

    // 3.6 Regrouper titre + likes dans un conteneur
    const titleLikes = document.createElement("div");
    titleLikes.classList.add("titleLikes");
    titleLikes.appendChild(title);
    titleLikes.appendChild(likeWrapper);

    // 3.7 Assembler la carte : média + (titre + likes)
    article.appendChild(mediaElement);
    article.appendChild(titleLikes);

    return article;
  }

  return { getMediaCardDOM };
}


// 4. AFFICHAGE ET TRI DE LA GALERIE

// Tri et affichage initial par popularité
sortAndDisplayMedia("popularity");

function sortAndDisplayMedia(criteria) {
  // 4.1 Trier filteredMedia selon le critère demandé
  if (criteria === "popularity") {
    filteredMedia.sort((a, b) => b.likes - a.likes);
  } else if (criteria === "date") {
    filteredMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (criteria === "title") {
    filteredMedia.sort((a, b) => a.title.localeCompare(b.title));
  }

  // 4.2 Vider le conteneur de la galerie
  const container = document.querySelector(".media-gallery");
  container.innerHTML = "";

  // 4.3 Parcourir chaque média trié, créer sa carte, puis l’injecter dans le DOM
  filteredMedia.forEach((media, index) => {
    const mediaModel = mediaFactory(media);
    const mediaCard = mediaModel.getMediaCardDOM();

    // Rendre l’image/vidéo cliquable pour ouvrir la lightbox
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

// ------------------------------
// 5. LIGHTBOX (VISU DU MÉDIA EN GRAND + NAVIGATION)
// ------------------------------

let currentIndex = 0;

// Ouvre la lightbox sur le média à l’index donné
function openLightbox(index) {
  const media = filteredMedia[index];
  const lightbox = document.getElementById("lightbox");
  const content = lightbox.querySelector(".lightbox-content");
  content.innerHTML = ""; // Réinitialiser le contenu existant

  // Créer l’élément média (img ou video)
  let mediaElement;
  if (media.video) {
    mediaElement = document.createElement("video");
    mediaElement.src = media.video;
    mediaElement.controls = true;
  } else {
    mediaElement = document.createElement("img");
    mediaElement.src = media.image;
    mediaElement.alt = media.title;
  }

  // Créer le titre sous le média
  const title = document.createElement("h2");
  title.textContent = media.title;

  content.appendChild(mediaElement);
  content.appendChild(title);

  lightbox.classList.remove("hidden");
  currentIndex = index;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("hidden");
}

// Navigation “précédent” et “suivant” dans la lightbox
document.querySelector(".lightbox-prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
  openLightbox(currentIndex);
});
document.querySelector(".lightbox-next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % filteredMedia.length;
  openLightbox(currentIndex);
});

// Navigation au clavier dans la lightbox
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    openLightbox(currentIndex);
  } else if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % filteredMedia.length;
    openLightbox(currentIndex);
  } else if (event.key === "Escape") {
    closeLightbox();
  }
});

// ------------------------------
// 6. TOTAL DES LIKES
// ------------------------------

let totalLikes = filteredMedia.reduce((sum, media) => sum + media.likes, 0);

const totalLikesElement = document.createElement("div");
totalLikesElement.classList.add("totalLikes");
totalLikesElement.textContent = `${totalLikes} ❤`;

const fixedWidget = document.querySelector(".fixedWidget");
fixedWidget.appendChild(totalLikesElement);


// Met à jour l’affichage du total des likes (appelé à chaque nouveau like)
function updateTotalLikes() {
  totalLikesElement.textContent = `${totalLikes} ❤`;
  totalLikesElement.setAttribute("tabindex", "0");
  totalLikesElement.setAttribute("aria-label", `${totalLikes}`)
}

// ------------------------------
// 7. AFFICHAGE DU PRIX JOURNALIER
// ------------------------------

async function getPhotographer() {
  // Reprend la même fonction de récupération des données qu’ailleurs
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

async function displayPhotographerPrice() {
  const { photographer, error } = await getPhotographer();
  if (error || !photographer) return;

  const pricePerDay = photographer.price;
  const priceElement = document.createElement("div");
  priceElement.classList.add("dayPrice");
  priceElement.textContent = `${pricePerDay}€/jour`;
  priceElement.setAttribute("tabindex", "0");
  priceElement.setAttribute("aria-label", `${pricePerDay}€/jour`)

  const fixedWidget = document.querySelector(".fixedWidget");
  fixedWidget.appendChild(priceElement);
}

// Lancer l’affichage du prix une fois que tout le DOM est prêt
document.addEventListener("DOMContentLoaded", () => {
  displayPhotographerPrice();
});
