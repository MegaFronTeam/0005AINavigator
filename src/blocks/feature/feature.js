ScrollReveal().reveal(".feature__animation-item", {
  duration: 0,
  opacity: 1,
  distance: "0px",
  delay: 1000,
  cleanup: true,
  afterReveal: function(el) {
    $(el).addClass("animate");
  }
});
