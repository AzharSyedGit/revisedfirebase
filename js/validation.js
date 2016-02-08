function validateForm() {
    var x = document.forms["myForm"]["text1"].value;
	var y= document.forms["myForm"]["text2"].value;
	var z= document.forms["myForm"]["text3"].value;
	var emailRegEx =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	var nameRegEx=/^[A-Z]/i;
    if (x == null || x == "") {
        document.getElementById('output').innerHTML="Please enter email";
		
        return false;
    }
	else if(x.search(emailRegEx)==-1)
	{
		document.getElementById('output').innerHTML="Enter valid email";
		return false;
		}
	if(y==null || y==""){
	
	    document.getElementById('output').innerHTML="Please enter your Name";
        return false;
	}
	else if(y.search(nameRegEx)==-1)
	{
		document.getElementById('output').innerHTML="Enter valid Name";
		return false;
		}
	if (z== null || z== "") {
        document.getElementById('output').innerHTML="Please enter Message";
        return false;
    }
}


