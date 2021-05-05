
// creating the function to show the snakbar

function showSnakbar() {
    // selecting the element.
    const snakbar = document.querySelector(".snakbar");
    // adding the show class to the div.
    snakbar.classList.add("show");
    // removing the show class after 3s of function trigered.
    setTimeout( () => snakbar.classList.remove("show"),
    3000
    );
};