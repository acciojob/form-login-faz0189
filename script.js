function getFormvalue() {
    // Prevent form submission
    event.preventDefault();

    // Get form elements
    const form = document.getElementById('form1');

    // Retrieve values
    const firstName = form.fname.value;
    const lastName = form.lname.value;

    // Display full name
    alert(firstName + ' ' + lastName);
}