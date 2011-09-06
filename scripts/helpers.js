/**
 * Core Helpers
 */
define(['jquery','ajax'], function($,ajax){
    var helpers = {
    };
    
    var init = function(){
        helpers.genericHide();
        
        $('.require').live('click',function(e){
            e.preventDefault();
            helpers.handleAjaxUrl($(this));
        });
    };
    
    helpers = {
        handleAjaxUrl : function(link){
            ajax.requireObject(link);
        },
        
        genericHide : function(){
            $('.jshide').hide();
        }
    };
    
    $(function(){
       init(); 
    });
    
    return helpers;
});