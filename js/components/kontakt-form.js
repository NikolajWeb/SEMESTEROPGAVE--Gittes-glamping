const kontaktContainer = document.querySelector('.kontakt-container')

export const kontaktTmpl = () => {
    return `
    <h1>Vil du booke et ophold? Eller har du blot et spørgsmål?</h1>
    <p>
      Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os på at svare 
      på henvendelser indenfor 24 timer, men op til ferier kan der være travlt, 
      og svartiden kan derfor være op til 48 timer
    </p>
    <form class="kontakt-form">
      <label for="navn">Navn</label>
      <input type="text" id="navn" name="navn" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>

      <label for="emne">Hvad drejer henvendelsen sig om?</label>
      <select id="emne" name="emne" required>
        <option value="" disabled selected></option>
        <option value="booking">Booking</option>
        <option value="spørgsmål">Spørgsmål</option>
        <option value="andet">Andet</option>
      </select>

      <label for="besked">Besked (Skriv dato’er, hvis det drejer sig om en booking)</label>
      <textarea id="besked" name="besked" required></textarea>
      <p id="successMessage" class="form-success" style="display:none;">
      ✅ Din besked er sendt!
        </p>

      <button type="submit" class="submit-btn">INDSEND</button>
    </form>
  `
}

export const kontakt = () => {
    if (kontaktContainer) {
        // Tilføjer kontakt-formularens HTML til containeren
        kontaktContainer.insertAdjacentHTML("beforeend", kontaktTmpl())

        // Finder formularen og succes-beskeden
        const form = kontaktContainer.querySelector(".kontakt-form")
        const successMessage = kontaktContainer.querySelector("#successMessage")

        // Tilføjer en eventlistener på formularens "submit"-hændelse
        form.addEventListener("submit", (e) => {
            e.preventDefault() // Forhindrer siden i at reloade ved submit

            // Viser succes-beskeden
            successMessage.style.display = "block"

            // Skjuler beskeden og nulstiller formularen efter 30 sekunder
            setTimeout(() => {
                successMessage.style.display = "none"
                form.reset()
            }, 30000)
        })
    }
}

/* Kunne godt REGX validere det */