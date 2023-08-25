let sectionPrice = document.querySelector(".our-price");
let percentSpans = document.querySelectorAll(".percent span");

//Price
window.onscroll = function () {
    if (window.scrollY >= sectionPrice.offsetTop) {
        console.log("hoda");
        percentSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};
// =================statsContainer==================================
// let statsContainer = document.querySelector(".stats");
// let spansStats = document.querySelectorAll(" .conatainer-stats .box  span");
// let started = false; // Function Started ? No;
// window.onscroll = function () {
//     if (window.scrollY >= statsContainer.offsetTop) {
//         if (!started) {
//             spansStats.forEach((num) => startCount(num));
//         }
//         started = true;
//     }
// };

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
