import { useEffect } from 'react'

function ScrollAnimation(selector) {
  return (
    useEffect(() => {
        const $window = window;
        const $animationElements = document.querySelectorAll(`.${selector}`);
    
        const checkIfInView = () => {
          const window_height = $window.innerHeight;
          const window_top_position = $window.pageYOffset;
          const window_bottom_position = window_top_position + window_height;
    
          $animationElements.forEach((element) => {
            const $element = element;
            const element_height = $element.offsetHeight;
            const element_top_position = $element.offsetTop;
            const element_bottom_position = element_top_position + element_height;
    
            // Check if the current container is within the viewport
            if (
              element_bottom_position >= window_top_position &&
              element_top_position <= window_bottom_position
            ) {
              $element.classList.add('in-view');
            } else {
              $element.classList.remove('in-view');
            }
          });
        };
    
        $window.addEventListener('scroll', checkIfInView);
        $window.addEventListener('resize', checkIfInView);
        checkIfInView(); // Trigger check when component mounts
    
        return () => {
          $window.removeEventListener('scroll', checkIfInView);
          $window.removeEventListener('resize', checkIfInView);
        };
      }, [selector])
  )
}

export default ScrollAnimation