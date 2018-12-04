

$(document).ready(function(){
  //Username, Password, and button saved a variable
  var username = $('input[type=text]');
  var password = $('input[type=password]');
  button = $("button");
  //saves the text as a variable
  var usernameTxt = $('input[type=text]').val();
  var passwordTxt = $('input[type=password]').val();
  //calls the togglebutton function
  toggleButton();
  //adds events for the username and password fields
  username
    .keypress(toggleButton)
    .keyup(toggleButton);
  password
    .keypress(toggleButton)
    .keyup(toggleButton);
  //toggleButton function that determines if there is text in the
  //username and password fields and if yes, the sign in button is actived.
  function toggleButton() {
    usrLen = username.val().length;
    pwdLen = password.val().length;
    if (usrLen != 0 && pwdLen != 0) {
     button
       .removeAttr("disabled")
       .addClass('activeButton');
    }
    else {
       button.attr("disabled", "disabled");
       button.removeClass('activeButton');
    }

  };

});
