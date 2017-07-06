/**
 * find closest matched selector
 */
export const closest = (el, selector) => {
  el = getElement(el)
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector

  while (el) {
    if (matchesSelector.call(el, selector)) {
      break
    }
    el = el.parentElement
  }
  return el
}

/**
 * detect PanDetect
 */
export const panDetect = (callback) => {
  // credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
  let xDown = null
  let yDown = null
  let startTarget = null

  document.addEventListener('touchstart', handleTouchStart, false)
  document.addEventListener('touchmove', handleTouchMove, false)

  function handleTouchStart (evt) {
    startTarget = evt.target
    xDown = evt.touches[0].clientX
    yDown = evt.touches[0].clientY
  };

  function handleTouchMove (evt) {
    if (!xDown || !yDown) {
      return
    }

    let xUp = evt.touches[0].clientX
    let yUp = evt.touches[0].clientY

    let xDiff = xDown - xUp
    let yDiff = yDown - yUp

    let direction = 'none'

    if (Math.abs(xDiff) > Math.abs(yDiff)) { /* most significant*/
      if (xDiff > 0) {
        /* left swipe */
        direction = 'left'
      } else {
        /* right swipe */
        direction = 'right'
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
        direction = 'up'
      } else {
        /* down swipe */
        direction = 'down'
      }
    }
    /* reset values */
    xDown = null
    yDown = null

    callback({
      direction,
      startTarget
    }, unregister)
  };

  function unregister () {
    document.removeEventListener('touchstart', handleTouchStart)
    document.removeEventListener('touchmove', handleTouchMove)
  }
}

function getElement (el) {
  return Object.prototype.toString.call(el) === '[object String]' ? document.queryel(el) : el
}
