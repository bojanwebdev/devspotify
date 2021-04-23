// DOM ELements
const navToggler = document.getElementById('sidebar-toggler');
const sidebar = document.querySelector('.sidebar');
const sidebarNav = document.querySelector('.sidebar-nav');

// Varibales
const songs = getSongs();

// Functions
const toggleNav = e => {
  e.preventDefault();

  let toggler = navToggler.querySelector('i');
  sidebar.classList.toggle('extend');

  toggler.className = toggler.className.includes('off') ? toggler.className.replace('off', 'on') : toggler.className.replace('on', 'off');
}

const toggleTab = e => {
  e.preventDefault();
  
  if(e.target.tagName === 'I' || e.target.tagName === 'A' || e.target.tagName === 'SPAN') {
    let url,
        links = document.querySelectorAll(".section, .sidebar-nav li");

    [].forEach.call(links, function(el) {
      el.classList.remove('active');
    });

    if(e.target.tagName === 'I' || e.target.tagName === 'SPAN') {
      url = e.target.parentElement.getAttribute('data-tab');
      e.target.parentElement.parentElement.classList.add('active');
    } else {
      url = e.target.getAttribute('data-tab');
      e.target.parentElement.classList.add('active');
    }

    document.getElementById(url).classList.add('active');
  }
}

// Event Listeners
navToggler.addEventListener('click', toggleNav);

sidebarNav.addEventListener('click', toggleTab);