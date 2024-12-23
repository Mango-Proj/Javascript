$('.btn-primary').click(function() {
  $('ul.list-group').find('li').eq(2).addClass('active');
});

$('.btn-success').click(function() {
  $('li').filter('.active').removeClass('active');
});

$('.btn-warning').click(function() {
  $('li').filter(function (index) {
    return index % 2 === 1;
  }).addClass('active');
});

$('.btn-danger').click(function() {
  $('ul.list-group').children('.active').removeClass('active');
});

$('.btn-secondary').click(function() {
  location.reload(true);
});