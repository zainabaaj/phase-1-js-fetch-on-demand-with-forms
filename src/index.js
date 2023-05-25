
const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');

        console.log(input.value);

        fetch(`./db.json`)
            .then(response => response.json())
            .then(data => {
                const movie = data.movies[input.value - 1]
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');

                title.innerText = movie.title;
                summary.innerText = movie.summary;
            });
    });
}

document.addEventListener('DOMContentLoaded', init);