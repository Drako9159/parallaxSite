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
  lax.addElements(".ultron", {
    scrollY: {
      opacity: [
        [0, 80],
        [0, 1],
        //TODO desaparece el logo
      ],
      translateY: [
        [0, 400],
        [0, 80],
      ],
    },
  });
  lax.addElements(".loki", {
    scrollY: {
      opacity: [
        [40, 120],
        [0, 1],
        //TODO desaparece el logo
      ],
      translateY: [
        [0, 400],
        [0, -80],
      ],
    },
  });
  lax.addElements(".thanos", {
    scrollY: {
      opacity: [
        [80, 160],
        [0, 1],
        //TODO desaparece el logo
      ],
      translateY: [
        [0, 400],
        [0, 80],
      ],
    },
  });
  lax.addElements(".scroll-tip", {
    scrollY: {
      opacity: [
        [0, 600],
        [1, 0],
        //TODO desaparece el logo
      ],
      translateY: [
        [0, 800],
        [-400, 0],
      ],
      "letter-spacing": [
        [0, 600],
        [0, 150],
        {
          cssUnit: "px",
        },
      ],
    },
  });
};
