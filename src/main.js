import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.querySelector('#search-form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  const images = await fetchImages(query);
  renderImages(images);
});
