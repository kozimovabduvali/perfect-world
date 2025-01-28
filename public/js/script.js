document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".Slider-wrapper");
  const slides = document.querySelectorAll(".slide-content");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const pagination = document.querySelector(".pagination");
  const paginationMobile = document.querySelector(".pagination-mobile");

  let currentIndex = 0;  // Initial index

  // Create pagination dots (Desktop)
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    pagination.appendChild(dot);
    dot.addEventListener("click", () => goToSlide(index));  // Slide on click
  });

  // Create mobile pagination (1/4, 2/4)
  const mobileText = document.createElement("span");
  mobileText.classList.add("mobile-text");
  paginationMobile.appendChild(mobileText);
  updateMobilePagination();  // Update text

  const dots = document.querySelectorAll(".pagination .dot");

  // Update slider display
  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });
    updatePagination();  // Update dots
    updateMobilePagination();  // Update mobile text
    updateControls();  // Update buttons
  }

  // Go to previous slide
  function goToPrevSlide() {
    if (currentIndex > 0) currentIndex--;
    updateSlider();
  }

  // Go to next slide
  function goToNextSlide() {
    if (currentIndex < slides.length - 1) currentIndex++;
    updateSlider();
  }

  // Go to specific slide
  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }

  // Update pagination dots
  function updatePagination() {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Update mobile pagination (1/4)
  function updateMobilePagination() {
    mobileText.textContent = `${currentIndex + 1}/${slides.length}`;
  }

  // Update control buttons (Prev/Next)
  function updateControls() {
    if (currentIndex === 0) {
      prevButton.classList.remove("hover:shadow-custom", "cursor-pointer");
    } else {
      prevButton.classList.add("hover:shadow-custom", "cursor-pointer");
    }

    if (currentIndex === slides.length - 1) {
      nextButton.classList.remove("hover:shadow-custom", "cursor-pointer");
    } else {
      nextButton.classList.add("hover:shadow-custom", "cursor-pointer");
    }
  }

  // Event listeners for navigation
  prevButton.addEventListener("click", goToPrevSlide);
  nextButton.addEventListener("click", goToNextSlide);

  updateSlider();  // Initialize
});