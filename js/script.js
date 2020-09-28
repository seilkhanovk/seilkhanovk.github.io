$(document).ready(function () {
     // Header
     $('.menu-icon').click(function () {
        $('.sidebar').addClass('active');
        $('.close-sidebar').addClass('active');
    })
    $('.close-sidebar').click(function () {
        $('.sidebar').removeClass('active');
        $(this).removeClass('active');
    })
    $(document).keyup(function(e) {
        $('.sidebar').removeClass('active');
        $('.close-sidebar').removeClass('active');
    });    
})