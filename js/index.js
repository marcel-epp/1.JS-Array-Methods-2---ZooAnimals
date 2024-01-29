import { zooAnimals } from "../utils/db.js";

// This website uses a function to check wether a specific animal is part of the zoo or not
// but it's not working correct.
// Please implement the function 'checkAnimal' that gets an array of animals and an animal name
// The function should return 'true' if the animal name is included in the array or 'false' if not.

function hasAnimal(animals, animalName) {
  return !!animals.find(
    (animal) => animal.toLowerCase() === animalName.toLowerCase()
  );
  // const upperCaseAnimals = animals.map((animal) => {
  //   return animal.toUpperCase();
  // });
  // const lowerCaseAnimals = animals.map((animal) => {
  //   return animal.toLowerCase();
  // });
  // return (
  //   animals.includes(animalName) ||
  //   upperCaseAnimals.includes(animalName) ||
  //   lowerCaseAnimals.includes(animalName)
  //);
}

//console.log(animalName);
console.log(hasAnimal(zooAnimals, "Sheep"));
console.log(hasAnimal(zooAnimals, "SHEEP"));
console.log(hasAnimal(zooAnimals, "sheep"));
console.log(hasAnimal(zooAnimals, "ShEep"));

// Bonus:
// Can you modify the function so that it works case-insensitive?
// This means it should return true, even if you search for 'sheep' or 'SHEEP' or 'sHeEp'.
// Hint: Remember the 'map' function

// -------------------------------------------------------------------------------------
// ----- The following code is used for the browser preview. Please don't touch it -----

const animalList = document.querySelector("[data-js='animalList']");
const animalForm = document.querySelector("[data-js='animalForm']");
const output = document.querySelector("[data-js='output']");

animalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchQuery = event.target.searchQuery.value;
  output.textContent = "";
  if (searchQuery.trim() === "") {
    return;
  }
  const result = hasAnimal(zooAnimals, searchQuery);
  output.textContent = result
    ? `Yes, we have ${searchQuery}`
    : `No, we don't have ${searchQuery}`;
});
zooAnimals.forEach((animal) => {
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = animal;
  animalList.append(tag);
});
