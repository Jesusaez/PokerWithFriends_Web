document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const indicators = document.querySelectorAll('.indicator');
  const carouselContainer = document.querySelector('.carousel-container');
  let currentSlide = 0;

  // Actualiza la posición del carrusel
  function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    carouselContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    updateIndicators();
  }

  // Cambiar el indicador activo
  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
  }

  // Ir al siguiente slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }

  // Ir al slide anterior
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  // Navegación con los indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });

  // Escuchar eventos de los botones
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  // Auto-slide cada 5 segundos
  setInterval(nextSlide, 5000);

  // Inicializar la posición
  updateCarousel();
});
