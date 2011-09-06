/**
 * Ajax Library
 */
define(['jquery','url.map','events'], function($,map,events){    
    ajax = {};
    
    var init = function(){
    };
    
    ajax.requireObject = function(link){
        var url = link.attr('href');
        var target = link.attr('rel');
        $(target).load(
            url,
            function(status){
                ajax.handleErrors(status);
                var requireArray = new Array();
                var functionName = new Array();
                $.each(map[url].require,function(i, v){
                    requireArray.push(v);
                    functionName.push(i);
                });
                events.trigger('require:'+map[url].event);
                require(requireArray,function(functionName){});
            }
        );
    };
    
    ajax.handleErrors = function(response, status, xhr){
        if('error' === status){
            console.log(response);
            console.log(status);
            console.log(xhr);
        }
    };
    
    $(function(){
       init(); 
    });
    
    return ajax;
});