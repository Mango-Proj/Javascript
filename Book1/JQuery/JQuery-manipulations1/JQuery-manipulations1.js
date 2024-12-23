$('.btn-primary').click(function() {
  const append = '<li class="list-group-item list-group-item-primary">append()</li>';
  $('ul.list-group').append(append);
});

$('.btn-success').click(function() {
  const prepend = '<li class="list-group-item list-group-item-success">prepend()</li>';
  $('ul.list-group').prepend(prepend);
});

$('.btn-warning').click(function() {
  const before = '<li class="list-group-item list-group-item-warning">before()</li>';
  $('li.list-group-item').eq(2).before(before);
});

$('.btn-danger').click(function() {
  const after = '<li class="list-group-item list-group-item-danger">after()</li>';
  $('li.list-group-item').eq(2).after(after);
});

$('.btn-secondary').click(function() {
  location.reload(true);
});