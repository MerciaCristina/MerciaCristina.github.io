window.scrollTo(0, 0);

const header = document.getElementById("header");

const fixed = header.offsetTop;

document.onscroll = function() {fixedHeader()};

function fixedHeader() {
    if (window.pageYOffset > fixed) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  }