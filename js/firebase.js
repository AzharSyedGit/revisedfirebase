var myFirebaseRef = new Firebase("https://assign1234.firebaseio.com/");
	   myFirebaseRef.child("HEADING1").on("value", function(snapshot) {
  document.getElementById("new_div1").innerHTML=snapshot.val();  
  document.getElementById("new_div12").innerHTML=snapshot.name(); 
});

	   myFirebaseRef.child("HEADING2").on("value", function(snapshot) {
  document.getElementById("new_div2").innerHTML=snapshot.val();  
  document.getElementById("new_div13").innerHTML=snapshot.name(); 
});


	   myFirebaseRef.child("HEADING3").on("value", function(snapshot) {
  document.getElementById("new_div3").innerHTML=snapshot.val();
document.getElementById("new_div14").innerHTML=snapshot.name();  
});


	   myFirebaseRef.child("HEADING4").on("value", function(snapshot) {
  document.getElementById("new_div4").innerHTML=snapshot.val();  
  document.getElementById("new_div15").innerHTML=snapshot.name(); 
});
