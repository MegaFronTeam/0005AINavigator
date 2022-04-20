var monitorAnimations = function() {

  ScrollReveal().reveal(".monitor__line-content", {
    duration: 0,
    opacity: 1,
    distance: "0px",
    cleanup: true,
    afterReveal: function(el) {
      $(el).addClass("animate");
    }
  });

  ScrollReveal().reveal(".monitor__column-wrapper", {
    duration: 0,
    opacity: 1,
    distance: "0px",
    cleanup: true,
    afterReveal: function(el) {
      $(el).addClass("animate");
    }
  });

  ScrollReveal().reveal(".monitor__circle-graph-filler", {
    duration: 0,
    opacity: 1,
    distance: "0px",
    cleanup: true,
    afterReveal: function(el) {
      $(el).addClass("animate");
    }
  });
  
  ScrollReveal().reveal('.monitor__btn', {
  distance: '200px',
  duration: '1000',
  delay: '2000',
  easing: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
  opacity: 0,
  origin: 'bottom',
  viewFactor: 1,
  scale: '1',
  mobile: false,
  reset: false
});

}

monitorAnimations();
