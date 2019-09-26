anime({
  targets: ".square",
  opacity: [0,1],
  duration: 600,
  scale: [0, 1],
  easing: "easeOutExpo",
  delay: function(el, i) {
      return 40*i;
    }
});
