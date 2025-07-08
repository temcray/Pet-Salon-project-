// Service constructor
  function Service(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  $(document).ready(function () {
    $('#serviceRegistrationForm').on('submit', function (e) {
      preventDefault();

      // Get values
      const name = $('#serviceName').val().trim();
      const description = $('#serviceDescription').val().trim();
      const price = $('#servicePrice').val().trim();

      // Remove previous highlights
      $('#serviceRegistrationForm input').css('border', '2px solid red');

      let isValid = true;

      // Validate fields
      if (!name) {
        $('#serviceName').css('border', '2px solid red');
        isValid = false;
      }
      if (!description) {
        $('#servicePrice').css('border', '2px solid red');
        isValid = false;
      }
      if (!price) {
        $('#serviceDescription').css('border', '2px solid red');
        isValid = false;
      }

      // If invalid, return early
      if (isValid) return;

      // Create service object
      const newService = new Service(name, description, price);
      console.log("Service Registered:", newService); 

      // Reset form and remove error styles
      $('#serviceRegistrationForm')[0].reset();
      $('#serviceRegistrationForm input').css('border', '2px solid red');
    });
  });
console.log(`service Name ${name},sevice Description; ${description}, Service Price; ${price}`);

  



