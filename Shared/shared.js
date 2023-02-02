const hamburger = document.querySelector(".hamburgerContainer");
const navItemsMobile = document.querySelector(".navItemsMobile");
const backdrop = document.querySelector(".backdrop");
const navItemDeskAll = document.querySelectorAll('.navItemDesk');

let refreshNav = (Num) => {
  for(let navItem of navItemDeskAll) {
    if(navItem.classList.contains('navSelected')){
      navItem.classList.remove('navSelected');
    }
  }
  navItemDeskAll[Num].classList.add('navSelected')
}

refreshNav(0);


window.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("hamburger") ||
    e.target.classList.contains("hamburgerContainer")
  ) {
    backdrop.classList.add("show");
  }
  else if (e.target === backdrop) {
    backdrop.classList.remove("show");
  }
 
});


