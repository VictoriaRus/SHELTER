"use strict"

const PETS__DB = [
  {
    id: 0,
    name: 'Katrine',
    breed: 'Cat - British Shorthair',
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    photo: "../../assets/images/pets-katrine.png",
    age: "2 year old",
    inoculations: false,
    diseases: false,
    parasites: false,
  },
  {
    id: 1,
    name: 'Jennifer',
    breed: 'Dog - Labrador',
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    photo: "../../assets/images/pets-jennifer.jpg",
    age: "2 months",
    inoculations: true,
    diseases: false,
    parasites: false,
  },
  {
    id: 2,
    name: 'Woody',
    breed: 'Dog - Golden Retriever',
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    photo: "../../assets/images/pets-woody.jpg",
    age: "3 year old",
    inoculations: true,
    diseases: 'gastritis',
    parasites: false,
  },
  {
    id: 3,
    name: 'Sophia',
    breed: 'Dog - Shih tzu',
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    photo: "../../assets/images/pets-katrine.jpg",
    age: "1 months",
    inoculations: false,
    diseases: false,
    parasites: false,
  },
  {
    id: 4,
    name: 'Timmy',
    breed: 'Cat - British Shorthair',
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    photo: "../../assets/images/pets-timmy.png",
    age: "9 months",
    inoculations: false,
    diseases: false,
    parasites: false,
  },
  {
    id: 5,
    name: 'Charly',
    breed: 'Dog - Jack Russell Terrier',
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    photo: "../../assets/images/pets-charly.jpg",
    age: "4 year old",
    inoculations: true,
    diseases: false,
    parasites: false,
  },
  {
    id: 6,
    name: 'Scarlett',
    breed: 'Dog - Jack Russell Terrier',
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    photo: "../../assets/images/pets-scarlet.jpg",
    age: "4 months",
    inoculations: true,
    diseases: false,
    parasites: false,
  },
  {
    id: 7,
    name: 'Freddie',
    breed: 'Cat - British Shorthair',
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    photo: "../../assets/images/pets-scarlet.jpg",
    age: "7 months",
    inoculations: false,
    diseases: false,
    parasites: false,
  },
];

let btn = document.getElementById("slider-line");

btn.addEventListener('click', onModel);
window.addEventListener('click', onDeleteModel);

function onModel(event) {

  if (event.target.nodeName == "BUTTON") {
    const petId = event.target.id;
    let base = document.getElementById("baseModel");
    
    
    base.insertAdjacentHTML("beforeEnd",
      `<div class="model" id="myModal">
        <div class="modal-window">
          <div class="layout-2-column modal-window__wrap">
              <span class="close tag"><span>✕</span></span>
              <div class="modal-window__img"><img src="${PETS__DB[petId].photo}"
                      alt="pets-jennifer"></div>
              <div class="modal-content">
                  <h2 class="modal-content__title">${PETS__DB[petId].name}</h2>
                  <h3 class="modal-content__subtitle">${PETS__DB[petId].breed}</h3>
                  <div class="modal-content__text">
                      <p>${PETS__DB[petId].description}</p>
                  </div>
                  <ul class="list">
                      <li class="list__item"><span>Age: </span>${PETS__DB[petId].age}</li>
                      <li class="list__item"><span>Inoculations: </span>${PETS__DB[petId].inoculations}</li>
                      <li class="list__item"><span>Diseases: </span>${PETS__DB[petId].diseases}</li>
                      <li class="list__item"><span>Parasites: </span>${PETS__DB[petId].parasites}</li>
                  </ul>
              </div>
          </div>
        </div>
      </div>`);

    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
      modal.remove();
    }

  }

}

function onDeleteModel(event) {
  let modal = document.getElementById("myModal");

  if (event.target == modal) {
    modal.remove();
  }
}