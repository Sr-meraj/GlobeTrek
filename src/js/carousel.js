document.addEventListener('DOMContentLoaded', function () {
      const carousel = document.querySelector('#testimonialIndicator');
      const carouselInner = carousel.querySelectorAll('.carousel-item');
      const carouselItems = carousel.querySelectorAll('.carousel-item');
      const indicators = carousel.querySelectorAll('.carousel-indicators button');

      let currentIndex = 0;

      function updateCarousel() {
        carouselInner.forEach((carouselItem, index) => {
          carouselItem.classList.toggle('active', index === currentIndex);
        });
        indicators.forEach((indicator, index) => {
          indicator.classList.toggle('active', index === currentIndex);
        });
      }

      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          currentIndex = index;
          updateCarousel();
        });
      });

      function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
      }

      // Optionally, you can set up an automatic slide interval
      setInterval(nextSlide, 5000); // Change slide every 5 seconds
    });