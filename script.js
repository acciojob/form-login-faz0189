function getFormvalue(event) {
  event.preventDefault(); // Stop the form from refreshing the page

  // Access the form by its ID
  const form = document.getElementById('form1');

  // Retrieve First Name and Last Name values
  const firstName = form.fname.value;
  const lastName = form.lname.value;

  // Display the full name in an alert box
  alert(firstName + " " + lastName);
}
	
