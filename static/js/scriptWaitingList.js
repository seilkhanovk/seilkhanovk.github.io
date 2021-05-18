function ready(fn) {
  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {});

sendRequest();

function sendRequest() {
  const currentURL = window.location.href;
  const res = currentURL.split("=");
  const token = res[res.length - 1];
  const globalURL = "https://rita-api.herokuapp.com/";
  // const globalURL = "http://localhost:3000/";
  var request = new XMLHttpRequest();
  request.open("GET", globalURL + "potential-users/" + token, true);
  request.send();

  request.addEventListener("load", function (e) {
    let message = JSON.parse(e.currentTarget.response);
    document.getElementById("order").innerHTML = message["order"]; 
    document.getElementById("copy-input").value = "https://ritapersonaldata.com?t=" + message["refToken"]; 
    document.getElementById("refCount").innerHTML = message["refCount"] + " referred"; 
  });

  
}

function copyFunction() {
  var copyText = document.getElementById("copy-input");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  document.execCommand("copy");
}

function mailRedirect() {
  var link =
    "mailto:?subject=Check%20this%20out&body=You might like this " +
    document.getElementById("copy-input").value;
  // window.location.href =
  //   "" + link;
  window.open(link, "_blank");
}

function linkedinRedirect() {
  var link =
    "http://www.linkedin.com/shareArticle?mini=true&url=" +
    document.getElementById("copy-input").value;
  window.open(link, "_blank");
}

function twitterRedirect() {
  var link =
    "https://twitter.com/intent/tweet?url=" +
    document.getElementById("copy-input").value +
    "&text=This Rita app looks amazing!";

  window.open(link, "_blank");
}
