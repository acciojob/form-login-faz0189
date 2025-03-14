function getFormvalue(event) {
            event.preventDefault();
            const fname = document.forms[0].fname.value;
            const lname = document.forms[0].lname.value;
            alert(fname + ' ' + lname);
        }
