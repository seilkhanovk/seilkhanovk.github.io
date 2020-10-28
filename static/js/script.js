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
})
