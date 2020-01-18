const sections = [
  document.querySelector(`#home`),
  document.querySelector(`#about`),
  document.querySelector(`#skills`),
  // document.querySelector(`#works`),
  document.querySelector(`#contact`)
];

setTimeout(
  window.addEventListener(`scroll`, function () {
    for (let section of sections) {
      if (window.pageYOffset + (window.innerHeight * 3) / 3.5 > section.offsetTop) section.setAttribute(`style`, `opacity:1;transition-duration:1s`);
      else section.setAttribute(`style`, `opacity:0;transition-duration:1s`);
    }
  }),
  500
);