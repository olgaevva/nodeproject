'use strict';
function getRandomCategory (array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    console.log(array[randomIndex])
    return array[randomIndex];
}
async function getJoke() {
    try {
        const categoryArray = ['Programming', 'Dark', 'Spooky', 'Pun', 'Christmas'];
        const randomCategory = getRandomCategory(categoryArray);
        const response = await fetch('https://v2.jokeapi.dev/joke/'+ randomCategory);
        return await response.json()
    } catch(e) {
        console.error(e);
        throw e;
    }
}
async function main() {
    const jokes = await Promise.all([
        getJoke(),
        getJoke(),
        getJoke(),
    ]);
    console.log(jokes);
    jokes.map((el, index) => {
            createCards(el, index+1);
        }
    )
}

function createCards(joke, cardNumber) {
    const divForCards = document.querySelector(`#card${cardNumber}`);
    let jokeText = '';
    if (joke.type === "twopart") {
        jokeText = `${joke.setup} ${joke.delivery}`
    } else {
        jokeText = `${joke.joke}`
    }
    divForCards.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="category-title">Category "${joke.category}"</h5>
                <p class="card-text">${jokeText}</p>
        </div>
    </div>`;
}

let button = document.querySelector(".btn")
button.addEventListener("click", async () => {
    await main();
})
