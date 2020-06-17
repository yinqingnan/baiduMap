//  SOS描点模拟数据
var SOSnewGis = {
    strLongitude: "  106.552",
    strLatitude: "29.554666",
    strNum: "735106",
    strName: "张三",
    strPosition: "所长",
    strMobileNum: "18111184268",
    strHomeNum: 4247488,
    strCompanyNum: 4247488,
    lastDate: "2019年12月23日16:41:05",
    state: 0,
    label: 0,
    CallLine: 123,
}
var SOSoldGis = {
    // strLongitude: " 106.520",
    // strLatitude: "29.540",
    // strNum: "123465789",
    // strName: "张三",
    // strPosition: "所长",
    // strMobileNum: "18111184268",
    // strHomeNum: 4247488,
    // strCompanyNum: 4247488,
    // lastDate: "2019年12月23日16:41:05",
    // state: 0,
    // label: 0,
    // CallLine: 123,
}
var SOSclear = false;
var SOSnewGis1 = {
    strLongitude: "  106.565",
    strLatitude: "29.565",
    strNum: "735106",
    strName: "张三",
    strPosition: "所长",
    strMobileNum: "18111184268",
    strHomeNum: 4247488,
    strCompanyNum: 4247488,
    lastDate: "2019年12月23日16:41:05",
    state: 0,
    label: 0,
    CallLine: 123,
};
var SOSoldGis1 = {
    strLongitude: "  106.552",
    strLatitude: "29.554666",
    strNum: "735106",
    strName: "张三",
    strPosition: "所长",
    strMobileNum: "18111184268",
    strHomeNum: 4247488,
    strCompanyNum: 4247488,
    lastDate: "2019年12月23日16:41:05",
    state: 0,
    label: 0,
    CallLine: 123,
};



// TODO  SOS newSOS描点

function Api_SosTracePoint(newGis, oldGis, clear) {
    if (clear) {
        let allOverlay = map.getOverlays();
        for (let i = 0; i < allOverlay.length; i++) {
            //删除指定经度的点
            if (allOverlay[i].getPosition() != null) {
                if (allOverlay[i].getPosition().lng == oldGis.strLongitude) {
                    map.removeOverlay(allOverlay[i]);
                    return false;
                }
            }
        }
    } else {
        if (oldGis) { //判断旧的值是否为空
            let promise = new Promise(function (resolve, reject) {
                var allOverlay = map.getOverlays(oldGis);
                for (let i = 0; i < allOverlay.length; i++) {
                    if (allOverlay[i].getPosition() != null) {
                        if (allOverlay[i].getPosition().lng == oldGis.strLongitude) {
                            map.removeOverlay(allOverlay[i]); //清除当前的sos点
                            map.closeInfoWindow(); //关闭信息窗口
                        }
                        resolve()
                    }
                }
            })
            promise.then(() => {
                var myIcon = new BMap.Icon("image/SOS.png", new BMap.Size(50, 50));
                var point = new BMap.Point(newGis.strLongitude, newGis.strLatitude);
                var sosmarker = new BMap.Marker(point, {
                    icon: myIcon
                }); // 创建起点标注
                var label = new BMap.Label('SOS' + newGis.strNum, {
                    offset: new BMap.Size(20, -10)
                }); //新建声明label对象
                label.setStyle({
                    display: "none"
                })
                sosmarker.setLabel(label);
                map.centerAndZoom(point, 16);
                map.addOverlay(sosmarker); // 将标注添加到地图中
                SOSInfoWindow(newGis, sosmarker, point)
                // SOS弹窗信息
                function SOSInfoWindow(newGis, sosmarker, point) {
                    newGis.behavior = "'" + 'SOS' + "'"
                    let opts = {
                        width: 120, // 信息窗口宽度
                        height: 100, // 信息窗口高度
                    }
                    var name = "'" + newGis.strName + "'";
                    var html = [];
                    html.push("<ul>");
                    html.push('<li class="content">');
                    html.push('<div class="content_left" style="width:100%;display: block"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:100%"">报警时间:</h1> <h2 style="vertical-align:top;width:100%"">' + newGis.lastDate + ' </h2></div>');
                    html.push('</li>');
                    html.push('<li class="content_support">');
                    html.push('<button class="zy" onclick="support(' + newGis.strNum + ',' + newGis.CallLine + ',' + name + ',' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.behavior + ')">一键支援</button>');
                    html.push('<button class="jcjb"  onclick="Api_SosRelieve(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + name + ',' + newGis.strNum + ',' + newGis.behavior + ')">解除警报</button>');
                    html.push('</li>');
                    html.push("</ul>");
                    var infoWindow = new BMap.InfoWindow(html.join(""), opts); // 创建信息窗口对象
                    sosmarker.addEventListener("click", function () {
                        map.openInfoWindow(infoWindow, point); //开启信息窗口
                    });
                    sosmarker.setAnimation(BMAP_ANIMATION_BOUNCE); //让标点跳动的动画
                    // 5秒后取消跳动
                    setTimeout(() => {
                        sosmarker.setAnimation()
                    }, 5000);
                    map.openInfoWindow(infoWindow, point)
                }
            })
        }else{
            setTimeout(() => {
                var myIcon = new BMap.Icon("image/SOS.png", new BMap.Size(50, 50));
                var point = new BMap.Point(newGis.strLongitude, newGis.strLatitude);
                var sosmarker = new BMap.Marker(point, {
                    icon: myIcon
                }); // 创建起点标注
                var label = new BMap.Label('SOS' + newGis.strNum, {
                    offset: new BMap.Size(20, -10)
                }); //新建声明label对象
                label.setStyle({
                    display: "none"
                })
                sosmarker.setLabel(label);
                map.centerAndZoom(point, 16);
                map.addOverlay(sosmarker); // 将标注添加到地图中
                SOSInfoWindow(newGis, sosmarker, point)
                // SOS弹窗信息
                function SOSInfoWindow(newGis, sosmarker, point) {
                    newGis.behavior = "'" + 'SOS' + "'"
                    let opts = {
                        width: 120, // 信息窗口宽度
                        height: 100, // 信息窗口高度
                    }
                    var name = "'" + newGis.strName + "'";
                    var html = [];
                    html.push("<ul>");
                    html.push('<li class="content">');
                    html.push('<div class="content_left" style="width:100%;display: block"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:100%"">报警时间:</h1> <h2 style="vertical-align:top;width:100%"">' + newGis.lastDate + ' </h2></div>');
                    html.push('</li>');
                    html.push('<li class="content_support">');
                    html.push('<button class="zy" onclick="support(' + newGis.strNum + ',' + newGis.CallLine + ',' + name + ',' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.behavior + ')">一键支援</button>');
                    html.push('<button class="jcjb"  onclick="Api_SosRelieve(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + name + ',' + newGis.strNum + ',' + newGis.behavior + ')">解除警报</button>');
                    html.push('</li>');
                    html.push("</ul>");
                    var infoWindow = new BMap.InfoWindow(html.join(""), opts); // 创建信息窗口对象
                    sosmarker.addEventListener("click", function () {
                        map.openInfoWindow(infoWindow, point); //开启信息窗口
                    });
                    sosmarker.setAnimation(BMAP_ANIMATION_BOUNCE); //让标点跳动的动画
                    // 5秒后取消跳动
                    setTimeout(() => {
                        sosmarker.setAnimation()
                    }, 5000);
                    map.openInfoWindow(infoWindow, point)
                }
            }, 500);
        }
    }
}
// TODO 一键支援
var support = function (strNum, CallLine, strName, lng, lat, e) {
    Api_SosRelieve(e + strNum)
    var mPoint = new BMap.Point(lng, lat);
    let circle = new BMap.Circle(mPoint, 3000, {
        strokeColor: "red",
        fillColor: "",
        strokeStyle: "solid",
        fillOpacity: 0,
        strokeWeight: 5,
        fillOpacity: 0,
        strokeOpacity: 0,
        enableEditing: false
    });
    map.addOverlay(circle); //圆形添加到地图中
    let arrlist = []; //获取到的所有点对象
    let newobj = { //获取到的label和经纬度
        pint: [],
        label: []
    }
    let allOverlay = map.getOverlays();
    for (let i = 0; i < allOverlay.length - 1; i++) {
        if (allOverlay[i] instanceof BMap.Marker) {
            if (allOverlay[i].getLabel()) {
                arrlist.push(allOverlay[i].getPosition())
                newobj.pint.push(allOverlay[i].getPosition())
                newobj.label.push(allOverlay[i].getLabel().content)
            }
        }
    }
    strNum = strNum + ""
    let paramPhoneNums = [strNum];
    /**
     * @param e.overlay 当前绘制圆形对象
     * */
    // 需要一个整体数据来进行计算
    arrlist.forEach(function (value) {
        let bj = new BMap.Point(value.lng, value.lat)
        if (BMapLib.GeoUtils.isPointInCircle(bj, circle)) {
            // console.log(bj)                 //圈选中的点坐标
            var index = (newobj.pint || []).findIndex((item) => item.lat === bj.lat)
            if (index != undefined) {
                paramPhoneNums.push(newobj.label[index])
            }
        }
    });
    if (paramPhoneNums.length == 1) {
        layer.msg('该区域附近没有警员');
    } else {
        let Strarr = JSON.stringify(paramPhoneNums)
        G5BrowserFeatures.QuanSelectOfCreatGroup(Strarr) //浏览器方法
    }
    setTimeout(() => {
        map.removeOverlay(circle); //画完后清除所画对象
    }, 3000);
}

//  TODO 清除SOS
var Api_SosRelieve = function (strLongitude, b, c, d, e) {
    var allOverlay = map.getOverlays();
    for (let i = 0; i < allOverlay.length; i++) {
        if (allOverlay[i] instanceof BMap.Marker) {
            if (allOverlay[i].getLabel()) {
                if (allOverlay[i].getLabel().content == e + d) {
                    map.closeInfoWindow(); //关闭信息窗口
                    map.removeOverlay(allOverlay[i]); //清除当前的sos点
                } else if (allOverlay[i].getLabel().content == strLongitude) {
                    map.closeInfoWindow(); //关闭信息窗口
                    map.removeOverlay(allOverlay[i]); //清除当前的sos点
                }
            }
        }
    }
}
//SOS描点新
$(".NEWSOS").click(function () {
    Api_SosTracePoint(SOSnewGis, null, SOSclear) //SOS瞄点测试
})
//SOS描点新
$(".NEWSOS1").click(function () {
    Api_SosTracePoint(SOSnewGis1, SOSoldGis1, SOSclear) //SOS瞄点测试
})