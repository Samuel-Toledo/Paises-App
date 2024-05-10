// MAIN JS PAISES APP

document.querySelector(".clear-icon").addEventListener("click", () => {
    const searchValue = document.querySelector(".search-input");
    searchValue.value = "";
    searchValue.focus();
    console.log(searchValue.value);
});

document.querySelector(".search-country").addEventListener("submit", (event) => {
    event.preventDefault();
    const country = document.querySelector(".search-input").value;
    console.log(country);
})