let searchButton = document.querySelector(
    ".header .header-right .search-container .search-button"
);
let searchPopup = document.querySelector(
    ".header .header-right .search-container .search-popup"
);

searchButton.addEventListener("click", function () {
    searchPopup.classList.toggle("active");
});

document.addEventListener("click", function (event) {
    if (
        event.target !== searchButton &&
        !searchButton.contains(event.target) &&
        event.target !== searchPopup &&
        !searchPopup.contains(event.target)
    ) {
        searchPopup.classList.remove("active");
    }
});

let sidebarSubMenu = document.querySelectorAll(
    ".sidebar-wrapper .sidebar .sidebar-menu li .sidebar-sub-menu"
);

for (let i = 0; i < sidebarSubMenu.length; i++) {
    sidebarSubMenu[i].previousElementSibling.addEventListener(
        "click",
        function () {
            sidebarSubMenu[i].classList.toggle("active");
        }
    );
}
