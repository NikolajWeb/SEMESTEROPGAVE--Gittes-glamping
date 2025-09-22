export function BurgerMenu() {
    const burger = document.getElementById("burger");
    const menu = document.querySelector(".burger-menu");


    // Åbn/luk menu ved klik på burger
    burger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    const links = menu.querySelectorAll("li");
    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}
