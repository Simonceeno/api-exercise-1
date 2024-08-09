// Variables intialization
const button = document.getElementById("button");
const jokeApi = "https://official-joke-api.appspot.com/jokes/programming/random";
const audio = document.getElementById("audio");
const firstLine = document.getElementById("setup");
const secondLine = document.getElementById("punchline");

// API fetching
const getData = async () => {
    try {
        const response = await fetch(jokeApi);
        let data = await response.json();
        // console.log(data); <- uncomment to see response on console
        renderJoke(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Joke rendering function on the page
// As the requested APIs are actually an array of objects:
const renderJoke = (data) => {
    firstLine.innerHTML = data[0].setup;
    secondLine.innerHTML = data[0].punchline;
}

// Sound playing function on click after 2 seconds
const playSound = () => {
    setTimeout(() => {
        audio.play()
    }, 1500)
}


button.addEventListener("click", getData)

button.addEventListener("click", playSound)