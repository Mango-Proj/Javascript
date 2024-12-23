$('.figure-img').click(function() {
  console.log($(this).attr('src'), $(this).attr('title'));
  $(this).attr('src', 'https://dummyimage.com/500x400/ccc/fff');
});

let idx = 0;
const len = $('input[name="rb"]').length;

$('.btn-primary').click(function() {
  $('input[name="rb"]').eq(idx % len).prop('checked', true);

  const radioValue = $('input[name="rb"]:checked').val();
  $('input[name="search"]').val(radioValue);

  idx++;
});

$('.btn-success').click(function() {
  const rbValue = $('input[name="rb"]:checked').parent().text();
  $('input[name="search"]').val(rbValue);
});