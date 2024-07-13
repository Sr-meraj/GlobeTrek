document.querySelector('.navbar-toggler').onclick = function() {
  var div = document.querySelector('#navbarSupportedContent');
  if (div.classList.contains("show")) {
      div.classList.remove('show')
  } else {
    div.classList.add('show')
  }
};