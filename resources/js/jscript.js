// Variables intialization
const button = document.getElementById("button");
const jokeApi = "https://official-joke-api.appspot.com/jokes/programming/random";
const audio = document.getElementById("audio");
const firstLine = document.getElementById("setup");
const secondLine = document.getElementById("punchline");

// API fetching
const getData = async() =>{
try{
    const response = await fetch(jokeApi);
    const data = await response.json();
    console.log(data)
    // renderJoke(data);
} catch (error) {
    console.error('Errore durante il recupero dei dati:', error);
  }
}

// Joke rendering function on the page
const renderJoke = (data) =>{
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
}

// Sound playing function on click
const playSound = () =>{
    audio.play()
}


button.addEventListener("click", getData)

button.addEventListener("click", playSound)