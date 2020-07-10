// TODO 工具栏绘制操作
var styleOptions = {
    strokeColor: "red", //边线颜色。
    fillColor: "#green", //填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3, //边线的宽度，以像素为单位。
    strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
    fillOpacity: 0.3, //填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' //边线的样式，solid或dashed。
}
var myDrawpolygon = new BMapLib.DrawingManager(map, {
    isOpen: false, //是否开启绘制模式
    enableDrawingTool: false, //是否显示工具栏
    drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
        offset: new BMap.Size(5, 5), //偏离值
    },
    circleOptions: styleOptions, //圆的样式
    polygonOptions: styleOptions, //多边形的样式
    rectangleOptions: styleOptions //矩形的样式
});
var Polygon
var PolygonPoint
var state = true
function DrawPOLYGON(type,num) {
    if(state){
        state = false
        myDrawpolygon.close();
        myDrawpolygon.open();
        myDrawpolygon.setDrawingMode(type);


        if(num=='Enclosure'){            //todo   电子围栏绘制
            myDrawpolygon.addEventListener('overlaycomplete', overlaycomplete);
            function overlaycomplete(e) {
                myDrawpolygon.close();                      //关闭画图
                Polygon=e.overlay                     //多边形覆盖物本身
                PolygonPoint = e.overlay.getPath()    //多边形坐标点集合
                setTimeout(() => {
                    map.removeOverlay(Polygon); //画完后清除所画对象
                    state = true
                }, 1000);
                let Str = JSON.stringify(PolygonPoint)
                G5BrowserFeatures.CreateElectricfence(Str)
                myDrawpolygon.removeEventListener('overlaycomplete', overlaycomplete)
            }
            
        }else if(num=='Tool'){      //todo   工具栏绘制
            //添加鼠标绘制工具监听事件，用于获取绘制结果
            myDrawpolygon.addEventListener('overlaycomplete', overlaycomplete);
            function overlaycomplete(e) {
                myDrawpolygon.close(); //关闭画图
                let Polygon=e.overlay //多边形覆盖物本身
                let PolygonPoint = e.overlay.getPath()    //多边形坐标点集合
                setTimeout(() => {
                    map.removeOverlay(Polygon); //画完后清除所画对象
                    state = true
                }, 1000);
                let Str = JSON.stringify(PolygonPoint)
                // 双击完成绘制后弹出框Save_area
                G5BrowserFeatures.CreateGisArea(Str, map.getZoom());
                myDrawpolygon.removeEventListener('overlaycomplete', overlaycomplete)
            }
        }
    }else{
        layer.alert('请先结束绘制', {title: '提示'})
    }

}


