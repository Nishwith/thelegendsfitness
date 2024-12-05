    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navFooter = document.getElementById('nav-footer');
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navFooter.classList.toggle('active');
        if(menuBtn.classList.contains("ri-menu-line")){
            menuBtn.classList.add('ri-close-line');
            menuBtn.classList.remove('ri-menu-line')

        }else{ menuBtn.classList.add('ri-menu-line');
            menuBtn.classList.remove('ri-close-line');}
       
    });
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
    
        // Move the background slower for parallax effect
        const main = document.querySelector("main");
        main.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    
        // Move the section content at a different rate
        const section = document.querySelector("section");
        section.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      });
      const slider = document.getElementById('slider');
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  const offset = -currentIndex * 100; // Move slider to the selected slide
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto-play slider (optional)
setInterval(nextSlide, 5000); // Change slide every 5 seconds
