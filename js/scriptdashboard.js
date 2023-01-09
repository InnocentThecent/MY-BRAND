const header = document.querySelector(".sidenav");
window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.getElementById('menu-icon');
let navlist1 = document.querySelector('.navList');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist1.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist1.classList.remove('open');
};

