const footerContainer = document.querySelector('.footer_container')

export const footerTmpl = () => {
  return `
    <div class="SoMe-img">
      <img src="assets/icons/square-facebook.svg" alt="">
      <img src="assets/icons/square-instagram.svg" alt="">
    </div>
    <div class="gites-glamping">
      <img src="assets/logo/logo.png" alt="">
      <p>Gittes Glamping</p>
    </div>
  `
}

export const footer = () => {
  if (footerContainer) {
    footerContainer.insertAdjacentHTML("beforeend", footerTmpl())
  }
}
