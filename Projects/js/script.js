// toggle menu mobile view
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide')
})

//modal
var modal = document.getElementById("myModal");

// open modal
var btn = document.getElementById("myBtn");

// close span
var span = document.getElementsByClassName("close")[0];

// button click
btn.onclick = function () {
    modal.style.display = "block";
}
// btn.onclick = function () {
//     modal.style.display = "block";
// }
// span close click
span.onclick = function () {
    modal.style.display = "none";
}
// window click
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}