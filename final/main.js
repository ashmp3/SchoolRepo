

$('#submitButton').on('click', function (event) {
    event.preventDefault();
    let DisplayName = $('#displayName').val();
    let TypeComment = $('#typeComment').val();
    $('#comments').prepend(`<div><img src="user.jpg" alt="userImg"><div><p>${DisplayName}</p><h4>${TypeComment}</h4></div><div><span>Edit</span><span>Delete</span></div></div>`);
    $('#comments div:first').addClass('comStyleBox');
    $('#comments div:first div:first').addClass('comStyle');
    $('#comments div:first img').addClass('imgStyle');
    $('#comments div:first div:eq(1)').addClass('editDeleteCom');
    $('#comments div:first div:eq(1) span:eq(0)').addClass('editbutton');
    $('#comments div:first div:eq(1) span:eq(1)').addClass('deletebutton');
    $('#displayName').val('');
    $('#typeComment').val('');
});
let b;
$(document).on('click', '.editbutton', function () {
    let x = $(this).parent()[0];
    let y = $(x).prev();
    b = $(y).children()[1];
    let editCom = $(b).text();
    $(y).append(`<form class="editDiv"><input type="text" id="editComment"><input id="reSubmitButton" type="submit" value="Submit"></form>`)
    let newComment = $('#editComment');
    $(newComment).val(editCom);
});

$(document).on('click', '#reSubmitButton', function (event) {
    event.preventDefault();
    let newComment = $('#editComment').val();
    $(b).text(newComment);
    let z = $(this).parent()
    $(z).remove();
});

$(document).on('click', '.deletebutton', function () {
    let x = $(this).parent()[0];
    let y = $(x).parent()[0];
    $(y).remove();
});


