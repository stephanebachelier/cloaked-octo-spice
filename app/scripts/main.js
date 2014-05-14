var $container = $('.container');

$container.on('webkitTransitionEnd moztransitionend transitionend oTransitionEnd', function () {
  if (!$container.hasClass('panel-open')) {
    if ($container.hasClass('left-panel')) {
      $container.removeClass('left-panel');
    }
    if ($container.hasClass('right-panel')) {
      $container.removeClass('right-panel');
    }
  }
});

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
