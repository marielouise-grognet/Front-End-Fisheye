function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/idphoto/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement( 'p' );
        location.textContent = `${city}, ${country}`;
        const slogan = document.createElement( 'p' );
        slogan.textContent = tagline;
        const pricePrestation = document.createElement( 'p' );
        pricePrestation.textContent = `${price}€/jour`;
        console.log(price)
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location)
        article.appendChild(slogan)
        article.appendChild(pricePrestation)
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}