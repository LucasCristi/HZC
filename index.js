const botaoMenu = document.querySelector(".cabecalho__menu");
const menu = document.querySelector(".menu-lateral");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-lateral--ativo");
});

// const optionsMenu = document.querySelectorAll(".menu-lateral__link");

// for (let i = 0; i < optionsMenu.length; i++) {
//   optionsMenu[i].onclick = function () {
//     for (let j = 0; j < optionsMenu.length; j++) {
//       optionsMenu[j].className = `menu-lateral__link menu-lateral__link`
//     }
//     optionsMenu[i].classList.toggle("menu-lateral__link--ativo");
//   };
// }
