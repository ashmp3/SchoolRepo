for (let i = 0; i < 16; i++) {
    $('#mainDiv').append(`<div></div>`);
    $('#mainDiv div:last').addClass('boxStyle');
}
$('#mainDiv').on('click', '.boxStyle', function () {
    $(this).toggleClass('lightBox');
})