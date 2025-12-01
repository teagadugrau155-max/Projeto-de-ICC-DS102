document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.rating').forEach((rating, slideIndex) => {
    const stars = Array.from(rating.querySelectorAll('.star'));
    let selectedValue = 0;
    const storageKey = 'rating-slide-' + slideIndex; // chave diferente pra cada slide

    // Carrega avaliação salva
    const saved = localStorage.getItem(storageKey);
    if(saved) {
      selectedValue = parseInt(saved);
      stars.forEach((s, i) => s.classList.toggle('selected', i < selectedValue));
    }

    stars.forEach((star, index) => {
      star.addEventListener('mouseenter', () => {
        stars.forEach((s, i) => s.classList.toggle('hovered', i <= index));
      });

      star.addEventListener('mouseleave', () => {
        stars.forEach((s, i) => s.classList.toggle('hovered', i < selectedValue));
      });

      star.addEventListener('click', () => {
        selectedValue = index + 1;
        localStorage.setItem(storageKey, selectedValue); // salva no navegador
        stars.forEach((s, i) => s.classList.toggle('selected', i < selectedValue));
      });
    });
  });
});

