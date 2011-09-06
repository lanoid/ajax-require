define({
    "views/asset.html":{
        "event":"views-asset",
        "require":{
            "asset":"components/asset/asset",
        },
        "ajaxParams":{
            "type":"GET",
            "success":{
                "message":"Successful Load"
            }
        },
        "data":{
            
        }
    },
    
    "views/asset/details.html":{
        "event":"views-asset-details",
        "require":{
            "details":"components/asset/details"
        },
        "ajaxParams":{
            "type":"GET",
            "success":{
                "message":"Successful Load"
            }
        },
        "data":{
            
        }
    },
    
    "views/asset/clips.html":{
        "event":"views-asset-clips",
        "require":{
            "emp":"components/helpers/emp",
            "clip":"components/asset/clip",
        },
        "ajaxParams":{
            "type":"GET",
            "success":{
                "message":"Successful Load"
            }
        },
        "data":{
            
        }
    },
    
    "views/asset/images.html":{
        "event":"views-asset-images",
        "require":{
            "gallery":"components/helpers/gallery",
            "details":"components/asset/details"
        },
        "ajaxParams":{
            "type":"GET",
            "success":{
                "message":"Successful Load"
            }
        },
        "data":{
            
        }
    },
    
    "views/schedule.html": {
        "event":"schedule",
        "require":{
            "schedule":"components/schedule/schedule"
        },
        "ajaxParams":{
            "type":"GET",
            "success":{
                "message":"Successful Load"
            }
        },
        "data":{
            
        }
    }
});