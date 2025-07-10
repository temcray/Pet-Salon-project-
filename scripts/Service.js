// Constructor function
function Service(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = parseFloat(price); // ensures price is a number
}

$(document).ready(function () {
  $('#servicesRegistrationForm').on('submit', function (e) {
    e.preventDefault(); // prevent form from refreshing the page

    // Get input values
    const name = $('#serviceName').val().trim();
    const description = $('#serviceDescription').val().trim();
    const price = $('#servicePrice').val().trim();

    // Clear previous error highlights
    $('#serviceName, #serviceDescription, #servicePrice').css('border', '');

    let isValid = true;

    // Validation
    if (!name) {
      $('#serviceName').css('border', '2px solid red');
      isValid = false;
    }

    if (!description) {
      $('#serviceDescription').css('border', '2px solid red');
      isValid = false;
    }

    if (!price || isNaN(price)) {
      $('#servicePrice').css('border', '2px solid red');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Create new service object
    const newService = new Service(name, description, price);
    console.log("Service Registered:", newService);

    // Optional: Display confirmation or add it to a list on the page

    // Reset form and remove highlights
    $('#servicesRegistrationForm')[0].reset();
    $('#serviceName, #serviceDescription, #servicePrice').css('border', '');

    // Debug output
    console.log(`Service Name: ${newService.name}, Description: ${newService.description}, Price: $${newService.price}`);
  });
});

