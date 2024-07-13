document.querySelector('.navbar-toggler').onclick = function() {
  var div = document.querySelector('#navbarSupportedContent');
  if (div.classList.contains("show")) {
      div.classList.remove('show')
  } else {
    div.classList.add('show')
  }
};


document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggle = document.getElementById('navbarDropdown');
  const dropdownMenu = dropdownToggle.nextElementSibling; // Select the <ul> element

  dropdownToggle.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Toggle the 'show' class on the dropdown menu
    dropdownMenu.classList.toggle('show');
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', function (event) {
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
});
