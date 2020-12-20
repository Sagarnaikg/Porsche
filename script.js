const logo = document.getElementsByClassName("logo");
const menuIcon = document.getElementsByClassName("menu-icon");
const slider = document.getElementsByClassName("slider");
const hero = document.getElementsByClassName("hero");
const heroText = document.getElementsByClassName("hero-text");
const heroImg = document.getElementsByClassName("hero-img");

const t1 = new TimelineMax();

t1.fromTo(hero, 1, { width: "100%" }, { width: "80%" })
  .fromTo(
    heroImg,
    1.3,
    {
      left: "0%",
      transform: "scale(1.5)",
    },
    { left: "30%", transform: "scale(1)" }
  )
  .fromTo(
    heroText,
    1,
    {
      x: "50%",
      opacity: "0",
    },
    {
      x: "0%",
      opacity: "1",
    },
    "-=1"
  )
  .fromTo(slider, 1, { x: "-100%" }, { x: "0%" }, "-=0.7");
