import { fetchProducts } from "../fetch.js";

const userContainer = document.querySelector(".user_container");

// Template til én user
export const userTmpl = (user) => {
  return `
    <div class="users_info">
      <h1 class="navn">${user.name}, ${user.age} år</h1>
      <h2>Har været på ${user.stay}</h2>
      <p>${user.review}</p>
    </div>
  `;
};

// Render alle users fra API
export const renderUsers = async () => {
  if (!userContainer) return;

  const users = await fetchProducts();

  if (users.length > 0) {
    // overskrift
    userContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="user_headline">
        <h2>Vores gæster udtaler</h2>
      </div>
    `
    );

    // loop gennem users
    users.forEach((user) => {
      userContainer.insertAdjacentHTML("beforeend", userTmpl(user));
    });
  } else {
    userContainer.insertAdjacentHTML(
      "beforeend",
      `<p>Ingen anmeldelser tilgængelige lige nu.</p>`
    );
  }
};
