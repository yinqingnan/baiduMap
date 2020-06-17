// TODO圈选功能绘制
var styleOptions = {
    strokeColor: "#2e77e5", //边线颜色。
    fillColor: 'rgba(153, 187, 255,0.8)', //填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3, //边线的宽度，以像素为单位。
    strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
    fillOpacity: 0.2, //填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' //边线的样式，solid或dashed。
}
var myDrawingManagerObject = new BMapLib.DrawingManager(map, {
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

function draw(type) {
    myDrawingManagerObject.open();
    myDrawingManagerObject.setDrawingMode(type);
}
//添加鼠标绘制工具监听事件，用于获取绘制结果
myDrawingManagerObject.addEventListener('overlaycomplete', overlaycomplete);
function overlaycomplete(e) {
    myDrawingManagerObject.close(); //关闭画图
    var drawingModeType = e.drawingMode; //获取所画图形类型
    var arrlist = []; //获取到的所有点对象
    var newobj = { //获取到的label和经纬度
        pint: [],
        label: []
    }
    var allOverlay = map.getOverlays();
    for (var i = 0; i < allOverlay.length - 1; i++) {
        if (allOverlay[i] instanceof BMap.Marker) {
            if (allOverlay[i].getLabel()) {
                arrlist.push(allOverlay[i].getPosition())
                newobj.pint.push(allOverlay[i].getPosition())
                newobj.label.push(allOverlay[i].getLabel().content)
            }
        }
    }
    let paramPhoneNums = [];
    // 需要一个整体数据进行判断
    arrlist.forEach(function (value) {
        let bj = new BMap.Point(value.lng, value.lat)
        if (drawingModeType == "circle") {
            if (BMapLib.GeoUtils.isPointInCircle(bj, e.overlay)) {
                // console.log(e.overlay)
                // console.log(bj)                 //圈选中的点坐标
                var index = (newobj.pint || []).findIndex((item) => item.lat === bj.lat)
                if (index != undefined) {
                    paramPhoneNums.push(newobj.label[index])
                }
            }
        }
    });
    let Strarr = JSON.stringify(paramPhoneNums)
    setTimeout(() => {
        map.removeOverlay(e.overlay); //画完后清除所画对象
    }, 2000);
    G5BrowserFeatures.QuanSelectOfCreatGroup(Strarr) 
}