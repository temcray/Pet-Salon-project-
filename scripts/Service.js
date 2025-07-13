// Constructor function
function Service(name, description, price) {
  this.name = name;
  this.description = description;
  this.price = parseFloat(price);
}

$(document).ready(function () {
  const $form = $('#servicesRegistrationForm');
  const $name = $('#serviceName');
  const $description = $('#serviceDescription');
  const $price = $('#servicePrice');
  const $serviceList = $('#serviceList'); 

  
  loadServicesFromLocal();

  $form.on('submit', function (e) {
    e.preventDefault();

    
    $name.css('border', '');
    $description.css('border', '');
    $price.css('border', '');

    const name = $name.val().trim();
    const description = $description.val().trim();
    const price = $price.val().trim();

    let isValid = true;

    if (!name) {
      $name.css('border', '2px solid red');
      isValid = false;
    }

    if (!description) {
      $description.css('border', '2px solid red');
      isValid = false;
    }

    if (!price || isNaN(price)) {
      $price.css('border', '2px solid red');
      isValid = false;
    }

    if (!isValid) return;

    const newService = new Service(name, description, price);
    console.log("Service Registered:", newService);

    saveServiceToLocal(newService);
    displayService(newService);
    $form[0].reset(); 
  });

  function saveServiceToLocal(service) {
    let services = JSON.parse(localStorage.getItem('services')) || [];
    services.push(service);
    localStorage.setItem('services', JSON.stringify(services));
  }

  function displayService(service) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = `${service.name} - ${service.description}`;

    const span = document.createElement('span');
    span.className = 'badge bg-secondary rounded-pill';
    span.textContent = `$${service.price.toFixed(2)}`;
    li.appendChild(span);

    $serviceList.append(li);
  }

  function loadServicesFromLocal() {
    $serviceList.empty();
    const services = JSON.parse(localStorage.getItem('services')) || [];
    services.forEach(service => displayService(service));
  }
});
