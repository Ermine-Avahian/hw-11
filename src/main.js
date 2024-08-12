import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.querySelector('#search-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  fetchImages(query)
    .then(images => {
      renderImages(images);
    })
    .catch(error => {
      console.error('Error handling images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    });
});
