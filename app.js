const hello = document.querySelector(".kelebihan h1");
const seeYa = document.querySelector(".mid .jelas h1");
const lorem = document.querySelector(".mid .jelas p");

const seeYachan = (elem, hei) => {
  let elemPost = elem.getBoundingClientRect().top;
  if (elemPost < window.innerHeight / hei) {
    elem.classList.add("buram");
  } else if (elemPost > window.innerHeight) elem.classList.remove("buram");
};

setTimeout(() => {
  hello.classList.add("buram");
}, 1500);

let tanta;
const scrollEvent = () => {
  seeYachan(seeYa, 1.69);
  seeYachan(lorem, 1.7);
};
window.addEventListener("scroll", scrollEvent);
