//jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
//eslint-env browser/
//eslint 'no-console':0/


// Start filter
var filterBtns = document.querySelectorAll(".filter li button");
var items = document.querySelectorAll(".gallerij li");
var filterSelected = "";
var itemsHidden;

filterBtns.forEach(function (filterBtn) {
    filterBtn.addEventListener("click", function (e) {
        // Filter knop active
        filterBtns.forEach(function (item) {
            item.parentNode.classList.remove("active");
        });
        this.parentNode.classList.add("active");

        // reset
        items.forEach(function (item) {
            item.classList.remove("hidden");
            setTimeout(function () {
                item.classList.add("shown");
            }, 700);
        });
        filterSelected = this.getAttribute("data-filter");

        // verberg de rest van de items
        if (filterSelected != "alles" && filterSelected !== "") {
            itemsHidden = document.querySelectorAll(
                ".gallerij li:not([data-filter='" + filterSelected + "'])"
            );
            itemsHidden.forEach(function (item) {
                item.classList.add("hidden");
                setTimeout(function () {
                    item.classList.remove("shown");
                }, 700);
            });
        } else {
            items.forEach(function (item) {
                item.classList.remove("hidden");
                setTimeout(function () {
                    item.classList.add("shown");
                }, 700);
            });
        }
    });
});
// eind filter


// BRON: https://codepen.io/saheeranas/pen/zepyyG //
