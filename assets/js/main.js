$(function(){
    $('.site-header__primary .toggle').on('click', function(e){
        e.preventDefault();
        var controls = $(this).attr('aria-controls');
        $('#' + controls).toggleClass('show');
    });
});
