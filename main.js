/* abre e fecha o menu quando clicar no ícone: humburguer e x */
const nav = document.querySelector('.menu');
const menu__icon = document.querySelectorAll('.menu__icon');

for(const element of menu__icon){
  element.addEventListener('click', function() {
    nav.classList.toggle('menu__show');
  }, {passive: true})

}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('.menu__link');
for(const link of links){
  link.addEventListener('click', function() {
    nav.classList.remove('menu__show');
  }, {passive: true})
}

/* mudar o header da página quando der scroll*/

const header = document.querySelector('.header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight){
   header.classList.add('scroll');
  }else{
    header.classList.remove('scroll');
  }
}, {passive: true});

/* Depoimentos slider carrossel  swiper */

let swiper = new Swiper('.swiper1', {
  
  slidesPerView: 1,
  pagination:{
    el:'.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true

  
});

/* Galeria slide swiper*/

let swiper1 = new Swiper('.swiper2',{

  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints:{
    767:{
      slidesPerView: 2,
      setWrapperSize: true
    },
    992:{
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})

