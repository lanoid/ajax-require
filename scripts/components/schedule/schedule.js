define(['jquery'], function($){
    var schedule = {};
    
    var init = function(){
        events.bind('require:schedule',function(){
            schedule.view.eventTriggered();
        });
    };
    
    schedule.view = {
        eventTriggered : function(){
            console.log('Re-intialised the js in this page');
        }
    };
    
    $(function(){
       init(); 
    });
    
    return schedule;
});