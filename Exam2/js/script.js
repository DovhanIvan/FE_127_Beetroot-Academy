let element = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 55) {
    element.classList.add("header__sticky");
  } else {
    element.classList.remove("header__sticky");
  }
});

let anchor = document.querySelectorAll('a[href^="#"]');
anchor.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = 50;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

const mainSlider = new Swiper('.main-slider', {
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    navigation: {
    nextEl: '.swiper-button-next',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const newsSlider = new Swiper('.news-slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.slider-news-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    968: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },

  
  navigation: {
    nextEl: '.slider-news-button-next',
    prevEl: '.slider-news-button-prev',
  },
});

Fancybox.bind("[data-fancybox]", {
    groupAttr: true
  });
  
 
  $('.items').readmore({
    speed: 75,
    collapsedHeight: 180,
    moreLink: '<a class = "more" href="#">See more</a>',
    lessLink: '<a class = "more" href="#">Close</a>',
  });


function initMap() {
  const myLatLng = { lat: 40.6686, lng: -73.8999}
  const map = new google.maps.Map(document.getElementById("map"),{
    zoom: 13.5,
    center: myLatLng,
    mapId: '2f084b4895741534',
  });

  new google.maps.Marker({
    position: { lat: 40.6781, lng: -73.8981},
    map: map,
    title: "Monticello",
    icon:{
      url: "img/map_pin.svg",
      scaledSize: new google.maps.Size(100,100),
    }
  })
};
Fancybox.bind("[data-fancybox]", {
  
});

let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav ul.header-nav a');
window.onscroll = () => {
  section.forEach(sec =>{
     let top = window.scrollY;
  let offset = sec.offsetTop-150;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');
  if (top > offset && top < offset + height) {
    navLink.forEach(links => {
      links.classList.remove('active');
      document.querySelector('header nav ul.header-nav a[href*=' + id + ']').classList.add('active');
    });
  }})
}
$('.items').readmore({
  speed: 75,
  collapsedHeight: 430,
  moreLink: '<a class="more" href="#">See more</a>',
  lessLink: '<a class="more" href="#">Close</a>',
});

$(document).ready(function () {
  $(".contacts-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
    }
  });
});

function submitForm() {
  if ($(".contacts-form").valid()) {
    alert("Form submitted successfully!");
  }
}
let burger = document.querySelector('.burger');
      let header = document.querySelector('.header_burger');
      burger.addEventListener('click', function () {
        burger.classList.toggle('open');
        header.classList.toggle('open');
      });
