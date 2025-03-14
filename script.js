function getformvalue(event){
	event.preventDefault();

	const form  = document.getElementById('form1')

	const firstname = form.fname.value;
	const lastname = form.lname.value;

	alert(firstname + " " + lastname);
	
}