$('.btn-primary').click(function() {
  $('li.list-group-item').removeClass('active');

  // $('li.list-group-item:first').addClass('active');
  $('li.list-group-item').first().addClass('active');
});

$('.btn-success').click(function() {
  $('li.list-group-item').removeClass('active');

  // $('li.list-group-item:last').addClass('active');
  $('li.list-group-item').last().addClass('active');
});

$('.btn-warning').click(function() {
  $('li.list-group-item').removeClass('active');

  // $('li.list-group-item:even').addClass('active');
  $('li.list-group-item').even().addClass('active');
});

$('.btn-danger').click(function() {
  $('li.list-group-item').removeClass('active');

  // $('li.list-group-item:odd').addClass('active');
  $('li.list-group-item').odd().addClass('active');
});