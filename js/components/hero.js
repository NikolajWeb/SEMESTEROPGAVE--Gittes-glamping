const heroContainer = document.querySelector('.hero');

export const hero = () => {
  if (!heroContainer) return;

  heroContainer.insertAdjacentHTML("beforeend", `
    <div class="burger" id="burger">
      <img src="assets/icons/bars-solid.svg" alt="Burger-menu">
    </div>

    <ul id="nav-links">
      <li>Ophold</li>
      <li>Kontakt</li>
      <li>Aktiviteter</li>
      <li>Min Liste</li>
    </ul>

    <img src="assets/heros/forside.jpg" alt="Forside">
    <div class="hero_text">
      <img src="assets/logo/logo.png" alt="Logo">
      <p>Gittes</p>
      <h1>Glamping</h1>
      <button>Book nu</button>
    </div>
  `);
};

export const initBurgerMenu = () => {
  document.addEventListener('click', (e) => {
    const burger = document.querySelector('#burger');
    const navLinks = document.querySelector('#nav-links');

    if (!burger || !navLinks) return;

    // Klik på burger -> toggle menu
    if (e.target.closest('#burger')) {
      navLinks.classList.toggle('active');
    } 
    // Klik udenfor menuen -> luk menu
    else if (navLinks.classList.contains('active') && !e.target.closest('#nav-links')) {
      navLinks.classList.remove('active');
    }
  });
};
