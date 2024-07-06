document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slider section');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    let currentIndex = 0;

    // Function to show current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    // Show initial slide
    showSlide(currentIndex);

    // Function to move to the next slide
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0; // Loop back to the first slide
        }
        showSlide(currentIndex);
    }

    // Function to move to the previous slide
    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1; // Go to the last slide
        }
        showSlide(currentIndex);
    }

    // Event listener for right arrow
    rightArrow.addEventListener('click', nextSlide);

    // Event listener for left arrow
    leftArrow.addEventListener('click', prevSlide);
});


var swiper = new Swiper(`[unique-script-id="w-w-dm-id"] .mySwiper`, {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 5,
    pagination: {
      el: `[unique-script-id="w-w-dm-id"] .swiper-pagination`,
      clickable: true,
    },
    loop: true,
    navigation: {
      nextEl: `[unique-script-id="w-w-dm-id"] .swiper-button-nexts`,
      prevEl: `[unique-script-id="w-w-dm-id"] .swiper-button-prevs`,
    },
  });


  //carousel about

  function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}

function showSidebar() {
    document.getElementById("sidebar").style.right = "0"; // Show sidebar by setting right to 0
}

function hideSidebar() {
    document.getElementById("sidebar").style.right = "-250px"; // Hide sidebar by setting right off-screen
}

