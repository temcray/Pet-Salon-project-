console.log("Pet Salon project ")
//Object Literal



let pet1 = {
    Name:"Max",
    Age: 7,
    Gender:"Male",
    Service:"Groomed",
    Breed:"Terrier",

}

let pet2 = {
    Name:"Michelle",
    Age: 6,
    Gender:"Female",
    Service:"spa",
    Breed:"Black/White Cat",

}

let pet3 = {
    Name:"Bella",
    Age: "4 months",
    Gender:"Female",
    Service:"Bath",
    Breed:"Maltese",

}

let pet = [pet1, pet2, pet3];

console.log(pet);

  document.getElementById("pets Name").textContent = "Total pets registered" + pet.length; 

  function displayPets(){
    let petsContainer = document.getElementById("petsContainer");
    let petslist = "";

    for (let i=0; i<pet.length; i++){
        let pet = pet[i];
        petsList += `
        
        <ul>
        <li> ${pet.name} </li>

        </u>

        
        `
    }
    petsContainer.innerHTML = petsList;
  }

  displayPets();