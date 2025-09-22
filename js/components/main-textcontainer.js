const mainTextContainer = document.querySelector('.main_textContainer');

export const mainTextTmpl = () => {
  return `
    <div class="main_text">
      <h2>Kom og prøv glamping hos Gitte!</h2>
      <p>
        Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. 
        Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. 
        Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyrer. 
        Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. 
        Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter.
      </p>
      <img src="assets/heros/gitte.jpg" alt="">
      <button><a href="#">Se vores ophold</a></button>
    </div>
  `;
}

export const mainText = () => {
  if (mainTextContainer) {
    mainTextContainer.insertAdjacentHTML("beforeend", mainTextTmpl());
  }
}
