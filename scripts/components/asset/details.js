define(['jquery', 'events'], function($, events, controller){
    var details = {};
    
    var init = function(){
        events.bind('require:views-asset-details', function(){
            details.view.loadCall();
        });
        
        details.view.loadCall();
    };
    
    // loadCall can be requested by the init or by the bound reload event
    details.view = {
        loadCall : function(){
            $('#details dd').hide();
            $('#details dt').toggle(function(){
                $('#details dt').next('dd').show();
            },function(){
                $('#details dt').next('dd').hide();
            });
        }
    };
    
    $(function(){
       init(); 
    });
    
    return details;
});