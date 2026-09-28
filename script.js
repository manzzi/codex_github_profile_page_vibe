const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.site-header');

menuButton.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.textContent = open ? 'CLOSE' : 'MENU';
});

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'MENU';
  });
});
