// Этот код должен находиться в одном файле JavaScript

document.addEventListener('DOMContentLoaded', function () {
  // Инициализация слайдера
  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: true,
    slidesPerView: 3, // Показывать 3 слайда одновременно
    spaceBetween: 10,
  });

  // Загрузите отзывы с сервера
  fetchReviews(swiper);
});

// Функция для получения отзывов с сервера
function fetchReviews(swiper) {
  fetch('/api/reviews') // Укажите правильный URL вашего API
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const reviewsList = document.querySelector('.swiper-wrapper');
      reviewsList.innerHTML = ''; // Очистить список перед добавлением новых элементов

      if (data.reviews.length === 0) {
        document.querySelector('.error-message').innerText = 'No reviews found';
        return;
      }

      data.reviews.forEach(review => {
        const reviewItem = document.createElement('li');
        reviewItem.classList.add('swiper-slide');
        reviewItem.innerHTML = `
          <img src="${review.photo}" alt="${review.name}">
          <h3>${review.name}</h3>
          <p>${review.text}</p>
        `; // Подгоните под вашу структуру данных.
        reviewsList.appendChild(reviewItem);
      });

      swiper.update(); // Обновить слайдер после добавления новых элементов
    })
    .catch(error => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
      document.querySelector('.error-message').innerText = 'Not found';
    });
}
