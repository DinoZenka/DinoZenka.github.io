$(document).ready(function() {
    $('#moreToors').BlocksIt({
        numOfCol: 3,
        offsetX: 5,
        offsetY: 5,
        blockElement: '.grid'
    });
});

$(document).ready(function() {
    $('img.btn-primary').click(function(event) {
        event.preventDefault();
        $('#myOverlay').fadeIn(297, function() {
            $('#myModal')
                .css('display', 'block')
                .animate({ opacity: 1 }, 198);
        });
    });

    $('#myModal__close, #myOverlay').click(function() {
        var leg = $('#youtube').attr('src');
        $('#youtube').attr('src', leg);

        $('#myModal').animate({ opacity: 0 }, 198, function() {
            $(this).css('display', 'none');
            $('#myOverlay').fadeOut(297);
        });
    });
});