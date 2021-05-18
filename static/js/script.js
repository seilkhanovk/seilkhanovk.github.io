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


  document.getElementById('demo_grid1').style.backgroundColor = "#242C57";
  document.getElementById('cat-1').style.color = "white";
  document.getElementById('desc-1').style.color = "white";
  document.getElementById('demo_grid1').addEventListener('click', function () {
    document.getElementById('demo_grid1').style.backgroundColor = "#242C57";
    document.getElementById('demo_grid2').style.backgroundColor = "#FFFFFF";
    document.getElementById('demo_grid3').style.backgroundColor = "#FFFFFF";
      document.getElementById('desc-1').style.color = "#FFFFFF";
      document.getElementById('cat-1').style.color = "#FFFFFF";
      document.getElementById('desc-2').style.color = "#242C57";
      document.getElementById('cat-2').style.color = "#242C57";
      document.getElementById('desc-3').style.color = "#242C57";
      document.getElementById('cat-3').style.color = "#242C57";
    document.getElementById('control_image').src = "static/img/screen_collect.svg"
  })

  document.getElementById('demo_grid2').addEventListener('click', function () {
    document.getElementById('demo_grid2').style.backgroundColor = "#242C57";
    document.getElementById('demo_grid1').style.backgroundColor = "#FFFFFF";
    document.getElementById('demo_grid3').style.backgroundColor = "#FFFFFF";
    document.getElementById('desc-2').style.color = "#FFFFFF";
    document.getElementById('cat-2').style.color = "#FFFFFF";
    document.getElementById('desc-1').style.color = "#242C57";
    document.getElementById('cat-1').style.color = "#242C57";
    document.getElementById('desc-3').style.color = "#242C57";
    document.getElementById('cat-3').style.color = "#242C57";

    document.getElementById('control_image').src = "static/img/screen_visualize.svg";
  })

  document.getElementById('demo_grid3').addEventListener('click', function () {
    document.getElementById('demo_grid3').style.backgroundColor = "#242C57";
    document.getElementById('demo_grid2').style.backgroundColor = "#FFFFFF";
    document.getElementById('demo_grid1').style.backgroundColor = "#FFFFFF";
      document.getElementById('desc-3').style.color = "#FFFFFF";
      document.getElementById('cat-3').style.color = "#FFFFFF";
      document.getElementById('desc-1').style.color = "#242C57";
      document.getElementById('cat-1').style.color = "#242C57";
      document.getElementById('desc-2').style.color = "#242C57";
      document.getElementById('cat-2').style.color = "#242C57";
    document.getElementById('control_image').src = "static/img/screen_control.svg";


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

    const globalURL = "https://rita-api.herokuapp.com/";
    // const globalURL = "http://localhost:3000/";
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
