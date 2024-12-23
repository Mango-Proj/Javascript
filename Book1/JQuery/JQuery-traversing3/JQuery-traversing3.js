$('li.list-group-item').click(function() {
  // $(this).addClass('active').siblings().removeClass('active');
  $(this).siblings().removeClass('active').end().addClass('active');
});

$('.btn-primary').click(function() {
  // $(선택자).each(함수);
  $('li.list-group-item').each(function (index, element) {
    console.log(index, element);
    $(this).text(index + ' 번째');
  });
});

$('.btn-success').click(function() {
  // $.each(배열, 콜백);
  const myArray = ['*', '**', '***', '****', '*****'];
  $.each(myArray, function (index, value) {
    $('li.list-group-item').eq(index).text(value);
  });
});

$('.btn-warning').click(function() {
  // $(선택자).map(콜백);
  let lists = $('li.list-group-item').map(function (index, element) {
    if (index % 2 === 1) {
      console.log(index, element);
      return $(element).text();
    }
  });
  console.log(lists);
});