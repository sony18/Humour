// DOM element capture
const joke2_Btn = document.querySelector("#joke2-btn");
const random_Btn = document.querySelector("#random-btn");
const joke_result = document.querySelector("#joke-result");
const url_search = "https://icanhazdadjoke.com/search?limit=5";
const url_random = "https://icanhazdadjoke.com";
const graph_QL = "https://icanhazdadjoke.com/graphql";

// Fetch random joke : end-point supply random 1 joke
function fetchjokes() {
	fetch(url_random, {
			headers: {
				accept: "application/json"
			}
		})
		.then(r => r.json())
		.then(joke => {
			let result = `<h2>A random Joke</h2>`;
			result += `<li>${joke.joke}</li>
                  `;
			console.log(result);
			joke_result.innerHTML = result;
		});
}

//   Fetch 2 random jokes out of jokes list
function fetchJoke1() {
	fetch(url_search, {
			headers: {
				accept: "application/json"
			}
		})
		.then(res => res.json())
		.then(jokes => {
			let jokes_array;
			console.log(jokes);
			jokes_array = jokes.results;
			let result = `<h2> 2 Random jokes</h2> `;
			console.log(jokes_array);
			result += `       
    <li>${random(jokes_array).joke}</li>
    <li>${random(jokes_array).joke}</li>
    `;
			joke_result.innerHTML = result;
		});
}

function random(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

// Event listener
random_Btn.addEventListener("click", fetchjokes);
joke2_Btn.addEventListener("click", fetchJoke1);