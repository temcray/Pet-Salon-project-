//Get the form
const form = document.querySelector("form");

//Get the button
const submitButton = form.elements["submitButton"];

//function how to get the date
function onSubmitButton(event){
event.preventDefault();


//get the submitted info
const username = form.elements["username"].value;
const email = form.elements["email"].value;
const password = form.elements["password"].value;

//add the value to the html
console.log("username", username);
console.log("email", email);
console.log("password", password);

form.reset();
}

submitButton.addEventListener("click", onSubmitButton);
