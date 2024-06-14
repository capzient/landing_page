'use client';
import $ from 'jquery'; // Import jQuery
import React, { useEffect } from 'react';

function ViewportTrigger() {
  useEffect(() => {
    $(document).ready(function () {
      var $animationElements = $('.animation-element');
      var $window = $(window);

      var isMobile = window.matchMedia('only screen and (max-width: 768px)');
      if (isMobile.matches) {
        $animationElements.removeClass('animation-element');
      }

      function checkIfInView() {
        var windowHeight = $window.height();
        var windowWidth = $window.width();
        var windowTopPosition = $window.scrollTop();
        var windowLeftPosition = $window.scrollLeft();
        var windowBottomPosition = windowTopPosition + windowHeight;
        var windowRightPosition = windowLeftPosition + windowWidth;

        $.each($animationElements, function () {
          var $element = $(this);
          var elementHeight = $element.outerHeight();
          var elementWidth = $element.outerWidth();
          var elementTopPosition = $element.offset().top;
          var elementLeftPosition = $element.offset().left;
          var elementBottomPosition = elementTopPosition + elementHeight;
          var elementRightPosition = elementLeftPosition + elementWidth;

          // Check if the current container is within the viewport
          if (
            elementBottomPosition >= windowTopPosition &&
            elementTopPosition <= windowBottomPosition &&
            elementRightPosition >= windowLeftPosition &&
            elementLeftPosition <= windowRightPosition
          ) {
            $element.addClass('in-view');
          } else {
            $element.removeClass('in-view');
          }
        });
      }

      $window.on('scroll resize', checkIfInView);
      $window.trigger('scroll');
    });
  }, []); // Empty dependency array to run the effect only once

  return <div></div>;
}

export default ViewportTrigger;
