function getformvalue(event){
	event.preventDefault();

	let form  = document.getElementById('form1')

	let firstname = form.fname.value
	let lastname = form.lname.value

	alert(firstname+" "+lastname);
	
}