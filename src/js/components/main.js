console.log('I want to work in your team!');


import gsap from "gsap";


window.addEventListener('DOMContentLoaded', function(){
  
  // Анимация линий и окружностей
  const vertical = document.querySelector('.hero-list__line');
  const horizontal = document.querySelector('.hero-list__left'); 
  const nameBlock = document.querySelector('.name-block');    
  const expertiza = document.querySelector('.about__subheading');  
  const about = document.querySelector('.about__text');
  const innerCircle = document.querySelector('.right-box__circle_circle1');
  const outCircle = document.querySelector('.right-box__circle_circle2');
  const lineOne = document.querySelector('.right-box__hline_line1');
  const lineTwo = document.querySelector('.right-box__hline_line2');
  const lineThree = document.querySelector('.right-box__hline_line3');

  
  var tl = gsap.timeline({defaults: {opacity:0}, delay:5}); 

  tl.from(vertical, {duration:2.4, delay: 0.5, ease: "power3.in", height:0})
    .from(horizontal, {duration:3, ease: "power3.in", width:0}, "<-0.1")
    .from(nameBlock, {duration:3, ease: "expo.out", x:100}, "-=1");


  var tl2 = gsap.timeline({defaults: {opacity:0}, paused:true}); 

  tl2.from(expertiza, {duration:3, ease: "expo.out", x:-100}, "+=1")
    .from(about, {duration:1.5, ease: "power1.in", x:100}, "<-0.5")
    .from(innerCircle, {duration:1.7, delay:1, ease: "power1.in", rotate:'-90'}, "<-0.2")
    .from(outCircle, {duration:3, ease: "expo.out", rotate:'270'}, "<-0.2")
    .from(lineOne, {duration:1.6, ease: "expo.out", width:0})
    .from(lineTwo, {duration:2, ease: "expo.out", width:0}, "<-0.1")
    .from(lineThree, {duration:2, ease: "expo.out", width:0}, "<-0.1");

    window.onscroll = function() {
      var scrolled = window.pageYOffset;
      if(scrolled >= 300) {
        tl2.play();
      }
    };

  
  const introBox = document.querySelector('.intro');
  const introLogo = document.querySelector('.intro__img');
  const introtext = document.querySelector('.intro__text');

  var tl3 = gsap.timeline(); 

  // Определим размер доступного размера экрана устройства:

  const availableScreenWidth = window.screen.availWidth;

  if(availableScreenWidth >= '1024') {
    tl3.to(introLogo, {duration:3.8, scale:(7)})
    .from(introtext, {duration:5, opacity:0, y:800, ease: "power3.in"}, "<-0.6")
    .to(introBox, {duration:1.4, delay:1.5, opacity:0, display: 'none', ease: "power1.out"});
  } 
 
    
    // Создаём плавность анимации появления попапа
  // Сначала объявим функцию FadeIn

  const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      el.style.opacity = 1;
    }, 10);
  }

  // Объявим функцию FadeOut

  const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
      el.style.display = 'none';
  }, timeout);
  };

  // Попап Оставить заявку
  var popup = document.querySelector('.black-cont')
      ,open = document.querySelectorAll('.js-open')
      ,close = document.querySelector('.cta-box__close');
   
  open.forEach(function(everyOpen){
    everyOpen.addEventListener('click', function(){ 
      fadeIn(popup, 400, 'flex');      
  
      // Запрет прокрутки во время открытого окна        
      document.querySelector('body').classList.add('closed');  
  
        // Закрытие попапа при клике на пустую область
      document.querySelector('.black-cont').addEventListener('click', function(event){
        if(this == event.target) {
          fadeOut(popup, 400);
  
          document.querySelector('body').classList.remove('closed');
        }
      });
  
      close.addEventListener('click', function(){       
          fadeOut(popup, 400); 
  
          document.querySelector('body').classList.remove('closed');       
      });
      
    }); 
  });

  

  // Маскирование телефона

   function maskPhone(selector, masked = '+7 (___) ___-__-__') {
    const elems = document.querySelectorAll(selector);
  
    function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
        def = template.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
      console.log(template);
      let i = 0,
        newValue = template.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = newValue.indexOf("_");
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }
      if (event.type === "blur" && this.value.length < 5) {
        this.value = "";
      }
  
    }
  
    for (const elem of elems) {
      elem.addEventListener("input", mask);
      elem.addEventListener("focus", mask);
      elem.addEventListener("blur", mask);
    }
    
  }

  maskPhone('.input-phone', '+7 (___) ___-__-__');
 

});