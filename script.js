//navbar
const navbar = document.querySelector('.navbar');
const stickyNavbar = document.querySelector('.sticky-navbar');

const observer = new IntersectionObserver(
  entries => {
    const ent = entries[0];
    console.log(ent);
    ent.isIntersecting === false
      ? navbar.classList.add('sticky')
      : navbar.classList.remove('sticky');
  },

  {
    root: null,
    rootMargin: '-70px',
    threshold: '0',
  }
);

observer.observe(stickyNavbar);

//Carousel
$(document).ready(function () {
  // Store the carousel and div-link elements
  var carousel = $('#carouselExample');
  var divLinks = $('.div-link');

  var activeSlideIndex = 0;
  carousel.carousel(activeSlideIndex);
  divLinks.eq(activeSlideIndex).addClass('active');

  function setActiveSlide(slideIndex) {
    activeSlideIndex = slideIndex;
    carousel.carousel(activeSlideIndex);
    divLinks.removeClass('active');
    divLinks.eq(activeSlideIndex).addClass('active');
  }

  divLinks.click(function () {
    var slideIndex = parseInt($(this).attr('data-slide-to'));
    setActiveSlide(slideIndex);
  });

  var carouselInterval = setInterval(function () {
    var nextSlideIndex = (activeSlideIndex + 1) % $('.carousel-item').length;
    setActiveSlide(nextSlideIndex);
  }, 3000);
});

window.addEventListener('DOMContentLoaded', event => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function updateActiveNavLink() {
    const currentPos = window.scrollY;

    let activeNavLink = null;

    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;

      if (currentPos >= top && currentPos <= bottom) {
        const sectionId = section.getAttribute('id');
        activeNavLink = document.querySelector(
          `.navbar-nav .nav-link[href="#${sectionId}"]`
        );
      }
    });

    navLinks.forEach(navLink => {
      navLink.classList.remove('active');
    });

    if (activeNavLink) {
      activeNavLink.classList.add('active');
    }
  }

  function onScroll() {
    window.requestAnimationFrame(updateActiveNavLink);
  }

  window.addEventListener('scroll', onScroll);
  updateActiveNavLink();
});
