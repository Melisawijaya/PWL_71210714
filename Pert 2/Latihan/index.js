import Person from "./person.js"

const charles = Person("Charles", 30, true, "https://picsum.photos/seed/picsum/200");
const mary = Person("Mary", 23, false, "https://picsum.photos/200?grayscale");
const jane = Person("Jane", 20, false, "https://picsum.photos/200");

jane.addAge(15); 
charles.setAge(80);

const charlesImg = document.querySelector("#charles .img");
const charlesInfo = document.querySelector("#charles .info");

charlesImg.src = charles.infoPerson.avatar;
charlesInfo.innerHTML = charles.getInfo;

const maryImg = document.querySelector("#mary .img");
const maryInfo = document.querySelector("#mary .info");
const janeImg = document.querySelector("#jane .img");
const janeInfo = document.querySelector("#jane .info");

maryImg.src = mary.infoPerson.avatar;
maryInfo.innerHTML = mary.getInfo;
janeImg.src = jane.infoPerson.avatar;
janeInfo.innerHTML = jane.getInfo;

const charlesJob = { job: "Programmer" }; 

const charlesJobInfo = { ...charles, ...charlesJob };

const { infoPerson, job } = charlesJobInfo;

const charlesJobInfoSelector  = document.querySelector("#charles .jobInfo");

charlesJobInfoSelector.innerHTML = `${infoPerson.fullName} is a ${job}`;