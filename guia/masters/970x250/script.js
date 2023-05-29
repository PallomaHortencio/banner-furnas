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
      targets: '.txt1',
      opacity: [1, 0],
    }, '+=1200')
    .add({
      targets: '.elem1',
      opacity: [0, 1],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150)
    }, '-=500')
    .add({
      targets: '.txt2',
      opacity: [0, 1],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
      duration: 500
    }, '-=1000')
    .add({
    targets: '.txt2',
      opacity: [1, 0],
    }, '+=1300')
    .add({
      targets: '.elem2',
      opacity: [0, 1],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150)
    }, '-=500')
    .add({
      targets: '.txt3',
      opacity: [0, 1],
      easing: 'spring(1, 50, 10, 0)',
      delay: anime.stagger(150),
      duration: 500
    }, '-=1200')
    .add({
      targets: '.logo',
      opacity: [0, 1]
  }, '-=400')
}