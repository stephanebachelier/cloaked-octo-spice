var $container = $('.container');

var clickListener = function (event) {
  if ($container.hasClass('panel-open')) {
    $container.removeClass('panel-open');
    document.removeEventListener('click', clickListener);
  }
};

$('.btn-nav').on('click', function (event) {
  event.stopPropagation();
	event.preventDefault();

  $container.addClass('left-panel');

  setTimeout( function() {
		$container.toggleClass('panel-open');
	}, 25 );

  document.addEventListener('click', clickListener);
});

$('.btn-aside').on('click', function (event) {
  event.stopPropagation();
  event.preventDefault();

  $container.addClass('right-panel');

  setTimeout( function() {
    $container.toggleClass('panel-open');
  }, 25 );

  document.addEventListener('click', clickListener);
});
