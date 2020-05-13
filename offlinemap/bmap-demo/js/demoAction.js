var points = [];
var userinfoAry = [];
var userinfoIndex = 0;
var markerArr = [{
    strLongitude: " 106.553141",
    strLatitude: "29.555666",
    strNum: "123asdasda",
    strName: "张三",
    strPosition: "所长",
    strMobileNum: "18111184268",
    strHomeNum: 4247488,
    strCompanyNum: 4247488,
    lastDate: "2019年12月23日16:41:05",
    state: 0,
    label: 0
},
    {
        strLongitude: "106.511111 ",
        strLatitude: "29.555555 ",
        strNum: "qweqeqwe",
        strName: "张大",
        strPosition: "所长",
        strMobileNum: "18111184268",
        strHomeNum: 4247488,
        strCompanyNum: 4247488,
        lastDate: "2019年12月23日16:41:05",
        state: 1,
        label: 1
    },
];


function All_clear() {
    clear()
}

//删除所有点
function clear() {
    map.clearOverlays();
}


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
    console.log(obj);

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
    // console.log(obj);
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
var index = 0;

function Track(a, b, c, d) {
    let obj = {
        strLongitude: a,
        strLatitude: b,
        strNum: c,
        strName: d
    };
    // console.log(obj);
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
    // console.log(obj)
    G5BrowserFeatures.MonitorListen(JSON.stringify(obj));
}

// 信息
function msg(a, b, c, d) {
    let obj = {
        strLongitude: a,
        strLatitude: b,
        strNum: c,
        strName: d
    };
    // console.log(obj)
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
    "strName": "成员B1",
    "strPosition": "123",
    "strMobileNum": "456",
    "strHomeNum": "230987",
    "strCompanyNum": "789",
    "id": "735106",
    "strLongitude": " 106.552",
    "strLatitude": "29.554666",
    "strHigh": null,
    "lastDate": "2020-04-22 10:48:56",
    "state": true
};
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
};
var clear = false;
var showMarker = true;


/**
 *  地图描点
 * @param {Object} newGis 新的Gis对象
 * @param {Object} oldGis 原来的Gis对象
 * @param {boolean} clear 是否清除该执法仪的坐标点，注意当为 true 时，newGis为null, 只需要删除 oldGis 地图描点即可
 * @param {boolean} showMarker 绘制完坐标点后，是否显示 marker 详细信息
 */
var Api_TracePoint = function (newGis, oldGis, clear, showMarker) {
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
        if (oldGis) {
            var promise = new Promise(function (resolve, reject) {
                var allOverlay = map.getOverlays();
                for (var i = 0; i < allOverlay.length; i++) {
                    //删除指定经度的点
                    if (allOverlay[i] instanceof BMap.Marker) {
                        if (allOverlay[i].getPosition() != null) {
                            if (allOverlay[i].getPosition().lng == oldGis.strLongitude) {
                                map.removeOverlay(allOverlay[i]);
                                resolve();
                                return false;
                            }
                        }
                    }
                }
            });
            promise.then(() => {
                var point = new BMap.Point(newGis.strLongitude, newGis.strLatitude);
                let state = newGis.state;
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
                normalInfoWindow(newGis, markerArr, point);
                function normalInfoWindow(res, sosmarker, point) {
                    let opts = {
                        width: 320, // 信息窗口宽度
                        height: 222, // 信息窗口高度
                        title: "<h1>" + res.strName + '<h2>' + '(' + res.strNum + ')' + '</h2>' + "</h1>", // 信息窗口标题
                    };
                            var html = [];
                            // 内层文字
                            html.push('<ul>');
                            html.push('<li class="content">');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">通讯号:</h1> <h2 style="vertical-align:top;">' + newGis.strNum + ' </h2></div>');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">部门:</h1> <h2 style="vertical-align:top;">' + newGis.strName + ' </h2></div>');
                            html.push('</li>');
                            html.push('<li class="content">');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">职位:</h1> <h2 style="vertical-align:top;">' + newGis.strPosition + ' </h2></div>');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">手机:</h1> <h2 style="vertical-align:top;">' + newGis.strMobileNum + ' </h2></div>');
                            html.push('</li>');
                            html.push('<li class="content">');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">经度:</h1> <h2 style="vertical-align:top;">' + newGis.strLongitude + ' </h2></div>');
                            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">纬度:</h1> <h2 style="vertical-align:top;">' + newGis.strLatitude + ' </h2></div>');
                            html.push('</li>');
                            html.push('<li class="content">');
                            html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">位置:</h1> <h2 style="vertical-align:top;width:70%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap"  >离线状态无法获取位置信息 </h2></div>');
                            html.push('</li>');
                            html.push('<li class="content">');
                            html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">上报时间:</h1> <h2 style="vertical-align:top; width:70%;color:#ff6600;">' + newGis.lastDate + ' </h2></div>');
                            html.push('<li class="content">');
                            html.push('<button class="Voice" onclick="Voice(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">语音</button>');
                            html.push('<button class="Video" onclick="Video(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">视频</button>');
                            html.push('<button class="Monitor" onclick="Monitor(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">监控</button>');
                            html.push('<button class="Track" onclick="Track(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">跟踪</button>');
                            html.push('<button class="Information" onclick="Information(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">监听</button>');
                            html.push('</li>');
                            html.push('</ul>');
                            var infoWindow = new BMap.InfoWindow(html.join(""), opts); // 创建信息窗口对象
                            // sosmarker.addEventListener("click", function (e) {
                            //     map.openInfoWindow(infoWindow, point); //自动开启信息窗口

                            // });
                            // map.centerAndZoom(point, 15) //描点自动居中
                            if (showMarker) {
                                map.openInfoWindow(infoWindow, point); //开启信息窗口
                                map.centerAndZoom(point, 19) //描点自动居中
                            }
                }
            });
        }
        setTimeout(function () {
            var point = new BMap.Point(newGis.strLongitude, newGis.strLatitude);
            let state = newGis.state;
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
            });
            markerArr.setLabel(label);
            map.addOverlay(markerArr); //将标注添加到地图中
            markerArr.addEventListener("click", function () {
                normalInfoWindow(newGis, markerArr, point);
            });
            normalInfoWindow(newGis, markerArr, point);
            function normalInfoWindow(res, sosmarker, point) {
                let opts = {
                    width: 320, // 信息窗口宽度
                    height: 222, // 信息窗口高度
                    title: "<h1>" + res.strName + '<h2>' + '(' + res.strNum + ')' + '</h2>' + "</h1>", // 信息窗口标题
                };
                        var html = [];
                        // 内层文字
                        html.push('<ul>');
                        html.push('<li class="content">');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">通讯号:</h1> <h2 style="vertical-align:top;">' + newGis.strNum + ' </h2></div>');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">部门:</h1> <h2 style="vertical-align:top;">' + newGis.strName + ' </h2></div>');
                        html.push('</li>');
                        html.push('<li class="content">');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">职位:</h1> <h2 style="vertical-align:top;">' + newGis.strPosition + ' </h2></div>');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">手机:</h1> <h2 style="vertical-align:top;">' + newGis.strMobileNum + ' </h2></div>');
                        html.push('</li>');
                        html.push('<li class="content">');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">经度:</h1> <h2 style="vertical-align:top;">' + newGis.strLongitude + ' </h2></div>');
                        html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">纬度:</h1> <h2 style="vertical-align:top;">' + newGis.strLatitude + ' </h2></div>');
                        html.push('</li>');
                        html.push('<li class="content">');
                        html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">位置:</h1> <h2 style="vertical-align:top;width:70%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap"  >离线状态无法获取位置信息 </h2></div>');
                        html.push('</li>');
                        html.push('<li class="content">');
                        html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">上报时间:</h1> <h2 style="vertical-align:top; width:70%;color:#ff6600;">' + newGis.lastDate + ' </h2></div>');
                        html.push('<li class="content">');
                        html.push('<button class="Voice" onclick="Voice(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">语音</button>');
                        html.push('<button class="Video" onclick="Video(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">视频</button>');
                        html.push('<button class="Monitor" onclick="Monitor(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">监控</button>');
                        html.push('<button class="Track" onclick="Track(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">跟踪</button>');
                        html.push('<button class="Information" onclick="Information(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + newGis.strNum + ',\'' + newGis.strName + '\')">监听</button>');
                        html.push('</li>');
                        html.push('</ul>');
                        var infoWindow = new BMap.InfoWindow(html.join(""), opts); // 创建信息窗口对象
                        sosmarker.addEventListener("click", function () {
                            map.openInfoWindow(infoWindow, point); //自动开启信息窗口
                        });
                        // map.centerAndZoom(point, 15) //描点自动居中
                        if (showMarker) {
                            map.openInfoWindow(infoWindow, point); //开启信息窗口
                            map.centerAndZoom(point, 19); //描点自动居中
                        }
            }
        }, 500)
    }
};


//  SOS描点模拟数据
var SOSnewGis = {
    strLongitude: " 106.553141",
    strLatitude: "29.555666",
    strNum: "123465789",
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
var SOSoldGis = {
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
    // CallLine: 123,
};
var SOSclear = false;


// SOS newSOS描点
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
            var promise =new Promise((resolve, reject) => {
                var allOverlay = map.getOverlays(oldGis);
                for (let i = 0; i < allOverlay.length - 1; i++) {
                    if (allOverlay[i].getPosition() != null) {
                        if (allOverlay[i].getPosition().lng == oldGis.strLongitude) {
                            map.removeOverlay(allOverlay[i]); //清除当前的sos点
                            map.closeInfoWindow(); //关闭信息窗口
                            resolve()
                            return false;
                        }
                    }
                }
            })
            promise.then(()=>{
                setTimeout(function () {
                    var myIcon = new BMap.Icon("image/SOS.png", new BMap.Size(50, 50));
                    var point = new BMap.Point(newGis.strLongitude, newGis.strLatitude);
                    var sosmarker = new BMap.Marker(point, {
                        icon: myIcon
                    }); // 创建起点标注
                    map.centerAndZoom(point, 16);
                    // sosmarker.disableMassClear(); //不清除sos报警
                    sosmarker.setAnimation(BMAP_ANIMATION_BOUNCE); //让标点跳动的动画
                    map.addOverlay(sosmarker); // 将标注添加到地图中
                    SOSInfoWindow(newGis, sosmarker, point)
        
                    function SOSInfoWindow(newGis, sosmarker, point) {
                        let lat = point.lat
                        let lng = point.lng
                        let opts = {
                            width: 120, // 信息窗口宽度
                            height: 100, // 信息窗口高度
                        };
        
                        var name = "'" + newGis.strName + "'";
                        var html = [];
                        html.push("<ul>");
                        html.push('<li class="content">');
                        html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:100%"">报警时间:</h1> <h2 style="vertical-align:top;width:100%"">' + newGis.lastDate + ' </h2></div>');
                        html.push('</li>');
                        html.push('<li class="content_support">');
                        html.push('<button class="zy" onclick="support(' + newGis.strNum + ',' + newGis.CallLine + ',' + name + ',' + newGis.strLongitude + ',' + newGis.strLatitude + ')">一键支援</button>');
                        html.push('<button class="jcjb"  onclick="Relieve(' + newGis.strLongitude + ',' + newGis.strLatitude + ',' + name + ')">解除警报</button>');
                        html.push('</li>');
                        html.push("</ul>");
                        var infoWindow = new BMap.InfoWindow(html.join(""), opts); // 创建信息窗口对象
                        sosmarker.addEventListener("click", function () {
                            map.openInfoWindow(infoWindow, point); //开启信息窗口
                        });
                        sosmarker.setAnimation(BMAP_ANIMATION_BOUNCE); //让标点跳动的动画
                        map.openInfoWindow(infoWindow, point)
                    }
        
                }, 1000);
            })
        }


    }


}

// 一键支援数据拼接
// var support = function (strNum, CallLine, strName) {
//     let obj = {
//         strNum: strNum,
//         strName: strName,
//         CallLine: CallLine
//     }
//     console.log(obj)
//     obj = JSON.stringify(obj)
//     G5BrowserFeatures.SosSupport(obj)
// }

var support = function (strNum, CallLine, strName, lat, lng) {
    Relieve(lng)
    var mPoint = new BMap.Point(lat, lng);
    var circle = new BMap.Circle(mPoint, 3000, {
        strokeColor: "red",
        fillColor: "",
        strokeStyle: "solid",
        fillOpacity: 0,
        strokeWeight: 2,
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
    // 需要一个整体数据
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
        // G5BrowserFeatures.QuanSelectOfCreatGroup(Strarr) //浏览器方法
    }
    setTimeout(() => {
        console.log(circle)
        map.removeOverlay(circle); //画完后清除所画对象
    }, 3000);
};
//清除SOS
var Relieve = function (strLongitude, strLatitude, strName) {
    var arr=[]
    var allOverlay = map.getOverlays();
    for (let i = 0; i < allOverlay.length; i++) {
        if (allOverlay[i] instanceof BMap.Marker) {
            if(allOverlay[i].getPosition()!=null){
                arr.push(allOverlay[i])
                for(let k=0;k<arr.length;k++){
                    if(arr[k].point.lng===strLongitude){
                        map.closeInfoWindow(); //关闭信息窗口
                        map.removeOverlay(arr[k]); //清除当前的sos点
                    }
                }
                if(arr.length){
                    for(let k=0;k<arr.length;k++){
                        if(arr[k].point.lng===strLongitude){
                            map.closeInfoWindow(); //关闭信息窗口
                            map.removeOverlay(arr[k]); //清除当前的sos点
                        }
                    }
                }
            }  
        }
    }
    // let obj = {
    //     strNum: strLongitude,
    //     strName: strLatitude,
    //     CallLine: strName
    // };
    // obj = JSON.stringify(obj);
    // G5BrowserFeatures.SosLifted(obj)
};

// 跟踪模拟数据
var onOff = true;
var gis = {
    strLongitude: " 106.520",
    strLatitude: "29.550",
    strNum: "123465789",
    strName: "张三",
    strPosition: "所长",
    strMobileNum: "18111184268",
    strHomeNum: 4247488,
    strCompanyNum: 4247488,
    lastDate: "2019年12月23日16:41:05",
};
var GisTrackingData = null;
var timers = 5000;
var timer = null;


/**
 * 根据坐标 经度 删除指定覆盖物
 * @param {} lng 经度
 * @param {boolean} isCloseInfoWindow 是否要删除信息窗口
 * @returns {}
 */
var clearMapPontByLng = function (lng, isCloseInfoWindow) {
    var allOverlay = map.getOverlays();
    var point = [];
    for (var i = 0; i < allOverlay.length; i++) {
        if (allOverlay[i].getPosition()) {
            if (allOverlay[i].getPosition().lng == lng) {
                point.push(allOverlay[i]);
            }
        }
    }
    for (var j = 0; j < point.length; j++) {
        map.removeOverlay(point[j]);
    }
    if (isCloseInfoWindow)
        map.closeInfoWindow(); //关闭信息窗口
};

// 跟踪
var Api_MapTracking = function (gis, onOff) {
    if (onOff) {
        if (GisTrackingData) { // 如果有历史记录，先删除上一步的点
            clearMapPontByLng(GisTrackingData.strLongitude, true);
        }
        // 绘制点
        GisTrackingData = gis;

        let myIcon = new BMap.Icon("image/thz.png", new BMap.Size(50, 50));
        let point = new BMap.Point(gis.strLongitude, gis.strLatitude);
        let sosmarker = new BMap.Marker(point, {
            icon: myIcon
        }); // 创建起点标注
        map.centerAndZoom(point, 18);
        map.addOverlay(sosmarker); // 将标注添加到地图中
        clearInterval(timer);
        timer = setInterval(() => {
            if (GisTrackingData) {
                G5BrowserFeatures.GetMemberGisById(gis.strNum).then(res => {
                    if (res != "") {
                        res = JSON.parse(res);
                        Api_MapTracking(res, true);
                    }
                })
            }
        }, timers)

    } else {
        if (GisTrackingData == null) {
            if (timer) {
                clearInterval(timer)
            }
        } else {
            clearMapPontByLng(GisTrackingData.strLongitude, false);
            GisTrackingData = null;
        }
    }
};


// 超界描点
var RingPointnewGis = {
    strLongitude: " 106.553141",
    strLatitude: "29.555666",
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
};
var RingPointoldGis = null;
var RingPointclear = false;
var RingPointcomeIn = true;


// 超界描点
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
            RingPointInfoWindow(newGis, RingPointmarker, point);
            var RingPointcomeIntext = null;
            function RingPointInfoWindow(newGis, sosmarker, point) {
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
                html.push('<ul>');
                html.push('<li class="content">');
                html.push('<div class="content_left" style="width:100%"> <h1 style="font-weight:800;vertical-align:top;white-space:nowrap;word-break:keep-all;width:100%;font-size: 18px;"><span  style="color:red;font-weight:800">[' + RingPointcomeIntext + ']</span> ' + newGis.strName + '</h1></div>');
                html.push('</li>');
                html.push('<li class="content">');
                html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">通讯号:</h1> <h2 style="vertical-align:top;">' + newGis.strNum + ' </h2></div>');
                html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">部门:</h1> <h2 style="vertical-align:top;">' + newGis.strName + ' </h2></div>');
                html.push('</li>');
                html.push('<li class="content">');
                html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">职位:</h1> <h2 style="vertical-align:top;">' + newGis.strPosition + ' </h2></div>');
                html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">手机:</h1> <h2 style="vertical-align:top;">' + newGis.strMobileNum + ' </h2></div>');
                html.push('</li>');
                html.push('<li class="content">');
                html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">位置:</h1> <h2 style="vertical-align:top;width:70%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap"  >离线状态无法获取位置信息</h2></div>');
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


//普通描点
$(".normal").click(function () {
    Api_TracePoint(newGis, oldGis, clear, showMarker);
});

//SOS描点新
$(".NEWSOS").click(function () {
    Api_SosTracePoint(SOSnewGis, SOSoldGis, SOSclear);
});
// 跟踪
$(".Track").click(function () {
    Api_MapTracking(gis, onOff);
});
$(".RingPoint").click(function () {
    Api_RailPoint(RingPointnewGis, RingPointoldGis, RingPointclear, RingPointcomeIn);

});
