const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

//We added an event listener to our button so it could fetch the new joke from the API when we click it
jokeBtn.addEventListener('click', generateJoke)

generateJoke() 


async function generateJoke() {
    const config = {
        // In order to get the json data instead of HTML we added the relevant key and the value from this API
        headers: {
            'Accept': 'application/json'
        }
    }
    // fetch process gives us a promise back so with await we turned to async
    const res = await fetch('https://icanhazdadjoke.com/',config)
    
    const data = await res.json()
    // innerHTML allows us to put the exact data from the API to our Website
    jokeEl.innerHTML = data.joke

}

//In this case we used promises

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/',config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })

// }
