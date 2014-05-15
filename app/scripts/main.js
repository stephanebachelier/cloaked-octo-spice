var $container = $('.container');
var $leftPanel = $('.panel-left');
var $rightPanel = $('.panel-right');

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

// adapt from codrops article
// really not performant!
// idea: better would be to add a click handler on the content-wrapper instead
var clickListener = function (event) {
  if ($leftPanel[0] === event.target || $leftPanel.find(event.target).length
  || $rightPanel[0] === event.target || $rightPanel.find(event.target).length) {
    // element clicked is in any sidebars or the sidebars themselves
    return;
  }
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
