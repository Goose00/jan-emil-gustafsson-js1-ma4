const gamesUrl = "https://api.rawg.io/api/games";

async function getGames() {
    try {
        const response = await fetch(gamesUrl);

        const games = await response.json();

        createGames(games);
    }
    catch (error) {
        console.log(error);
    }
}

getGames();

function createGames(games) {
    console.log(games);

    const gameResults = document.querySelector(".results");

    let html = "";

    for (let i = 0; i < games.results.length; i++) {

        if (games.results[i].name) {
            
        }

        html += `<div class="game">
                    <h2>${games.results[i].name}</h2>
                    <img src="${games.results[i].background_image}" alt="${games.results[i].name}" />
                </div>`
    }

   gameResults.innerHTML = html;
}

