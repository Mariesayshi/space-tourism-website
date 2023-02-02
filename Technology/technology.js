const techBtns = document.querySelectorAll('.techBtn');
const techName = document.querySelector('.techName');
const description = document.querySelector('.description');
const techImgMob = document.querySelector('.techImgMob');
const techImgDesk = document.querySelector('.techImgDesk');

const applyTechData = (from) => { 
    techName.innerText = from.name;
    description.innerText = from.description;
    techImgMob.src = from.images.landscape;
    techImgDesk.src = from.images.portrait;
}

refreshNav(3);

applyTechData(data.technology[0]);
techBtns[0].classList.add('selected');

for(let techBtn of techBtns) { 
    techBtn.addEventListener('click', (e) => { 
        for(let btn of techBtns){
            if(btn.classList.contains('selected')){
                btn.classList.remove('selected')
            }
        }
        techBtn.classList.add('selected');
        let techIndex = Array.from(techBtns).indexOf(techBtn);
        applyTechData(data.technology[`${techIndex}`])
    })
}

