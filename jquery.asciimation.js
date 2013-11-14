/*
  Author: Ron Shalit 2013
  Purpose: show nice ascii animations instead of plain animated gifs that nobody likes
*/
(function () {
    jQuery.fn.asciimation = function (customOptions) {
        
        var _settings = {
            frames: ['―', '\\', '|', '/'],
            interval: 200
        }
        
        function spinnerStart(that,options) {
            var i = 0;
            interval = setInterval(function () {
                that.html(options.frames[i++ % options.frames.length]);
            }, options.interval);
            that.data("asciimation.interval", interval);
        }
        
        // if custom options were supplied, or no options at all, start spinning the animation
        if (typeof customOptions === 'object' || typeof customOptions=== 'undefined') {
            var options = $.extend(_settings, customOptions||{});
            spinnerStart(this, options);
        }
        
        // if the argument was "destroy", the stop the animation and clear the content
        if (customOptions === 'destroy') {
            var int = this.data("asciimation.interval");
            if(int)
                clearInterval(int);
            this.html("");
        }

    }
})();
