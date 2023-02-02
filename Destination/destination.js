const planetLis = document.querySelectorAll(".planetLi");
let planetImg = document.querySelector(".planetImg");
let planetHeading = document.querySelector(".planetHeading");
let description = document.querySelector(".description");
let distance = document.querySelector(".distance");
let travel = document.querySelector(".travel");

refreshNav(1);

const applyPlanetData = (from) => {
  planetImg.src = from.images.png;
  planetHeading.innerText = from.name;
  description.innerText = from.description;
  distance.innerText = from.distance;
  travel.innerText = from.travel;
};

planetLis[0].classList.add("selected");
applyPlanetData(data.destinations[0]);

for (let planetLi of planetLis) {
  planetLi.addEventListener("click", (e) => {
    for (let planet of planetLis) {
      if (planet.classList.contains("selected")) {
        planet.classList.remove("selected");
      }
    }
    planetLi.classList.add("selected");
    for (let destination of data.destinations) {
      if (
        destination.name.toLocaleLowerCase() ===
        planetLi.classList[1].toLocaleLowerCase()
      ) {
        applyPlanetData(destination);
      }
    }
  });
}
