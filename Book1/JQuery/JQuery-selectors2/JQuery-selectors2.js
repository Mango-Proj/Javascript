$('.btn-primary').click(function() {
  $('li.list-group-item').removeClass('active');

  // $('li.list-group-item:gt(2)').addClass('active');
  $('li.list-group-item').slice(3).addClass('active');
});

$('.btn-success').click(function() {
  $('li.list-group-item').removeClass('active');

  // $('li.list-group-item:lt(2)').addClass('active');
  $('li.list-group-item').slice(0, 2).addClass('active');
});

$('.btn-warning').click(function() {
  $('li.list-group-item').removeClass('active');

  // $('li.list-group-item:eq(2)').addClass('active');
  $('li.list-group-item').eq(2).addClass('active');
});

$('.btn-danger').click(function() {
  $('li.list-group-item').removeClass('active');

  $('li.list-group-item:contains("An item")').addClass('active');
});