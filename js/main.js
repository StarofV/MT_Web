$(document).ready(function () {
    $.post("./server-check.php", function (data) {
        var div = $("#server_status");
        if (data == 1){
            div.css('color', 'green');
            div.html('Server is online!');
        }else{
            div.css('color', 'red');
            div.html('Server is offline')
        }
    });
});

function toggleMenu(){
    var menu= $('#menu');
    var img = $('#menu_hider').find('img');

    jQuery.fn.rotate = function(/*number*/degrees) {
        $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
            '-moz-transform' : 'rotate('+ degrees +'deg)',
            '-ms-transform' : 'rotate('+ degrees +'deg)',
            'transform' : 'rotate('+ degrees +'deg)'});
        return $(this);
    };

    if (menu.css('height') !== '0px'){
        img.rotate(0);
        menu.css('height', 0);
    }else{
        img.rotate(-90);
        menu.css('height', '96px');
    }
}