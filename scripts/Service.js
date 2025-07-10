// Constructor function
function Service(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = parseFloat(price); 
}

$(document).ready(function () {
  $('#servicesRegistrationForm').on('submit', function (e) {
    e.preventDefault(); 

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

    

    // Reset form and remove highlights
    $('#servicesRegistrationForm')[0].reset();
    $('#serviceName, #serviceDescription, #servicePrice').css('border', '');

    // Debug output
    console.log(`Service Name: ${newService.name}, Description: ${newService.description}, Price: $${newService.price}`);
  });
});

function saveServiceToLocal(service) {
      let services = JSON.parse(localStorage.getItem('services')) || [];
      services.push(service);
      localStorage.setItem('services', JSON.stringify(services));
    }

    function displayService(service) {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.textContent = `${service.name}`;
      const span = document.createElement('span');
      span.className = 'badge bg-secondary rounded-pill';
      span.textContent = `$${service.price}`;
      li.appendChild(span);
      serviceList.appendChild(li);
    }

    function clearForm() {
      serviceName.value = '';
      servicePrice.value = '';
      serviceName.classList.remove('error');
      servicePrice.classList.remove('error');
    }