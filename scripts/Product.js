console.log("Product list");
const form = document.querySelector("form");
const saveButton = form.elements["saveButton"];

function onSaveButton(event){
    event.preventDefault();

    const productName = form.elements ["productName"].value;
    const productPrice = form.elements ["productPrice"].value;
    const productCategory = form.elements ["productCategory"].value;

    console.log("Product Name: ", productName);
    console.log("Product Price: ", productPrice);
    console.log("Product Category: ", productCategory);

    const card = document.createElement("div");
    card.className = "col-mb-4";

    card.innerHTML = `
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">$[productName]</h5>
    <h6 class="card-subtitle mb-2 text-muted">$[productCategory]</h6>
    <p> $[productPrice]</p>
    </div>
    </div>


`
cardContainer.appendChild(card);

form.reset();
}