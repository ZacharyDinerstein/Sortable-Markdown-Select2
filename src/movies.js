// movies.js

const resultsContainer = document.querySelector("#results-container");

const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      resultsContainer.innerHTML = '';
      data.Search.forEach((result) => {
        const movie = `<li class="list-inline-item">
          <img src="${result.Poster}" alt="">
          </li>`;
        resultsContainer.insertAdjacentHTML("afterbegin", movie);
      });
    });
};


const updateResultsList = (event) => {
  event.preventDefault();
  const keyword = document.querySelector('#keyword');
  searchMovies(keyword.value);
};


export { searchMovies, updateResultsList };
