function validateForm() {
    //collect form data in JavaScript variables
    var pw1 = document.getElementById("pswd1").value;
		var pw2 = document.getElementById("pswd2").value;

    //check empty first name field


    //check empty password field
    if(pw1 == "") {
      document.getElementById("message1").innerHTML = "**Fill the password please!";
      return false;
    }

    //check empty confirm password field
    if(pw2 == "") {
      document.getElementById("message2").innerHTML = "**Enter the password please!";
      return false;
    }

    //minimum password length validation
    if(pw1.length < 8) {
      document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";
      return false;
    }

    //maximum length of password validation
    if(pw1.length > 15) {
      document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";
      return false;
    }

    if(pw1 != pw2) {
      document.getElementById("message2").innerHTML = "**Passwords are not same";
      return false;
    } else {
      alert ("Your password created successfully");
      //document.write("JavaScript form has been submitted successfully");
    }
 }

 $(document).ready(function(){
     // Get value on button click and show alert
     $("#sub").click(function(){
         var str = $("#name").val();
         var str1=$("#mail").val();
         alert('Please check your details\n'+'name:'+str+'\nMail id:'+str1)

     });
 });
