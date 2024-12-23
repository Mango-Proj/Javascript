// $('img').hover(handlerIn, handlerOut);
// $('img').hover(function(){}, function(){});
$('img').hover(function() {
  console.log('마우스 들어옴');
}, function() {
  console.log('마우스 나감');
});

/*
// $('img').mouseenter(handlerIn).mouseleave(handlerOut);
// $('img').mouseenter(function(){}).mouseleave(function(){});
$('img').mouseenter(function() {
  console.log('마우스 들어옴2');
}).mouseleave(function() {
  console.log('마우스 나감2');
});
*/