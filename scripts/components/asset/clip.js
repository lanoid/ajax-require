define(['jquery', 'components/helpers/emp'], function($, emp){
    var clip = {};
    
    var init = function(){
        clip.view.testEmpIsLoaded();
    };
    
    clip.controller = {};
    
    clip.view = {
        testEmpIsLoaded : function(){
            emp;
        }
    };
    
    $(function(){
       init(); 
    });
    
    return clip;
});