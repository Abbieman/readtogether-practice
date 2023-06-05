$(function() {
    function toggleBody() {
        $('.iconcha').each(function(i, ele) {
            $(ele).css('color', '#000');
        })
        $('div[class^=body]').each(function(i, ele) {
            $(ele).hide();
        })
    }

    $('#bookLib').on('click', function() {
        $('#bookLib').hide();
        $('#bookLibOn').show();
        $('#bookShelf').show();
        $('#bookShelfOn').hide();
        $('#readRoom').show();
        $('#readRoomOn').hide();
        $('#me').show();
        $('#meOn').hide();
        toggleBody();
        $(this).siblings('.iconcha').css('color', '#1E9FFF');
        $('#bookLibBody').show();
    })

    $('#bookShelf').on('click', function() {
        $('#bookLib').show();
        $('#bookLibOn').hide();
        $('#bookShelf').hide();
        $('#bookShelfOn').show();
        $('#readRoom').show();
        $('#readRoomOn').hide();
        $('#me').show();
        $('#meOn').hide();
        toggleBody();
        $(this).siblings('.iconcha').css('color', '#1E9FFF');
        $('#bookShelfBody').show();
    })

    $('#readRoom').on('click', function() {
        $('#bookLib').show();
        $('#bookLibOn').hide();
        $('#bookShelf').show();
        $('#bookShelfOn').hide();
        $('#readRoom').hide();
        $('#readRoomOn').show();
        $('#me').show();
        $('#meOn').hide();
        toggleBody();
        $(this).siblings('.iconcha').css('color', '#1E9FFF');
        $('#readRoomBody').show();
    })

    $('#me').on('click', function() {
        $('#bookLib').show();
        $('#bookLibOn').hide();
        $('#bookShelf').show();
        $('#bookShelfOn').hide();
        $('#readRoom').show();
        $('#readRoomOn').hide();
        $('#me').hide();
        $('#meOn').show();
        toggleBody();
        $(this).siblings('.iconcha').css('color', '#1E9FFF');
        $('#meBody').show();
    })

    $('.avatar').on('click', function() {
        alert('对不起，做不到！');
    })

    $('.account').on('click', function() {
        alert('对不起，做不到！');
    })

    $('.friends').on('click', function() {
        alert('对不起，做不到！');
    })

    $('.reading').on('click', function() {
        alert('对不起，做不到！');
    })

    $('.settings').on('click', function() {
        alert('对不起，做不到！');
    })
})