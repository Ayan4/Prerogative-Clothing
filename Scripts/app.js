// Landing page anim

const tl = gsap.timeline();

tl.from('.stag-anim', {opacity:0, duration: .8, y: -30, stagger: .2});
tl.from('.upline', {opacity:0, duration: .5, x: -50, ease: "circ.out"}, '-=.6');
tl.from('.downline', {opacity:0, duration: .5, transform: 'translateX(40px)', ease: "circ.out"}, '-=.4');
tl.from('.banner', {scale:1.04, opacity:0, duration:1.75}, '-=1');
tl.from('.text-1, .text-2', {opacity:0, y: -10}, '-=1');
tl.from('.cta', {opacity:0}, '-=.6');
tl.from('.right-arrow', {opacity: 0, duration: .3, x: -20}, '-=.2');
tl.from('.insta-link, .yt-link, .twitter-link', {opacity:0, x: -20, duration: .3, stagger: .05}, '-=1');
tl.from('.scroll-link', {opacity: 0, x: 20, duration: .3}, '-=.9');

// container-1 slide 

gsap.to('.container-1', {scrollTrigger: {
  trigger: '.container-1',
  start: 'top top',
  // markers: true,
  end: '+=900',
  scrub: 1
},
  y: -300,
});


// Rect slide container-2

const tl2 = gsap.timeline({
    scrollTrigger: {

        trigger: '.container-2',
        start: '40px center',
        end: '+=320px' ,
        // markers: true,
        scrub: 4,
    }
});

  tl2.fromTo('.ball', {opacity: 0, scale: .8, y: 50}, {opacity: .6, scale: 1, y: 0, duration: .5}, '-=.5')
  tl2.to('.domino1', { y: -110, stagger: .1}, '-=.7')
  tl2.to('.domino2', { y: -110, stagger: .1}, '-=.65')
  tl2.to('.domino3', { y: -110, stagger: .1}, '-=.6')
  tl2.to('.domino4', { y: 110, stagger: .1}, '-=.6')
  tl2.to('.domino5', { y: 110, stagger: .1}, '-=.65')
  tl2.to('.domino6', { y: 110, stagger: .1}, '-=.7')


// Smooth Scroll

/* let sections = gsap.utils.toArray(".scroll");
// console.log(sections.length);

gsap.to(sections, {
  yPercent: -100 * (sections.length - 1),
  // yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: '.parent-section',
    pin: true,
    pinSpacing: false,
    scrub: .9,
    // scrub: true,
    // markers: true,
  }
}); */

// Navbar visibility animation

const navbar = document.querySelector('nav');
const logo = document.querySelector('.logo');
const user = document.querySelector('.user');
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  
  if(scrolled > 100){
    logo.classList.add('logo-transition');
    user.classList.add('user-transition');
    menu.classList.add('menu-black');
    navbar.style.visibility = 'hidden';
  }else{
    logo.classList.remove('logo-transition');
    user.classList.remove('user-transition');
    menu.classList.remove('menu-black');
    navbar.style.visibility = 'visible';
  }
});

// Image reveal animation container-2

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.container-2',
    // markers: true,
    start: '-100 center',
    end: '+=10px',
  }
}, );

tl3.from('.stag-anim2',{opacity: 0, y: -60, stagger: .15, duration: .8}, '-=2');

tl3.from('.stag-anim3', {opacity: 0, y: 30, stagger: .2, duration: .6}, '-=1.5');

tl3.from('.suits1, .see-more',{y: 50, opacity: 0, duration: 1.8, ease: "expo.out"}, '-=.7');

// coin roll animation container-3

gsap.to('.coin-1, .coin-2, .coin-3', {scrollTrigger: {
  trigger: '.container-3',
  // markers: true,
  start: '60px center', 
  end: '+=1200px',
  scrub: 1
}, x: 150})


// scale image container-3

gsap.to('.intuitive-img', {scrollTrigger: {
  trigger: '.intuitive-img',
  start: '-280px center',
  end: '+=1500px',
  // markers: true,
  scrub: 1
}, scale: 1.2});

gsap.to('.sophesticated-img', {scrollTrigger: {
  trigger: '.sophesticated-img',
  // markers: true,
  start: '-300px center',
  end: '+=1350px',
  scrub: 1
}, scale: 1.2});

// Text slide anim container-3

gsap.from('.designer', {scrollTrigger: {
  trigger: '.designer',
  start: '-150px center',
  // markers: true,
}, x: 50, opacity: 0, ease: "power3.out", duration: 1});

gsap.from('.designer-text', {scrollTrigger: {
  trigger: '.designer-text',
  start: '-180px center',
  // markers: true,
}, x: 50, opacity: 0, ease: "power3.out", duration: 1});

gsap.from('.sop-text-main', {scrollTrigger: {
  trigger: '.sop-text-main',
  start: '-170px center',
  // markers: true,
}, x: -50, opacity: 0, ease: "power3.out", duration: 1});


// text animation in-picture container-3

const tl4 = gsap.timeline({scrollTrigger:{
  trigger: '.intuitive',
  start: '-180px center',
  // markers: true,
}});

tl4.from('.white-bar', {height: 0, ease: "power4.out", duration: .6}); 
tl4.from('.intuitive', {opacity: 0, y: 20, duration: .3}, '-=.2');

const tl5 = gsap.timeline({scrollTrigger: {
  trigger: '.sop-text',
  start: '-175px center',
  // markers: true,
}});

tl5.from('.sop-bar1', {opacity: 0, width: '300px', ease: "power4.out", duration: .6});
tl5.from('.sop-bar2', {width: 0, ease: "power4.out"}, '-=.4');
tl5.from('.sop-text', {opacity: 0, y: -20, ease: "power4.out", duration: .6}, '-=.3');


// image stagger container-5

const tl6 = gsap.timeline({scrollTrigger: {
  trigger: '.tie-div',
  start: '-100px center',
  // markers: true
}});

tl6.from('.tie', {y: 30, opacity: 0, ease: "power4.out"});
tl6.from('.shoe', {y: 30, opacity: 0, ease: "power4.out"}, '-=.3');
tl6.from('.belt', {y: 30, opacity: 0, ease: "power4.out"}, '-=.4');
tl6.from('.tie-bar', {width: 0, ease: "power4.out"}, '-=.7');
tl6.from('.shoe-bar', {width: 0, ease: "power4.out"}, '-=.5');
tl6.from('.belt-bar', {width: 0, ease: "power4.out"}, '-=.35');
tl6.from('.tie-text', {opacity: 0, y: -20, ease: "power4.out"}, '-=.6');
tl6.from('.shoe-text', {opacity: 0, y: -20, ease: "power4.out"}, '-=.3');
tl6.from('.belt-text', {opacity: 0, y: -20, ease: "power4.out"}, '-=.3');


// container-5 coins move

gsap.to('.coin-4, .coin-5, .coin-6, .coin-7, .coin-8', {scrollTrigger: {
  trigger: '.container-5',
  // markers: true,
  start: '-540px center', 
  end: '+=1400px',
  scrub: 1
}, x: 200})


// Footer input text slide

const input = document.querySelector('.email');
const inputText = document.querySelector('.input-text');

window.addEventListener('click', (event) => {

  if(event.target === input || input.value.length > 0){
    inputText.style.top = '255px';
  }else{
    inputText.style.top = '272px';
  }
});

// Footer picture zoom

gsap.to('.sand-bg-bottom', {scrollTrigger: {
  trigger: '.sand-bg-bottom',
  start: '-100px center',
  end: '+=300px',
  // markers: true,
}, scale: 1.1 , duration: 4, ease: "expo.out"});

// Footer text appear

gsap.from('.footer-anim', {scrollTrigger: {
  trigger: '.sand-bg-bottom',
  start: '-70px center',
  // markers: true,
}, opacity:0, duration: .8, y: 30, stagger: .1});

// footer 2 up arrow

gsap.from('.up-arrow', {scrollTrigger: {
  trigger: '.up-arrow',
  start: '-90px 595px',
  // markers: true
}, y: 20, opacity: 0, delay: .5});



