console.log("Pet Salon project ")
//Object Literal
let pet1 = {
    name:"Max",
    age: 4,
    gender: "male",
    service:"Grooming",
    breed: "terrier",
}

let pet2 = {
    name:"Michelle",
    age: 15,
    gender: "female",
    service:"Spa",
    breed: "tuxedo (cat)",
}

let pet3 = {
    name:"Bella",
    age: 4 ,
    gender: "female",
    service:"Daycare",
    breed: "maltese",
}

let pet = [pet1, pet2, pet3,]

document.getElementById("petCount");

function displayPets(){
    let petsContainer = document.getElementById("petsContainer");
    let petList = "";


    for(let i =0; i < pets.length; i++){
        let pet = pets[i];
        petList += `
        
        <ul>
            <li> ${pet.name} </li>

        </ul>;
        `
    }
    petsContainer.innerHTML = PetsList;
}





const salon = {
    name: " Victoria's Pet Salon",
    phone: "312 828 1009",
    address: {
        street: "345 blond street",
        city: "Chicago",
        state: "IL",
        zip: "60155",
    }
}
const owner = "Tatiana E."; 
const hours = "Mon-Fri: 10 AM - 8 PM, Sat-Sun: 12 AM - 6 PM";

document.getElementById("demo").innerHTML = ("");

function displaySalonInformation() {
    let salonContainer = document.getElementById("salonContainer");
    let information = "";

    information += `
    <h2> ${salon.name} </h2>
    <p> <strong> Owner: </strong> ${salon.owner} </p>
    <p> <strong> Phone: </strong> ${salon.Phone} </p>
    <p> <strong> Address: </strong> ${salon.address.street} ${salon.address.state}, ${salon.address.zip}; </p>
    <p> <strong> Hours: </strong> from ${salon.hours} To ${salon.hours}; </p>
  `;
 salonContainer.innerHTML = information;
}

displaySalonInformation();

function Pet(name, age, gender, service, breed) {
    this.name = name,
        this.age = age,
        this.gender = gender,
        this.service = service,
        this.breed = breed
}


const pet4 = new Pet("Meatball", 2, "Male", "Grooming", "Bulldog");
const pet5 = new Pet("Kimmy", 11, "Female", "Spa", "Pitbull");
const pet6 = new Pet("Jack", 7, "Male", "Daycare", "Maltese");



function registerPet(event){
    event.preventDefault();

    let PetsList = "";

    const name = petRegistrationFrom.element["petName"].value;
    const age = petRegistrationFrom.element["petAge"].value;
    const gender = petRegistrationFrom.element["petGender"].value;
    const service = petRegistrationFrom.element["petService"].value;
    const breed = petRegistrationFrom.element["petBreed"].value;

    const newpet = new Pet(name, age, gendder, service, breed);

    console.log(newpet);

    result += `
    <div class="pet-card">

    <h3> Name: ${newPet.name}</h3>
    <p> Age: ${newPet.age} </p>
    <p> Gender: ${newPet.gender} </p>
    <p> Service: ${newPet.service}</p>
    <p> Breed: ${newpet.breed} </p>

    </div>
    `
    
    
};