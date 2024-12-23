$('.btn-primary').click(function (event) {
  $(this).parent().prev().attr('src', 'https://dummyimage.com/600x400/369/fff');
  event.preventDefault();
});

$('.btn-success').click(function() {
  $(this).parents('.card').find('h5').css('color', 'magenta');
  return false;
});

$('.btn-warning').click(function() {
  $(this).siblings('.card-text').addClass('bg-warning');
  return false;
});

$('.btn-danger').click(function() {
  if ($(this).is(':contains("is")')) {
    $(this).prev().prev().prev().addClass('bg-danger');
  }
  return false;
});