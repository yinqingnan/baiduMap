  
  if( typeof map != 'undefined' ){
    map.addEventListener("zoomend", function(e){
      layer.msg('地图级别: '+map.getZoom() + (map.getZoom() > 14?', 示例中只有15级地图,超过的无法显示!':''), {'offset':'b'});
    });
  }
