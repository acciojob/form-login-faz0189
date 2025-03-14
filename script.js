function getformvalue(){
	event.preventDefault();

	let form  = document.querySelectorById('form1')

	let firstname = form.fname.value
	let lastname = form.lname.value

	alert = (firstname+" " + lastname);
	
}