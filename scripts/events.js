/**
 * @name events
 * @description A library of globally registered custom events
 * @author Lucy Barker & Kevin Bennett
 */

define(['jquery'], function($){
    events = {};
    
    var listeners={},
        superListeners = [],
        nextEventId = 0;
        
    function generateEventId() {
        return ++nextEventId;
    }
    
    events = {
        /**
         * Bind a listener to a global event, optionally passing a scope for execution
         * @usage events.bind('myCustomEvent', function(e){alert(e.message)}, this);
         */
        bind: function(eventName, handler, context) {
            var eventId;
            
            if (!listeners.hasOwnProperty(eventName)) {
                listeners[eventName] = [];
            }
            eventId = generateEventId();
            listeners[eventName][eventId] = {handler: handler, context: (context) ? context : window};
            return eventId;
        },
        
        /**
         * Like bind(), binds a listener to a global event but immediately unbind() the listener when the callback has triggered for the first time
         * @usage events.bindOnce('myCustomEvent', function(e){alert(e.message)}, this);
         */
        bindOnce: function(eventName, handler, context) {
            var tempEvent = events.bind(eventName, function() {
                events.unbind(tempEvent);
                handler.apply(context, arguments);
            }); 
            return tempEvent;
        },
        
        /**
         * Like bind() but does not require an event name, instead binds to every event and passes the eventName as the first parameter of the callback method
         *
         */
        bindAll: function(handler, context) {
            superListeners.push({handler: handler, context: (context) ? context : window});
        },
        
        /**
         * Unbind or remove an event
         * @usage events.unbind(myEvent);
         */
        unbind: function(eventId) {
            var l;
            for(l in listeners) {
                if(listeners[l].hasOwnProperty(eventId)) {
                    delete listeners[l][eventId];
                    return true;
                }
            }
            return false;
        },
        
        /**
         * Trigger an event such that all listeners will be fired
         * @usage events.trigger('myCustomEvent', {customData: 'value'});
         * @return boolean true unless any of the listenting methods return false, in which case false
         */
        trigger: function(eventName, object) {
            var l, s, success = true;
            if (listeners.hasOwnProperty(eventName)) {
                for(l in listeners[eventName]) {
                    if (listeners[eventName][l].handler.call(listeners[eventName][l].context, object) === false){
                        success = false;
                    };
                }
            }
        
            for (s in superListeners) {
                if (superListeners[s].handler.call(superListeners[s].context, eventName, object) === false) {
                    success = false;
                }
            }
            return success;
        }
    };
    
    /**
     * Default events for all implementing pages
     */
     
    /**
     * window:unload event
     * Triggered when the user navigates away from the current page
     */
    $(window).unload(function() {
        return events.trigger('window:unload');
    });
    
    return events;
});