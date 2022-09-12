window.onload = function () {
  window.addEventListener("scroll", (e) => {
    console.log(window.scrollY);
  });
  lax.init();
  //TODO Inicializa librería
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });
  //TODO Monitoriea el scroll
  lax.addElements(".logo", {
    scrollY: {
      scale: [
        [0, 80],
        [1, 3],
      ],
      //TODO escala el logo
      opacity: [
        [0, 70],
        [1, 0],
        //TODO desaparece el logo
      ],
      translateY: [
        [0, 80],
        [0, 200],
      ],
    },
  });
};
