function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  var sidebar = document.querySelector('.sidebar');
  var closeSidebar = document.querySelector('.close-sidebar');
  var menuIcon = document.querySelector('.menu-icon');

  menuIcon.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    closeSidebar.classList.toggle('active');
  });
  closeSidebar.addEventListener('click', function() {
    sidebar.classList.remove('active');
    closeSidebar.classList.remove('active');
  });
  document.addEventListener('keyup', function() {
    sidebar.classList.remove('active');
    closeSidebar.classList.remove('active');
  });

  document.getElementById('emailInputSubmit').addEventListener('click', function () {
    const email = document.getElementById("emailInputBox").value;
    const isCorrectEmail = checkEmail(email);
    if (isCorrectEmail === false) {
      alert("Please, enter correct email.");
    } else {
      sendRequest(email);
    }     
  })

  const checkEmail = (email) => {
    const len = email.length;
    let ok = false;
    let pos = len;
    let isCorrectEmail = false; 
    for (let i = 0; i < len; i++) {
        if (i != 0 && email[i] == '@') {
          ok = true;
          pos = i;
        }
        if (ok && i >= pos + 2) {
          if (email[i] == '.' && i + 1 < len) {
            isCorrectEmail = true;
          }
        }
    }
    return isCorrectEmail;
  }

  const sendRequest = (email) => {
    const currentURL = window.location.href;
    const res = currentURL.split("=");

    // const globalURL = "https://rita-api.herokuapp.com/";
    const globalURL = "http://localhost:3000/";
    if (res.length > 1) {
      const token = res[res.length - 1];
      var request1 = new XMLHttpRequest();
      const urlToOpen = globalURL + "potential-users/" + token;
      request1.open("PUT", urlToOpen, true);
      request1.setRequestHeader("Content-Type", "application/json");
      request1.send();
    } 
    var request = new XMLHttpRequest();
    request.open("POST", globalURL + "potential-users", true);
    request.setRequestHeader("Content-Type", "application/json");

    request.send(
      JSON.stringify({
        email: email,
      })
    );

    request.addEventListener("load", function (e) {
      let message = e.currentTarget.response;

      window.location.href = "/waitinglist?t=" + message;
    });
  }
})
