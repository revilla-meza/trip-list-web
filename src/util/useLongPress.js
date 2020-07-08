import { useCallback, useRef, useState } from 'react';

// cool hook found on https://stackoverflow.com/questions/48048957/react-long-press-event

/* 
  it binds a callback(on long press) to the mouse down and touch start events. 
  The callback sets a timer with a given delay in miliseconds. 

  Then binds another callback to such events ending. This "clearing" callback will check if the
  long press callback was fired. 

  If nit wasn't, it will clear the timeout and let the event be a normal click event unless the mouse leaves the element before. 
*/

const isTouchEvent = (event) => {
  return 'touches' in event;
};

const preventDefault = (event) => {
  if (!isTouchEvent(event)) return;

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

const useLongPress = (onLongPress, onClick, { shouldPreventDefault = true, delay = 300 } = {}) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef();
  const target = useRef();

  const start = useCallback(
    (event) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault],
  );

  const clear = useCallback(
    (event, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onClick();
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered],
  );

  return {
    onMouseDown: (e) => start(e),
    onTouchStart: (e) => start(e),
    onMouseUp: (e) => clear(e),
    onMouseLeave: (e) => clear(e, false),
    onTouchEnd: (e) => clear(e),
  };
};

export default useLongPress;
