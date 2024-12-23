$('li.list-group-item').click(function() {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
});

// $('li.list-group-item').click(function() {
//   $(this).toggleClass('active');
// });