define(['jquery'], function($){
    var asset = {};
    
    var init = function(){
        asset.view.viewFunction();
    };
    
    asset.controller = {
        controllerFunction : function(){
            console.log('Calling a method on the fly');
        }
    };
    
    asset.view = {
        viewFunction : function(){
            asset.controller.controllerFunction();
        }
    };
    
    $(function(){
       init(); 
    });
    
    return asset;
});