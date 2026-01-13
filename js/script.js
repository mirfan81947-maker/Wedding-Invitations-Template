"use strict";

    // M Irfan Bhai, yahan maine aapki date set kar di hai
    simplyCountdown('.simply-countdown-one', {
        year: 2035,        // Saal
        month: 1,          // Mahina (January)
        day: 5,            // Tareekh
        enableUtc: false
    });

    // inline example
    simplyCountdown('.simply-countdown-inline', {
        year: 2035,
        month: 1,
        day: 5,
        inline: true
    });

    //jQuery example
    $('#simply-countdown-losange').simplyCountdown({
        year: 2035,
        month: 1,
        day: 5,
        enableUtc: false
    });


    //countdown finish

    //scrolling-nav

    $(document).ready(function(){
    $(".menu").sticky({topSpacing:0});
    });

    //scrolling nav finish

            $(document).ready(function() {
            /*
            var defaults = {
                containerID: 'toTop', // fading element id
                containerHoverID: 'toTopHover', // fading element hover id
                scrollSpeed: 1200,
                easingType: 'linear' 
            };
            */
            
            $().UItoTop({ easingType: 'easeOutQuart' });
            
        });
