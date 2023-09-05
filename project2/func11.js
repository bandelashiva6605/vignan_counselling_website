$(document).ready(function(){
    // Get value on button click and show alert
    $("#sub").click(function(){
        var str = $("#name").val();
        var str1=$("#mail").val();
        alert('Please check your details\n'+'name:'+str+'\nMail id:'+str1)

});
