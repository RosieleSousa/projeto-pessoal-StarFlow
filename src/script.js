document.addEventListener("DOMContentLoaded", () => {
    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach(card => {
        card.addEventListener("click", () => {
         "data-link"
            const link = card.getAttribute("data-link");
            window.location.assign(link);
        });
    });

    const leftButton = document.querySelector(".carousel-button.left");
    const rightButton = document.querySelector(".carousel-button.right");
    const movieList = document.querySelector(".movies-list");

    leftButton.addEventListener("click", () => {
        movieList.scrollBy({
            left: -220,
            behavior: "smooth"
        });
    });

    rightButton.addEventListener("click", () => {
        movieList.scrollBy({
            left: 220,
            behavior: "smooth"
        });
    });

    const leftButton2 = document.querySelector(".carousel-button.left");
    const rightButton2 = document.querySelector(".carousel-button.right");
    const movieList2 = document.querySelector(".movie-list");

    leftButton2.addEventListener("click", () => {
        movieList2.scrollBy({
            left: -220,
            behavior: "smooth"
        });
    });

    rightButton2.addEventListener("click", () => {
        movieList2.scrollBy({
            left: 220,
            behavior: "smooth"
        });
    });
});
