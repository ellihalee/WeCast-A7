function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
        window.location.href = '/index'; //when login works, it goes into the index page
  }
  else {
        console.log('Login was Unsucessful');
        window.location.href = "/"; 

  }
}

//the login button showed without the code below
//create the empty callback function changeUser that takes the argument response
function changeUser(response) {
  $(".facebookLogin").hide(); 
  $("#name").text(response.name);
  $("#photo").attr("src",response.picture.data.url); 
}

