const heroContainer = document.querySelector('.kontaktHero');

export const kontaktHero = () => {
  if (!heroContainer) return;

  heroContainer.insertAdjacentHTML("beforeend", `
    <div class="burger" id="burger">
      <img src="assets/icons/bars-solid.svg" alt="Burger-menu">
    </div>
    
    <div class="logo" id="logo">
      <a href="index.html"><img src="assets/logo/logo.png" class="logo"></a>
    </div>
    

    <ul id="nav-links">
      <li><a href="kontakt.html">1</a></li>
      <li><a href="kontakt.html">Kontakt</a></li>
      <li><a href="kontakt.html">3</a></li>
      <li><a href="kontakt.html">4</a></li>
    </ul>

    <img src="assets/heros/kontakt.jpg" alt="Forside">
    <div class="hero_text">
      <h1>Kontakt Gitte</h1>
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
