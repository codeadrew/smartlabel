
$('.pagination a').click(function(){
  console.log($(this).index());
  var idx = $(this).index();
  $('.row').animate({
    'left': -idx*100 + '%'
  })
  $('.line').animate({
    'left': idx*33.33 + '%'
  })
});
