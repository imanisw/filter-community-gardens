main.js 
    const select = document.querySelector(".filter");

select.addEventListener("change", function (e) {
    const chosen_borough = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_food}`);

    currently_visible.forEach(function (Borough) {
        food.classList.remove("active");
    });

    make_visible.forEach(function (food) {
        food.classList.add("active");
    });
});