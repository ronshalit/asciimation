(function () {
    jQuery.fn.asciimation = function (customOptions) {
        
        var _settings = {
            frames: ['—', '\\', '|', '/'],
            interval: 200
        }
        function spinnerStart(that,options) {
            var i = 0;
            interval = setInterval(function () {
                that.html(options.frames[i++ % options.frames.length]);
            }, options.interval);
            that.data("asciimation.interval", interval);
        }

        if (typeof customOptions === 'object' || typeof customOptions=== 'undefined') {
            var options = $.extend(_settings, customOptions||{});
            spinnerStart(this, options);
        }

        if (customOptions === 'destroy') {
            clearInterval(this.data("asciimation.interval"));
            this.html("");
        }

    }
})();
