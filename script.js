function addOnWheel(elem, handler) {
	if (elem.addEventListener) {
	  if ('onwheel' in document) {
		// IE9+, FF17+
		elem.addEventListener("wheel", handler);
	  } else if ('onmousewheel' in document) {
		// устаревший вариант события
		elem.addEventListener("mousewheel", handler);
	  } else {
		// 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
		elem.addEventListener("MozMousePixelScroll", handler);
	  }
	} else { // IE8-
	  text.attachEvent("onmousewheel", handler);
	}
  }

  var scale = 1;

  addOnWheel(text, function(e) {

	var delta = e.deltaY || e.detail || e.wheelDelta;

	// отмасштабируем при помощи CSS
	if (delta > 0) scale += 10;
	else scale -= 10;

	text.style.transform = text.style.WebkitTransform = text.style.MsTransform = 'scale(' + scale + ')';

	// отменим прокрутку
	e.preventDefault();
  });


