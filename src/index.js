// FETCHING MOVIES FROM OMDBAPI

// Imports
import { searchMovies, updateResultsList } from './movies';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';

// Call plugins
initSortable();
initMarkdown();
initSelect2();

// Elements
const form = document.querySelector('#search-movies');

// Listeners
form.addEventListener('submit', updateResultsList);

// Function Calls
searchMovies('harry potter');
