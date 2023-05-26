let navitmes = $('.navItem');
$(navitmes).each(function() {
    $(this).css('color', 'white');
});

let nav = $('#nav');
$(nav).css('backgroundColor', '#145');

let evenList = $('li:even');
$(evenList).css('backgroundColor', '#ccc');

let oddList = $('li:odd');
$(oddList).css('backgroundColor', '#aaa');

let input = $('input');
$(input).val('Asher');