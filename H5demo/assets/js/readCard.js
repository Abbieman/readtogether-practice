$(function() {
    $('body').on('click', function() {
        $('.topItem').toggle(function() {
            $(this).hide();
        }, function() {
            $(this).show();
        })

        $('.bottomItem').toggle(function() {
            $(this).hide();
        }, function() {
            $(this).show();
        })
    })
})