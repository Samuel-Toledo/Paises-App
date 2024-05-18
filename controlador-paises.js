const SERVER_URL = "https://restcountries.com/v3.1/"

const getAllCountries = () => {

    const endpoint = `${SERVER_URL}/all`

    fetch(endpoint)
        .then((response) => {
            console.log(response);
            return response.json();
        })
    .then((data) => {
        console.log(data[67].language //[0].flags.png, data[0].name.common, data[0].population, data[0].languages.ron
    )
        bdCountries(data);
    })
}

const bdCountries = (data) => {



    data.forEach(country => {
        
        const countryCard = document.createElement("div")
        countryCard.classList.add("country-card")

        const countries = new Country (country.flags.png, country.name.common, country.population, country.languages);
        
        countryCard.innerHTML = `
        <img src="${country.flags.png}" alt="${country.name.common}">
        <p>Nombre del país: <br>${country.name.common}</p>
        <p>Habitantes: ${Intl.NumberFormat().format(country.population)}</p>
        <p>Idioma: ${country.languages}</p>
        `;

        document.querySelector(".card-container").append(countryCard);

        console.log(countries);
    });
}



getAllCountries();