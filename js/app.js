// DOM ELements
const navToggler = document.getElementById('sidebar-toggler');
const sidebar = document.querySelector('.sidebar');

// Varibales
const songs = getSongs();
console.log(songs);

// Functions

// Event Listeners
navToggler.addEventListener('click', e => {
  e.preventDefault();

  let toggler = navToggler.querySelector('i');
  sidebar.classList.toggle('extend');

  toggler.className = toggler.className.includes('off') ? toggler.className.replace('off', 'on') : toggler.className.replace('on', 'off');
});