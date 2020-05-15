const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const name = params.get("name");

const url = "https://api.rawg.io/api/games/4200";

async function createGameDetails() {

    const heading = document.querySelector("h1");

    const image = document.querySelector(".image");

    const description = document.querySelector(".description");

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        heading.innerHTML = details.name;

        image.innerHTML = details.background_image;

        description.innerHTML = details.description;

    }
    catch (error) {
        heading.innerHTML = "An error occured";
        console.log(error);

    }
}
createGameDetails();

