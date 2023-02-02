const dotBtns = document.querySelectorAll(".dotBtn");
let role = document.querySelector(".role");
let memberName = document.querySelector(".name");
let bio = document.querySelector(".bio");
let crewMemberImg = document.querySelector(".crewMemberImg");

const applyCrewData = (from) => {
  role.innerText = from.role;
  memberName.innerText = from.name;
  bio.innerText = from.bio;
  crewMemberImg.src = from.images.png;
};

refreshNav(2);
applyCrewData(data.crew[0]);
dotBtns[0].classList.add("dotBtnActive");

for (let dotBtn of dotBtns) {
  dotBtn.addEventListener("click", (e) => {
    clearInterval(intervalId);

    for (let btn of dotBtns) {
      if (btn.classList.contains("dotBtnActive")) {
        btn.classList.remove("dotBtnActive");
      }
    }
    dotBtn.classList.add("dotBtnActive");
    let btnIndex = Array.from(dotBtns).indexOf(dotBtn);
    renewIndex = btnIndex;
    if (btnIndex === 3) {
      renewIndex = 0;
    }
    intervalId = setInterval(changeBtn, 2000);

    let memberIndex = Array.from(dotBtns).indexOf(dotBtn);
    let memberData = data.crew[`${memberIndex}`];
    applyCrewData(memberData);
  });
}
let renewIndex = 0;

let changeBtn = () => {
  if (dotBtns[dotBtns.length - 1].classList.contains("dotBtnActive")) {
    dotBtns[dotBtns.length - 1].classList.remove("dotBtnActive");
  }

  for (let i = renewIndex; i < dotBtns.length; i++) {
    if (dotBtns[i].classList.contains("dotBtnActive")) {
      dotBtns[i].classList.remove("dotBtnActive");
    } else {
      dotBtns[i].classList.add("dotBtnActive");
      applyCrewData(data.crew[i]);
      renewIndex = i;
      if (i === 3) {
        renewIndex = 0;
      }
      break;
    }
  }
};

let intervalId = setInterval(changeBtn, 2000);
