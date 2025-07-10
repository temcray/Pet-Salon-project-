//Get the form
const form = document.querySelector("form");

//Get the button
const submitButton = form.element["sumitButton"];

//function how to get the date
function onSumitButton(event){
event.preventDefault();


//get the submitted info
const username = form.elements["username"].value;
const email = form.elements["email"].value;
const password = form.elements["passworsd"].value;

//add the value to the html
console.log("username", username);
console.log("email", email);
console.log("password", password);

form.reset();
}
