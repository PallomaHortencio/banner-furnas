function init() {
  var tl1 = anime 
    .timeline({
      easing: 'easeOutExpo',
      loop: false,
    })
    .add({
      targets: '.bg',
      opacity: [0, 1]
    })
     .add({
      targets: '.txt1',
      opacity: [0, 1],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
      duration: 500
    })
   .add({
      targets: '.logo',
      opacity: [0, 1]
  }, '-=600')
}