$('.btn-primary').click(function() {
  $('li.list-group-item').removeClass('active');
  $('li.list-group-item:parent').addClass('active');
});

$('.btn-success').click(function() {
  $('li.list-group-item').removeClass('active');
  $('li.list-group-item:empty').addClass('active');
});

$('.btn-warning').click(function() {
  $('li.list-group-item').removeClass('active');
  $('li.list-group-item:has("em")').addClass('active');
});

function animated() {
  $('li.list-group-item').eq(2).slideUp().slideDown(animated);
}
animated();

$('.btn-danger').click(function() {
  $('li.list-group-item').removeClass('active');
  $('li.list-group-item:animated').addClass('active');
});