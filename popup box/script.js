$(document).ready(function () {
    $(".clicks").click(function () {
      $(".form-control").val("");
      $("#emailvalidation").hide();
      $("#usernamevalidation").hide();
      $("#box").toggle();
    });
  
    $("#cross").on("click", function () {
      $("#box").hide();
      $("#emailvalidation").hide();
      $("#usernamevalidation").hide();
    });
  
    var Error = true;
    var email_error = true;
  
    $(".submission").on("click", function () {
      $("#box").toggle();
    });
  });