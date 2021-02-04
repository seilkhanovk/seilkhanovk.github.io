function ready(fn) {
  if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', fn);
    
  } 
}

ready(function() {
  document.getElementById("order").innerHTML = "1";

  
})
