// Define Pet constructor
function Pet(name, age, gender, service, breed) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
}

// Initial Pets
let pet1 = new Pet("Max", 4, "Male", "Grooming", "Terrier");
let pet2 = new Pet("Michelle", 15, "Female", "Spa", "Tuxedo (cat)");
let pet3 = new Pet("Bella", 4, "Female", "Daycare", "Maltese");

let pets = [pet1, pet2, pet3];

// Salon object
const salon = {
    name: "Victoria's Pet Salon",
    phone: "312 828 1009",
    address: {
        street: "345 Blond Street",
        city: "Chicago",
        state: "IL",
        zip: "60155"
    },
    salonHours: {
        open: 10,
        close: 8,
        owner: "Tatiana E"
    }
};

// Display salon info
function displaySalonInformation() {
    const salonContainer = document.getElementById("salonContainer");
    let information = `
        <h2>${salon.name}</h2>
        <p><strong>Owner:</strong> ${salon.salonHours.owner}</p>
        <p><strong>Phone:</strong> ${salon.phone}</p>
        <p><strong>Address:</strong> ${salon.address.street}, ${salon.address.city}, ${salon.address.state} ${salon.address.zip}</p>
        <p><strong>Hours:</strong> from ${salon.salonHours.open} to ${salon.salonHours.close}</p>
    `;
    salonContainer.innerHTML = information;
}

// Display pets
function displayPets() {
    const petsContainer = document.getElementById("petsContainer");
    let petList = "";

    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        petList += `
            <ul>
                <li>${pet.name} - ${pet.breed} (${pet.service})</li>
            </ul>
        `;
    }

    petsContainer.innerHTML = petList;
}

// Pet registration form handling
function registerPet(event) {
    event.preventDefault();

    const form = document.getElementById("petRegistrationForm"); // Corrected ID and spelling
    const name = form.elements["petName"].value;
    const age = form.elements["petAge"].value;
    const gender = form.elements["petGender"].value;
    const service = form.elements["petService"].value;
    const breed = form.elements["petBreed"].value;

    const newPet = new Pet(name, age, gender, service, breed);
    pets.push(newPet);
    displayPets(); // Refresh pet list

    console.log("Registered:", newPet);
}

// Dark mode toggle
const toggleButton = document.getElementById("toggle-dark-mode");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Initial load
displaySalonInformation();
displayPets();
