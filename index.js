const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

const fetchJoke = async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
        "User-agent": "learning",
      },
    });
    const result = await response.json();
    const dadjoke = result.joke;
    joke.innerHTML = dadjoke;
  } catch (err) {
    console.log(err);
  }
};

fetchJoke();

btn.addEventListener("click", () => {fetchJoke()});
