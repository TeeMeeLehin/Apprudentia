document
.querySelector(".contact-form")
.addEventListener("submit", function (event) {
  event.preventDefault();

  // Capture form input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Construct the WhatsApp message with form input
  var whatsappMessage = "Name: " + name + "%0A";
  whatsappMessage += "Email: " + email + "%0A";
  whatsappMessage += "Message: " + message;

  // Redirect to WhatsApp with the constructed message
  window.location.href =
    "https://wa.me/+2348135616873/?text=" +
    encodeURIComponent(whatsappMessage);
});