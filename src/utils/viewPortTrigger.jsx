'use client';
import $ from 'jquery'; // Import jQuery
import React, { useEffect } from 'react';

export function ViewportTrigger() {
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
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = windowTopPosition + windowHeight;

        $.each($animationElements, function () {
          var $element = $(this);
          var elementHeight = $element.outerHeight();
          var elementTopPosition = $element.offset().top;
          var elementBottomPosition = elementTopPosition + elementHeight;
          if (elementBottomPosition >= windowTopPosition && elementTopPosition <= windowBottomPosition) {
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
