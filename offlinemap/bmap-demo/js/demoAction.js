var points = [];
var userinfoAry = [];
var userinfoIndex = 0;


function All_clear() {
    clear()
}

//删除所有点
function clear() {
    map.clearOverlays();
}

// 线框样式
var styleOptions = {
    strokeColor: "blue", //边线颜色。
    fillColor: "blue", //填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3, //边线的宽度，以像素为单位。
    strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
    fillOpacity: 0.2, //填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' //边线的样式，solid或dashed。
};

// 语音
function Voice(a, b, c, d) {
    let obj = {
        strLongitude: a,
        strLatitude: b,
        strNum: c,
        strName: d
    };
    G5BrowserFeatures.VoiceCall(JSON.stringify(obj));
}

// 视频
function Video(a, b, c, d) {
    let obj = {
        strLongitude: a,
        strLatitude: b,
        strNum: c,
        strName: d
    };
    G5BrowserFeatures.VideoCall(JSON.stringify(obj));

}

// 监控
function Monitor(a, b, c, d) {
    let obj = {
        strLongitude: a,
        strLatitude: b,
        strNum: c,
        strName: d
    };
    // console.log(obj);
    G5BrowserFeatures.Monitor(JSON.stringify(obj));
}

// 跟踪
var index = 0

function Track(a, b, c, d) {
    let obj = {
        strLongitude: a,
        strLatitude: b,
        strNum: c,
        strName: d
    };

    let allOverlay = map.getOverlays();
    for (let i = 0; i < allOverlay.length - 1; i++) {
        if (allOverlay[i] instanceof BMap.Marker) {
            if (allOverlay[i].getPosition().lng == a && allOverlay[i].getPosition().lat == b) {
                map.closeInfoWindow(); //关闭信息窗口
                map.removeOverlay(allOverlay[i]); //删除指定坐标
            }
        }
    }
    G5BrowserFeatures.Track(JSON.stringify(obj));
}

// 监听
function Information(a, b, c, d) {
    let obj = {
        strLongitude: a,
        strLatitude: b,
        strNum: c,
        strMobileNum: d
    };
    G5BrowserFeatures.MonitorListen(JSON.stringify(obj));
}

//公告
function Notice(a, b, c, d) {
    let obj = {
        strLongitude: a,
        strLatitude: b,
        strNum: c,
        strName: d
    };
    G5BrowserFeatures.MessageNotification(JSON.stringify(obj));
}

//实例化鼠标绘制工具
var myDrawingManagerObject = new BMapLib.DrawingManager(map, {
    isOpen: false, //是否开启绘制模式
    enableDrawingTool: false, //是否显示工具栏
    drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
        offset: new BMap.Size(5, 5), //偏离值
    },
    circleOptions: styleOptions, //圆的样式
    polylineOptions: styleOptions, //线的样式
    polygonOptions: styleOptions, //多边形的样式
    rectangleOptions: styleOptions //矩形的样式
});


// TODO 普通描点模拟数据
var newGis = {
    "strNum": "735106",
    "strName": "阿布都热西提皮皮买买提阿布都热西提皮皮买买提阿布都热西提皮皮买买提阿布都热西提皮皮买买提阿布都热西提皮皮买买提",
    "strPosition": "123asdasd阿斯达四大所大所大所大所大所多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多",
    "strMobileNum": "阿斯达四大所大所大所大所大所多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多",
    "strHomeNum": "230987",
    "strCompanyNum": "789",
    "id": "735106",
    "strLongitude": " 106.552",
    "strLatitude": "29.554666",
    "strHigh": null,
    "lastDate": "2020-04-22 10:48:56",
    "state": true,
    "deptName": "ssssaaaa"
}
var oldGis1 = {
    "strNum": "735106",
    "strName": "阿布都热西提皮皮买买提阿布都热西提皮皮买买提阿布都热西提皮皮买买提阿布都热西提皮皮买买提阿布都热西提皮皮买买提",
    "strPosition": "123asdasd阿斯达四大所大所大所大所大所多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多",
    "strMobileNum": "阿斯达四大所大所大所大所大所多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多",
    "strHomeNum": "230987",
    "strCompanyNum": "789",
    "id": "735106",
    "strLongitude": " 106.552",
    "strLatitude": "29.554666",
    "strHigh": null,
    "lastDate": "2020-04-22 10:48:56",
    "state": true,
    "deptName": "ssssaaaa"
}
var oldGis = {
    // strLongitude: " 106.520",
    // strLatitude: "29.550",
    // strNum: "123465789",
    // strName: "张三",
    // strPosition: "所长",
    // strMobileNum: "18111184268",
    // strHomeNum: 4247488,
    // strCompanyNum: 4247488,
    // lastDate: "2019年12月23日16:41:05",
    // state: 0,
    // label: 0,
    // "deptName":"辣鸡"

}
var clear = false
var showMarker = false

var newGis2 = {
    "strNum": "735106",
    "strName": "阿布都热西提皮皮买买提阿布都热西提皮皮买买提阿布都热西提皮皮买买提阿布都热西提皮皮买买提阿布都热西提皮皮买买提",
    "strPosition": "123asdasd阿斯达四大所大所大所大所大所多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多",
    "strMobileNum": "阿斯达四大所大所大所大所大所多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多",
    "strHomeNum": "230987",
    "strCompanyNum": "789",
    "id": "735106",
    "strLongitude": " 106.600",
    "strLatitude": "29.556",
    "strHigh": null,
    "lastDate": "2020-04-22 10:48:56",
    "state": true,
    "deptName": "ssssaaaa"
}



//普通描点
$(".normal").click(function () {
    Api_TracePoint(newGis, oldGis, false, showMarker)
})
$(".normal2").click(function () {
    Api_TracePoint(newGis2, oldGis1, false, showMarker)
})

/**
 *  TODO  地图普通描点
 * @param {Object} newGis 新的Gis对象
 * @param {Object} oldGis 原来的Gis对象
 * @param {boolean} clear 是否清除该执法仪的坐标点，注意当为 true 时，newGis为null, 只需要删除 oldGis 地图描点即可
 * @param {boolean} showMarker 绘制完坐标点后，是否显示 marker 详细信息
 */
var Api_TracePoint = function (newGis, oldGis, clear, showMarker) {
    map.closeInfoWindow(); //关闭信息窗口
    if (TrackingID == newGis.id) {
        return false
    } else {
        if (clear) {
            var allOverlay = map.getOverlays();
            for (var i = 0; i < allOverlay.length; i++) {
                //删除指定经度的点
                if (allOverlay[i] instanceof BMap.Marker) {
                    if (allOverlay[i].getLabel() != null) { //通过id删除
                        if (allOverlay[i].getLabel().content == newGis.id) {
                            map.removeOverlay(allOverlay[i]);
                        }
                    }
                    if(allOverlay[i].getPosition()!=null){
                        if (allOverlay[i].getPosition().lng == newGis.strLongitude) {
                            map.removeOverlay(allOverlay[i]);
                            map.closeInfoWindow(); //关闭信息窗口
                        }
                    }
                }
            }
        } else {
            if (oldGis) {
                var promise = new Promise(function (resolve, reject) {
                    var allOverlay = map.getOverlays();
                    for (var i = 0; i < allOverlay.length; i++) {
                        if (allOverlay[i] instanceof BMap.Marker) {
                            if (allOverlay[i].getLabel() != null) { //通过id删除
                                if (allOverlay[i].getLabel().content == oldGis.id) {
                                    map.removeOverlay(allOverlay[i]);
                                    map.closeInfoWindow(); //关闭信息窗口
                                }
                            }
                            if(allOverlay[i].getPosition()!=null){
                                if (allOverlay[i].getPosition().lng == oldGis.strLongitude) {
                                    map.removeOverlay(allOverlay[i]);
                                    map.closeInfoWindow(); //关闭信息窗口
                                }
                            }
                            resolve()
                        }
                    }
                })
                promise.then(() => {
                    var point = new BMap.Point(newGis.strLongitude, newGis.strLatitude);
                    let state = newGis.state
                    if (state == 0) {
                        var myIcon = new BMap.Icon("image/lx.png",
                            new BMap.Size(30, 30), {
                                offset: new BMap.Size(100, 100),
                            });
                    } else if (state == 1) {
                        var myIcon = new BMap.Icon("image/zx.png",
                            new BMap.Size(40, 40), {
                                offset: new BMap.Size(30, 50),
                            });
                    }
                    var markerArr = new BMap.Marker(point, {
                        icon: myIcon
                    });
                    map.addOverlay(markerArr); //将标注添加到地图中
                    markerArr.addEventListener("click", function (e) {
                        normalInfoWindow(newGis, markerArr, point, e);
                    });

                    function normalInfoWindow(res, sosmarker, point, showMarker) {
                        let opts = {
                            width: 320, // 信息窗口宽度
                            height: 222, // 信息窗口高度
                            title: "<h1 title=" + '  ' + newGis.strName + ' ' + ">" + res.strName + '<h2>' + '(' + res.strNum + ')' + '</h2>' + "</h1>", // 信息窗口标题
                        };
                        var html = [];
                        // 内层文字
                        html.push('<ul>');
                        html.push('<li class="content">');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">通讯号:</h1> <h2 style="vertical-align:top;">' + newGis.strNum + ' </h2></div>');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">部门:</h1> <h2 style="vertical-align:top;overflow:hidden;white-space:nowrap;text-overflow:ellipsis"  title="' + newGis.deptName + '">' + newGis.deptName + ' </h2></div>');
                        html.push('</li>');

                        html.push('<li class="content">');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">职位:</h1> <h2 style="vertical-align:top;"  title="' + newGis.strPosition + '">' + newGis.strPosition + ' </h2></div>');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">手机:</h1> <h2 style="vertical-align:top;"  title="' + newGis.strMobileNum + '">' + newGis.strMobileNum + ' </h2></div>');
                        html.push('</li>');

                        html.push('<li class="content">');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">经度:</h1> <h2 style="vertical-align:top;">' + newGis.strLongitude + ' </h2></div>');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">纬度:</h1> <h2 style="vertical-align:top;">' + newGis.strLatitude + ' </h2></div>');
                        html.push('</li>');

                        html.push('<li class="content">');
                        html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">位置:</h1> <h2 style="vertical-align:top;width:70%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color:red"  >' + '离线模式无法显示位置信息' + ' </h2></div>');

                        html.push('</li>');

                        html.push('<li class="content">');
                        html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">上报时间:</h1> <h2 style="vertical-align:top; width:70%;color:#ff6600;">' + newGis.lastDate + ' </h2></div>');
                        html.push('<li class="content">');
                        html.push('<button class="Voice" onclick="Voice(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">语音</button>');
                        html.push('<button class="Video" onclick="Video(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">视频</button>');
                        html.push('<button class="Monitor" onclick="Monitor(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">监控</button>');
                        html.push('<button class="Track" onclick="Track(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">跟踪</button>');
                        html.push('<button class="Information" onclick="Information(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">监听</button>');
                        html.push('<button class="Information" onclick="Notice(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">公告</button>');
                        html.push('</li>');
                        html.push('</ul>');
                        var infoWindow = new BMap.InfoWindow(html.join(""), opts); // 创建信息窗口对象
                        sosmarker.addEventListener("click", function () {
                            map.openInfoWindow(infoWindow, point); //自动开启信息窗口
                        });
                        map.centerAndZoom(point, 19) //描点自动居中
                        if (showMarker) {
                            map.openInfoWindow(infoWindow, point); //开启信息窗口
                            map.centerAndZoom(point, 19); //描点自动居中
                        }
                    }
                })
            }
            setTimeout(() => {
                var point = new BMap.Point(newGis.strLongitude, newGis.strLatitude);
                let state = newGis.state
                if (state == 0) {
                    var myIcon = new BMap.Icon("image/lx.png",
                        new BMap.Size(30, 30), {
                            offset: new BMap.Size(100, 100),
                        });
                } else if (state == 1) {
                    var myIcon = new BMap.Icon("image/zx.png",
                        new BMap.Size(40, 40), {
                            offset: new BMap.Size(30, 50),
                        });
                }
                var markerArr = new BMap.Marker(point, {
                    icon: myIcon
                });
                var label = new BMap.Label(newGis.strNum, {
                    offset: new BMap.Size(20, -10)
                }); //新建声明label对象
                label.setStyle({
                    display: "none"
                })

                markerArr.setLabel(label);

                map.addOverlay(markerArr); //将标注添加到地图中

                markerArr.addEventListener("click", function () {
                    normalInfoWindow(newGis, markerArr, point);
                });

                function normalInfoWindow(res, sosmarker, point, showMarker) {
                    let opts = {
                        width: 320, // 信息窗口宽度
                        height: 222, // 信息窗口高度
                        title: "<h1 title=" + '  ' + newGis.strName + ' ' + ">" + res.strName + '<h2>' + '(' + res.strNum + ')' + '</h2>' + "</h1>", // 信息窗口标题
                    };
                    $.ajax({
                        url: 'http://api.map.baidu.com/geocoder/v2/?ak=N1FRhUpF6M0lcGGY8K5MzSa0WoGhoGpO&location=' + point.lat + ',' + point.lng + '&output=json',
                        dataType: 'jsonp',
                        callback: 'BMap._rd._cbk43398',
                        success: function (res) {
                            var dw = res.result.formatted_address
                            var html = [];
                            // 内层文字
                            html.push('<ul>');
                            html.push('<li class="content">');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">通讯号:</h1> <h2 style="vertical-align:top;">' + newGis.strNum + ' </h2></div>');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">部门:</h1> <h2 style="vertical-align:top;overflow:hidden;white-space:nowrap;text-overflow:ellipsis"  title="' + newGis.deptName + '">' + newGis.deptName + ' </h2></div>');
                            html.push('</li>');

                            html.push('<li class="content">');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">职位:</h1> <h2 style="vertical-align:top;"  title="' + newGis.strPosition + '">' + newGis.strPosition + ' </h2></div>');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">手机:</h1> <h2 style="vertical-align:top;"  title="' + newGis.strMobileNum + '">' + newGis.strMobileNum + ' </h2></div>');
                            html.push('</li>');

                            html.push('<li class="content">');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">经度:</h1> <h2 style="vertical-align:top;">' + newGis.strLongitude + ' </h2></div>');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">纬度:</h1> <h2 style="vertical-align:top;">' + newGis.strLatitude + ' </h2></div>');
                            html.push('</li>');

                            html.push('<li class="content">');
                            html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">位置:</h1> <h2 style="vertical-align:top;width:70%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color:red" >' + '离线模式无法显示位置信息' + '</h2></div>');

                            html.push('</li>');

                            html.push('<li class="content">');
                            html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">上报时间:</h1> <h2 style="vertical-align:top; width:70%;color:#ff6600;">' + newGis.lastDate + ' </h2></div>');
                            html.push('<li class="content">');
                            html.push('<button class="Voice" onclick="Voice(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">语音</button>');
                            html.push('<button class="Video" onclick="Video(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">视频</button>');
                            html.push('<button class="Monitor" onclick="Monitor(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">监控</button>');
                            html.push('<button class="Track" onclick="Track(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">跟踪</button>');
                            html.push('<button class="Information" onclick="Information(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">监听</button>');
                            html.push('<button class="Information" onclick="Notice(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">公告</button>');
                            html.push('</li>');
                            html.push('</ul>');
                            sosmarker.addEventListener("click", function () {
                                map.openInfoWindow(infoWindow, point); //自动开启信息窗口
                            });
                            var infoWindow = new BMap.InfoWindow(html.join(""), opts); // 创建信息窗口对象
                            if (showMarker == true) {
                                map.openInfoWindow(infoWindow, point); //开启信息窗口
                                map.centerAndZoom(point, 19); //描点自动居中
                            }
                            // map.openInfoWindow(infoWindow, point); //自动开启信息窗口
                            map.centerAndZoom(point, 19) //描点自动居中
                        }
                    })
                }
                normalInfoWindow(newGis, markerArr, point, showMarker)
            }, 50);
        }
    }
}


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
var SOSclear = false


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
}

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
}

//SOS描点新
$(".NEWSOS").click(function () {
    Api_SosTracePoint(SOSnewGis, SOSoldGis, SOSclear) //SOS瞄点测试
})
//SOS描点新
$(".NEWSOS1").click(function () {
    Api_SosTracePoint(SOSnewGis1, SOSoldGis1, SOSclear) //SOS瞄点测试
})


/**
 *  TODO  SOS newSOS描点
 */
function Api_SosTracePoint(newGis, oldGis, clear) {
    if (clear) {
        var allOverlay = map.getOverlays();
        for (var i = 0; i < allOverlay.length; i++) {
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
                            // return false;
                            resolve
                        }
                    }
                }
            })
            promise.then(() => {
                var myIcon = new BMap.Icon("image/SOS.png", new BMap.Size(50, 50));
                var point = new BMap.Point(newGis.strLongitude, newGis.strLatitude);
                var sosmarker = new BMap.Marker(point, {
                    icon: myIcon
                }); // 创建起点标注
                // newGis.behavior='SOS'
                // console.log(newGis)
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

        }
        setTimeout(() => {
            var myIcon = new BMap.Icon("image/SOS.png", new BMap.Size(50, 50));
            var point = new BMap.Point(newGis.strLongitude, newGis.strLatitude);
            var sosmarker = new BMap.Marker(point, {
                icon: myIcon
            }); // 创建起点标注
            // newGis.behavior='SOS'
            // console.log(newGis)
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
        }, 50);
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
        // console.log(circle)
        map.removeOverlay(circle); //画完后清除所画对象
    }, 3000);
}
//  TODO清除SOS
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

// 跟踪模拟数据
var onOff = true
var gis = {
    strNum: "735106",
    strName: "阿萨德啧啧啧",
    strPosition: "按时大大",
    strMobileNum: "1asdasd",
    strHomeNum: "230987",
    strCompanyNum: "789",
    id: "735106",
    strLongitude: 106.552,
    strLatitude: 29.554666,
    strHigh: null,
    lastDate: "2020-05-22 10:48:56",
    state: 1

}
var GisTrackingData = null;
var timers = 5000;
var timer = null;
var trackobj = {
    strNum: "",
    point: []
}
var show = setInterval(() => {
    gis.strLongitude = gis.strLongitude + 0.005
    gis.strLatitude = gis.strLatitude + 0.005
}, 5000);


var index = 0
var Linearr = []
var TrackingID = null



// TODO跟踪
var Api_MapTracking = function (gis, onOff) {
    if (onOff) {
        // 绘制点
        GisTrackingData = gis
        trackobj.strNum = gis.strNum
        TrackingID = gis.strNum
        if (trackobj.strNum == gis.strNum) {
            let myIcon = new BMap.Icon("image/thz.png", new BMap.Size(50, 50));
            let point = new BMap.Point(gis.strLongitude, gis.strLatitude);
            let trackmarker = new BMap.Marker(point, {
                icon: myIcon
            }); // 创建起点标注
            // map.centerAndZoom(point, 13);
            map.closeInfoWindow(); //关闭信息窗口
            map.addOverlay(trackmarker); // 将标注添加到地图中
            trackmarker.addEventListener("click", function () {
                lInfoWindow(gis, trackmarker, point);
            });

            function lInfoWindow(res, trackmarker, point) {
                let opts = {
                    width: 320, // 信息窗口宽度
                    height: 222, // 信息窗口高度
                    title: "<h1 title=" + '  ' + newGis.strName + ' ' + ">" + res.strName + '<h2>' + '(' + res.strNum + ')' + '</h2>' + "</h1>", // 信息窗口标题
                };
                var html = [];
                html.push('<ul>');
                html.push('<li class="content">');
                html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">通讯号:</h1> <h2 style="vertical-align:top;">' + newGis.strNum + ' </h2></div>');
                html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">部门:</h1> <h2 style="vertical-align:top;overflow:hidden;white-space:nowrap;text-overflow:ellipsis"  title="' + gis.deptName + '">' + gis.deptName + ' </h2></div>');
                html.push('</li>');

                html.push('<li class="content">');
                html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">职位:</h1> <h2 style="vertical-align:top;"  title="' + gis.strPosition + '">' + gis.strPosition + ' </h2></div>');
                html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">手机:</h1> <h2 style="vertical-align:top;"  title="' + gis.strMobileNum + '">' + gis.strMobileNum + ' </h2></div>');
                html.push('</li>');

                html.push('<li class="content">');
                html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">经度:</h1> <h2 style="vertical-align:top;">' + gis.strLongitude + ' </h2></div>');
                html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">纬度:</h1> <h2 style="vertical-align:top;">' + gis.strLatitude + ' </h2></div>');
                html.push('</li>');

                html.push('<li class="content">');
                html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">位置:</h1> <h2 style="vertical-align:top;width:70%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap" >' + '离线模式无法显示位置信息' + ' </h2></div>');

                html.push('</li>');

                html.push('<li class="content">');
                html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">上报时间:</h1> <h2 style="vertical-align:top; width:70%;color:#ff6600;">' + gis.lastDate + ' </h2></div>');
                html.push('<li class="content">');
                html.push('<button class="Voice" onclick="Voice(' + gis.strLongitude + ',' + gis.strLatitude + ',' + gis.strNum + ',\'' + gis.strName + '\')">语音</button>');
                html.push('<button class="Video" onclick="Video(' + gis.strLongitude + ',' + gis.strLatitude + ',' + gis.strNum + ',\'' + gis.strName + '\')">视频</button>');
                html.push('<button class="Monitor" onclick="Monitor(' + gis.strLongitude + ',' + gis.strLatitude + ',' + gis.strNum + ',\'' + gis.strName + '\')">监控</button>');
                html.push('<button class="cancelMonitor" style="width: 18%" onclick="cancelMonitor(' + gis.strLongitude + ',' + gis.strLatitude + ',' + gis.strNum + ',\'' + gis.strName + '\')">取消跟踪</button>');
                html.push('<button class="Information" onclick="Information(' + gis.strLongitude + ',' + gis.strLatitude + ',' + gis.strNum + ',\'' + gis.strName + '\')">监听</button>');
                html.push('</li>');
                html.push('</ul>');
                let infoWindow = new BMap.InfoWindow(html.join(""), opts); // 创建信息窗口对象
                map.openInfoWindow(infoWindow, point);
            }
            if (trackobj.point.length == 1) {
                var polyline = new BMap.Polyline([
                    new BMap.Point(gis.strLongitude, gis.strLatitude),
                    new BMap.Point(trackobj.point[0].point.lng, trackobj.point[0].point.lat)
                ], {
                    strokeColor: "red",
                    strokeWeight: 3,
                    strokeOpacity: 3
                }); //创建折线
                Linearr.push(polyline)
            } else if (trackobj.point.length >= 2) {
                var polyline = new BMap.Polyline([
                    new BMap.Point(gis.strLongitude, gis.strLatitude),
                    new BMap.Point(trackobj.point[trackobj.point.length - 1].point.lng, trackobj.point[trackobj.point.length - 1].point.lat)
                ], {
                    strokeColor: "red",
                    strokeWeight: 3,
                    strokeOpacity: 3
                }); //创建折线
                Linearr.push(polyline)
            }
            map.addOverlay(polyline); //添加线条到地图
            if (trackobj.point.length >= 1) {
                for (let i = 0; i < trackobj.point.length; i++) {
                    map.removeOverlay(trackobj.point[i])
                }
            }
            timer = setTimeout(() => {
                if (GisTrackingData) {
                    G5BrowserFeatures.GetMemberGisById(gis.strNum).then(res => {
                        gis = JSON.parse(res)
                        Api_MapTracking(gis, true);
                    })
                }
            }, 5000)
            trackobj.point.push(trackmarker)
            index++
        } else {
            // 删除所有的线段
            for (let i = 0; i < Linearr.length; i++) {
                map.removeOverlay(Linearr[i])
            }
            // 清空定时器
            clearInterval(timer);
            map.removeOverlay(trackobj.point[trackobj.point.length - 1]) // 清除最后一个点
            // 清空数据
            trackobj: {
                strNum = "",
                point = []
            }
        }
    } else {
        TrackingID = null
        let promise = new Promise((resolve, reject) => {
            for (let i = 0; i < Linearr.length; i++) {
                map.removeOverlay(Linearr[i])
            }
            map.closeInfoWindow(); //关闭信息窗口
            map.removeOverlay(trackobj.point[trackobj.point.length - 1])
            GisTrackingData = null;
            console.log(trackobj.point[trackobj.point.length - 1])
            resolve()
        })
        promise.then(() => {
            gis = gis + ""
            var mardata = null
            G5BrowserFeatures.GetMemberGisById(gis).then(res => {
                mardata = JSON.parse(res)
                let lng = parseFloat(mardata.strLongitude)
                let lat = parseFloat(mardata.strLatitude)
                var zb = new BMap.Point(lng, lat);
                var tb = new BMap.Icon("image/zx.png",
                    new BMap.Size(40, 40), {
                        offset: new BMap.Size(30, 50),
                    });
                var ptmarkerArr = new BMap.Marker(zb, {
                    icon: tb
                });
                var ts = new BMap.Label(mardata.strNum, {
                    offset: new BMap.Size(20, -10)
                }); //新建声明label对象
                ts.setStyle({
                    display: "none"
                })
                ptmarkerArr.setLabel(ts);
                ptmarkerArr.addEventListener("click", () => {
                    defaultInfoWindow(mardata, markerArr, new BMap.Point(lng, lat));
                });

                function defaultInfoWindow(gis, markerArr, point) {
                    let opts = {
                        width: 320, // 信息窗口宽度
                        height: 222, // 信息窗口高度
                        title: "<h1 title=" + '  ' + gis.strName + ' ' + ">" + gis.strName + '<h2>' + '(' + gis.strNum + ')' + '</h2>' + "</h1>", // 信息窗口标题
                    };
                            let html = [];
                            // 内层文字
                            html.push('<ul>');
                            html.push('<li class="content">');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">通讯号:</h1> <h2 style="vertical-align:top;">' + newGis.strNum + ' </h2></div>');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">部门:</h1> <h2 style="vertical-align:top;overflow:hidden;white-space:nowrap;text-overflow:ellipsis"  title="' + gis.deptName + '">' + gis.deptName + ' </h2></div>');
                            html.push('</li>');
                            html.push('<li class="content">');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">职位:</h1> <h2 style="vertical-align:top;"  title="' + gis.strPosition + '">' + gis.strPosition + ' </h2></div>');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">手机:</h1> <h2 style="vertical-align:top;"  title="' + gis.strMobileNum + '">' + gis.strMobileNum + ' </h2></div>');
                            html.push('</li>');
                            html.push('<li class="content">');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">经度:</h1> <h2 style="vertical-align:top;">' + gis.strLongitude + ' </h2></div>');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">纬度:</h1> <h2 style="vertical-align:top;">' + gis.strLatitude + ' </h2></div>');
                            html.push('</li>');
                            html.push('<li class="content">');
                            html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">位置:</h1> <h2 style="vertical-align:top;width:70%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap"  >' + '离线模式无法显示位置信息' + ' </h2></div>');
                            html.push('</li>');
                            html.push('<li class="content">');
                            html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">上报时间:</h1> <h2 style="vertical-align:top; width:70%;color:#ff6600;">' + gis.lastDate + ' </h2></div>');
                            html.push('<li class="content">');
                            html.push('<button class="Voice" onclick="Voice(' + gis.strLongitude + ',' + gis.strLatitude + ',' + gis.strNum + ',\'' + gis.strName + '\')">语音</button>');
                            html.push('<button class="Video" onclick="Video(' + gis.strLongitude + ',' + gis.strLatitude + ',' + gis.strNum + ',\'' + gis.strName + '\')">视频</button>');
                            html.push('<button class="Monitor" onclick="Monitor(' + gis.strLongitude + ',' + gis.strLatitude + ',' + gis.strNum + ',\'' + gis.strName + '\')">监控</button>');
                            html.push('<button class="Track" onclick="Track(' + gis.strLongitude + ',' + gis.strLatitude + ',' + gis.strNum + ',\'' + gis.strName + '\')">跟踪</button>');
                            html.push('<button class="Information" onclick="Information(' + gis.strLongitude + ',' + gis.strLatitude + ',' + gis.strNum + ',\'' + gis.strName + '\')">监听</button>');
                            html.push('<button class="Information" onclick="Notice(' + gis.strLongitude + ',' + gis.strLatitude + ',' + gis.strNum + ',\'' + gis.strName + '\')">公告</button>');
                            html.push('</li>');
                            html.push('</ul>');
                            let infoWindow = new BMap.InfoWindow(html.join(""), opts); // 创建信息窗口对象
                            map.openInfoWindow(infoWindow, point); //自动开启信息窗口
                            map.centerAndZoom(point, 19) //描点自动居中
                            if (showMarker) {
                                map.openInfoWindow(infoWindow, point); //开启信息窗口
                                map.centerAndZoom(point, 19); //描点自动居中
                            }
                }
                map.addOverlay(ptmarkerArr);
            })
        })
        trackobj: {
            strNum = "",
            point = []
        }

    }
}


// 超界描点
var RingPointnewGis = {
    strLongitude: " 106.553141",
    strLatitude: "29.444555",
    strNum: "123465789",
    strName: "李四",
    strPosition: "所长",
    strMobileNum: "18111184268",
    strHomeNum: 4247488,
    strCompanyNum: 4247488,
    lastDate: "2019年12月23日16:41:05",
    state: 0,
    label: 0,
    CallLine: 123,
    deptName: "王者荣耀"
}
var RingPointoldGis = null
var RingPointclear = false
var RingPointcomeIn = true


// TODO超界描点
function Api_RailPoint(newGis, oldGis, clear, RingPointcomeIn) {
    if (clear) {
        var allOverlay = map.getOverlays();
        for (var i = 0; i < allOverlay.length; i++) {
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
            var allOverlay = map.getOverlays(oldGis);
            for (let i = 0; i < allOverlay.length - 1; i++) {
                if (allOverlay[i].getPosition() != null) {
                    if (allOverlay[i].getPosition().lng == oldGis.strLongitude) {
                        map.removeOverlay(allOverlay[i]); //清除当前的sos点
                        map.closeInfoWindow(); //关闭信息窗口
                        return false;
                    }
                }
            }
        }
        setTimeout(function () {
            var myIcon = new BMap.Icon("image/trigger.png", new BMap.Size(50, 50));
            var point = new BMap.Point(newGis.strLongitude, newGis.strLatitude);
            var RingPointmarker = new BMap.Marker(point, {
                icon: myIcon
            }); // 创建起点标注
            map.centerAndZoom(point, 16);
            RingPointmarker.setAnimation(BMAP_ANIMATION_BOUNCE); //让标点跳动的动画
            map.addOverlay(RingPointmarker); // 将标注添加到地图中
            setTimeout(() => {
                map.closeInfoWindow(); //关闭信息窗口
                map.removeOverlay(RingPointmarker)
            }, 5000);
            RingPointInfoWindow(newGis, RingPointmarker, point,RingPointcomeIn)
            function RingPointInfoWindow(newGis, sosmarker, point,RingPointcomeIn) {
                let opts = {
                    width: 300, // 信息窗口宽度
                    height: 180, // 信息窗口高度
                };
                var html = [];
               
                        if (RingPointcomeIn) {
                            RingPointcomeIntext = "禁入"
                        } else {
                            RingPointcomeIntext = "禁出"
                        }
                        var dw = res.result.formatted_address
                        html.push('<ul>');
                        html.push('<li class="content">');
                        html.push('<div class="content_left" style="width:100%"> <h1 style="font-weight:800;vertical-align:top;white-space:nowrap;word-break:keep-all;width:100%;font-size: 18px;"><span  style="color:red;font-weight:800">[' + RingPointcomeIntext + ']</span> ' + newGis.strName + '</h1></div>');
                        html.push('</li>');
                        html.push('<li class="content">');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">通讯号:</h1> <h2 style="vertical-align:top;">' + newGis.strNum + ' </h2></div>');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">部门:</h1> <h2 style="vertical-align:top;">' + newGis.deptName + ' </h2></div>');
                        html.push('</li>');
            
                        html.push('<li class="content">');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">职位:</h1> <h2 style="vertical-align:top;">' + newGis.strPosition + ' </h2></div>');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">手机:</h1> <h2 style="vertical-align:top;">' + newGis.strMobileNum + ' </h2></div>');
                        html.push('</li>');
            
                        html.push('<li class="content">');
                        html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">位置:</h1> <h2 style="vertical-align:top;width:70%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap"  >' + '离线模式无法显示位置信息' + ' </h2></div>');
            
                        html.push('</li>');
            
                        html.push('<li class="content">');
                        html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">警告时间:</h1> <h2 style="vertical-align:top; width:70%;color:#ff6600;">' + newGis.lastDate + ' </h2></div>');
                        html.push('<li class="content">');
                        html.push('</ul>');
                        var infoWindow = new BMap.InfoWindow(html.join(""), opts); // 创建信息窗口对象
                        sosmarker.addEventListener("click", function () {
                            map.openInfoWindow(infoWindow, point); //开启信息窗口
                        });
                        sosmarker.setAnimation(BMAP_ANIMATION_BOUNCE); //让标点跳动的动画
                        map.openInfoWindow(infoWindow, point)
               
            }
            RingPointcomeIntext = null


        }, 1000);
    }

}





























// 圈选功能绘制

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
    };
    var allOverlay = map.getOverlays();
    for (var i = 0; i < allOverlay.length - 1; i++) {
        if (allOverlay[i] instanceof BMap.Marker) {
            if (allOverlay[i].getLabel()) {
                arrlist.push(allOverlay[i].getPosition());
                newobj.pint.push(allOverlay[i].getPosition());
                newobj.label.push(allOverlay[i].getLabel().content);
            }
        }
    }

    let paramPhoneNums = [];
    /**
     * @param e.overlay 当前绘制圆形对象
     * */
    // 需要一个整体数据
    arrlist.forEach(function (value) {
        let bj = new BMap.Point(value.lng, value.lat);
        if (drawingModeType == "circle") {
            if (BMapLib.GeoUtils.isPointInCircle(bj, e.overlay)) {
                // console.log(e.overlay)
                // console.log(bj)                 //圈选中的点坐标
                var index = (newobj.pint || []).findIndex((item) => item.lat === bj.lat);
                if (index != undefined) {
                    paramPhoneNums.push(newobj.label[index])
                }
            }
        }
    });
    let Strarr = JSON.stringify(paramPhoneNums);
    console.log(Strarr);
    G5BrowserFeatures.QuanSelectOfCreatGroup(Strarr);
    map.removeOverlay(e.overlay); //画完后清除所画对象
}




// 绘制覆盖物（工具箱）

var Api_RailDrawcoverings = function (res) {
    Api_RailDltcoveringstcoverings()
    let arr = []
    // let str=JSON.parse(res)
    str = res
    for (let item in str) {
        arr.push(new BMap.Point(str[item].lng, str[item].lat))
    }
    var dbx = new BMap.Polygon(arr, {
        strokeColor: "red",
        strokeWeight: 2,
        strokeOpacity: 0.5,
        fillColor: "", //填充颜色。当参数为空时，圆形将没有填充效果。  
    }); //创建多边形
    var x = 0;
    var y = 0;
    for (var k = 0; k < str.length; k++) {
        x = x + parseFloat(str[k].lng);
        y = y + parseFloat(str[k].lat);
    }
    x = x / arr.length;
    y = y / arr.length;
    let dw = new BMap.Point(x, y);
    let el = map.getZoom() //获取到当前界面缩放等级
    map.centerAndZoom(dw, el);
    map.addOverlay(dbx); //添加覆盖物  
}


// 删除覆盖物（工具箱）
var Api_RailDltcoveringstcoverings = function () {
    var allOverlay = map.getOverlays();
    for (let i = 0; i < allOverlay.length; i++) {
        if (allOverlay[i].toString() == "[object Polygon]") {
            map.removeOverlay(allOverlay[i]);
        }

    }

}

// 取消跟踪
function cancelMonitor(a, b, c, d) {
    // console.log( c)
    // console.log(gis)
    Api_MapTracking(c, false)
}




// //普通描点
// $(".normal").click(function () {
//     Api_TracePoint(newGis, oldGis1, false, showMarker)
// })
// $(".normal2").click(function () {
//     Api_TracePoint(newGis2, oldGis2, false, showMarker)
// })
// //SOS描点新
// $(".NEWSOS").click(function () {
//     Api_SosTracePoint(SOSnewGis, SOSoldGis, SOSclear) //SOS瞄点测试
// })
// 跟踪
$(".Track").click(function () {
    Api_MapTracking(gis, onOff)
    // Api_RailDltcoveringstcoverings()

})


$(".RingPoint").click(function () {
    Api_RailPoint(RingPointnewGis, RingPointoldGis, RingPointclear, RingPointcomeIn)

})
$(".load").click(() => {
    location.reload();

})



