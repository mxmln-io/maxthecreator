import { useEffect, useRef } from 'react';
import { throttle } from 'lodash'; // Make sure to install lodash for throttling

const CursorAnimation = () => {
  const imageCounts = { up: 4, down: 4, left: 4, right: 4 }; // Assuming 4 images per direction
  const directionRef = useRef('');
  const imageIndexRef = useRef(1);

  useEffect(() => {
    const updateCursor = throttle((e) => {
      const { clientX: x, clientY: y } = e;
      const deltaX = x - window.innerWidth / 2;
      const deltaY = y - window.innerHeight / 2;
      
      let direction = 'down';
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        direction = deltaX > 0 ? 'right' : 'left';
      } else {
        direction = deltaY > 0 ? 'down' : 'up';
      }

      if (direction !== directionRef.current) {
        imageIndexRef.current = 1;
        directionRef.current = direction;
      } else {
        imageIndexRef.current = (imageIndexRef.current < imageCounts[direction] ? imageIndexRef.current + 1 : 1);
      }

      const imageName = `${direction}${imageIndexRef.current}.png`;
      const imagePath = `/img/ash_move/${imageName}`;
      document.body.style.cursor = `url('${imagePath}'), auto`;
    }, 100); // Throttle updates to every 100ms

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return null; // This component does not render anything
};

export default CursorAnimation;
