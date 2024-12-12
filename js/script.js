
// TOGGLE MENU
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-menu-button');
const toggleMenuLinks = document.querySelectorAll('.toggle-menu a');
toggleMenuButton.onclick = function () {
  if (toggleMenu.getAttribute('data-menustate') === 'closed') {
    // if closed, open it    
    toggleMenu.setAttribute('data-menustate', 'open');
  } else {
    // else, close it
    toggleMenu.setAttribute('data-menustate', 'closed');
  }
};
// CLOSE THE MENU WHEN A USER CLICKS ON ANY LINK
toggleMenuLinks.forEach((el) => {
  el.onclick = () => {
    toggleMenu.setAttribute('data-menustate', 'closed');
  }
});




// INSTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {

  // LOOP THROUGH ALL ENTRIES

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.setAttribute("data-viewstate", "active");
    } else {
      entry.target.setAttribute("data-viewstate", "innactive");
    };

  });

});

const mytargets = document.querySelectorAll('.observe-me');
mytargets.forEach((el) => {
  myobserver.observe(el)

});

// CAROUSEL

const delay = 6000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function () {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function () {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function () {
  changeSlide(false);
  restart();
});

// HOVER GALLERY CARD

