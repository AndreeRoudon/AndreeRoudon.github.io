// Récupération des data depuis le fichier data.json

const reponse = await fetch("data.json");
const data = await reponse.json();

// data destination page

// Récupération de l'élément du DOM qui accueillera les données

const destinationMoon = data.destinations[0];
const titlePlanet = document.querySelector(".title-planet");
const description = document.querySelector(".description");
const distance = document.querySelector(".distance");
const travel = document.querySelector(".travel");
const imagesPlanets = document.querySelector(".img-planet");

// création d'un élément 

const nameElement = document.createElement("h1");
nameElement.innerText = destinationMoon.name;

const descriptionElement = document.createElement("p");
descriptionElement.innerText = destinationMoon.description;

const imagesElement = document.createElement("img");
imagesElement.src = destinationMoon.images.png;

const distanceElement = document.createElement("p");
distanceElement.innerText = destinationMoon.distance;

const travelElement = document.createElement("p");
travelElement.innerText = destinationMoon.travel;

// On rattache la class a un élement
titlePlanet.appendChild(nameElement);
description.appendChild(descriptionElement);
imagesPlanets.appendChild(imagesElement);
distance.appendChild(distanceElement);
travel.appendChild(travelElement);