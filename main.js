
    const select = document.querySelector(".filter");

select.addEventListener("change", function (e) {
    console.log("Selector function fired!")
    const chosen_borough = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_borough}`);

    currently_visible.forEach(function (borough) {
        borough.classList.remove("active");
    });

    make_visible.forEach(function (borough) {
        borough.classList.add("active");
    });
});