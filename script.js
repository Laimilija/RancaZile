let menuIcon = document.querySelector('#menu-icon');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.nav-right');

if(menuIcon && navLeft && navRight) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
         navLeft.classList.toggle('show');
        navRight.classList.toggle('show');
    };
    }

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove ('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add
                ('active')
            })
        }
    })
}

  document.querySelectorAll('.featurespage').forEach(section => {
    const images = section.dataset.images.split(',');
    let currentIndex = 0;

    const imgElement = section.querySelector('.feature-image');
    const leftArrow = section.querySelector('.left-arrow');
    const rightArrow = section.querySelector('.right-arrow');

    function showImage(index) {
      imgElement.src = images[index].trim();
    }

    leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    showImage(currentIndex);
  });

 document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 3000); // Change slide seconds
});
