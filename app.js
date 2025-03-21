const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function searchFunction() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let items = document.querySelectorAll("#recipeList li");

    items.forEach(item => {
        if (item.innerText.toLowerCase().includes(input)) {
            item.style.display = "block"; // Show matching items
        } else {
            item.style.display = "none"; // Hide non-matching items
        }
    });
}