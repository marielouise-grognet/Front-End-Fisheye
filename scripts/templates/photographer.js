function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/idphoto/${portrait}`;

    function getUserCardIndexDOM() {
        const article = document.createElement( 'article' );

        const link = document.createElement( 'a' )
        link.setAttribute("href", `photographer.html?id=${id}`) 
        link.setAttribute("aria-label", `Accéder à la page du photographe ${name}`)
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait de ${name}`)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        link.appendChild(img)
        link.appendChild(h2)
        article.appendChild(link)

        const location = document.createElement( 'p' );
        location.classList.add(`photographer-location`)
        location.textContent = `${city}, ${country}`;


        const slogan = document.createElement( 'p' );
        slogan.classList.add(`photographer-tagline`)
        slogan.textContent = tagline;

        const pricePrestation = document.createElement( 'p' );
        pricePrestation.classList.add(`photographer-price`)
        pricePrestation.textContent = `${price}€/jour`;

        article.appendChild(location)
        article.appendChild(slogan)
        article.appendChild(pricePrestation)
        return (article);
    }
    
    function getUserCardPhotographerPageDOM() {
        const article = document.createElement( 'article' );

        const link = document.createElement( 'a' )
        link.setAttribute("href", `photographer.html?id=${id}`) 
        link.setAttribute("aria-label", `Accéder à la page du photographe ${name}`)
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait de ${name}`)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        link.appendChild(img)
        link.appendChild(h2)
        article.appendChild(link)

        const location = document.createElement( 'p' );
        location.classList.add(`photographer-location`)
        location.textContent = `${city}, ${country}`;


        const slogan = document.createElement( 'p' );
        slogan.classList.add(`photographer-tagline`)
        slogan.textContent = tagline;



        article.appendChild(location)
        article.appendChild(slogan)
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardIndexDOM, getUserCardPhotographerPageDOM }

}