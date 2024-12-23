$('.btn-primary').click(function() {
  const replace = '<li class="list-group-item list-group-item-primary">replaceWith()</li>';
  $('li.list-group-item').eq(0).replaceWith(replace);
});

$('.btn-success').click(function() {
  const replace = '<li class="list-group-item list-group-item-success">replaceAll()</li>';
  $(replace).replaceAll('li.active');
});

$('.btn-warning').click(function() {
  const wrap = '<li class="list-group-item list-group-item-warning"></li>';
  $('li.list-group-item').slice(3).wrap(wrap);
});

$('.btn-danger').click(function() {
  const wrap = '<li class="list-group-item list-group-item-danger"></li>';
  $('li.active, li.list-group-item-success').wrapAll(wrap);
});

$('.btn-secondary').click(function() {
  location.reload(true);
});