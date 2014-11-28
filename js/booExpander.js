/**
 * @Name: booExpander.js
 * @date: 28/11/2014
 * @author: Noemi Losada Estrella <info@noemilosada.com>
 * Creative Commons License <http://creativecommons.org/licenses/by-sa/3.0/>
 */

(function() {

    /**
     * Default options which will be
     * override by the given ones
     *
     * @property defaults
     * @type {Object}
     */
    var defaults = {
        speed: 200,
        state: 0,
        element: 'a'
    };

    /**
     * Config elements
     *
     * @property config
     * @type {Object}
     */
    var config = {
        content: '.boo-expander-content',
        dataAttr: 'boo-show',
        more: 'more',
        less: 'less'
    };

    /**
     * Main expander plugin function
     *
     * Usage:
     * $('.booExpander').booExpander({
     *     speed: 500,
     *     state: 1
     * });
     *
     * @method booExpander 
     * @return {Object} this
     */
    $.fn.booExpander = function() {
        // Initialize the plugin with the given arguments
        init.apply(this, arguments);

        return this;
    };

    /**
     * Initialise instance and extend
     * the given options
     *
     * @method init
     * @param {Object} opts
     * @return {void}
     */
    function init(opts) {
        var options = $.extend({}, defaults, opts);
        this.data(options);

        effects($(this), options);
    }

    /**
     * Main function with the moreless animation
     *
     * @method effects
     * @param {Object} opts
     * @return {void}
     */
    function effects(selector, opts) {
        // Set initial state
        setState(selector, opts);

        // Run the effects on click the element
        selector.on('click', opts.element, function(e) {
            e.preventDefault();

            if ($(this).data(config.dataAttr) === config.more) {
                $(this).siblings(config.content).slideDown(opts.speed);
            } else {
                $(this).siblings(config.content).slideUp(opts.speed);
            }

            $(this).hide().siblings(opts.element).show();
        });
    }

    /**
     * Prepare initial display based on the state option
     *
     * @method setState 
     * @param {Object} selector
     * @param {Object} opts
     * @return {void}
     */
    function setState(selector, opts) {
        if (opts.state === 1) {
            selector.find('[data-' + config.dataAttr + '="' + config.more + '"]').hide();
        } else {
            selector.find(config.content).hide();
            selector.find('[data-' + config.dataAttr + '="' + config.less + '"]').hide();
        }
    }

})();
