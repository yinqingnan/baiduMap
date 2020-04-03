var points = [];
var userinfoAry = [];
var userinfoIndex = 0;
var markerArr = [{
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
        label: 0
    },
    {
        strLongitude: "106.511111 ",
        strLatitude: "29.555555 ",
        strNum: "123465789",
        strName: "张大",
        strPosition: "所长",
        strMobileNum: "18111184268",
        strHomeNum: 4247488,
        strCompanyNum: 4247488,
        lastDate: "2019年12月23日16:41:05",
        state: 1,
        label: 1
    },
    {
        strLongitude: "106.512322",
        strLatitude: "29.576274 ",
        strNum: "123465789",
        strName: "李1",
        strPosition: "局长",
        strMobileNum: "18111184268",
        strHomeNum: 4247488,
        strCompanyNum: 4247488,
        lastDate: "2019年12月23日16:41:05",
        state: 2,
        label: 2
    },
    {
        strLongitude: "106.511111 ",
        strLatitude: "29.511 ",
        strNum: "123465789",
        strName: "李2",
        strPosition: "警员",
        strMobileNum: "18111184268",
        strHomeNum: 4247488,
        strCompanyNum: 4247488,
        lastDate: "2019年12月23日16:41:05",
        state: 1,
        label: 3
    },

];

var sosmarkerArr = [{
        strLongitude: " 106.511222",
        strLatitude: "29.520 ",
        strNum: "123465789",
        strName: "李3",
        strPosition: "警警探员",
        strMobileNum: "18111184268",
        strHomeNum: 4247488,
        strCompanyNum: 4247488,
        lastDate: "2019年12月23日16:41:05",
        state: 3,
        label: 4
    },
    // { strLongitude: " 106.522", strLatitude: "29.500 ", strNum: "987654321", strName: "王五", strPosition: "警员", strMobileNum: "18111184268", strHomeNum: 4247488, strCompanyNum: 4247488, lastDate: "2020年1月7日15:55:47", state:3 ,label:4}
];


// sos紧急描点
function sosaddMarker(res) {
    for (let i = 0; i < res.length; i++) {
        var myIcon = new BMap.Icon("image/SOS.png", new BMap.Size(50, 50));
        var point = new BMap.Point(res[i].strLongitude, res[i].strLatitude);
        var sosmarker = new BMap.Marker(point, {
            icon: myIcon
        }); // 创建起点标注
        sosmarker.disableMassClear(); //不清除sos报警
        sosmarker.setAnimation(BMAP_ANIMATION_BOUNCE); //让标点跳动的动画
        map.addOverlay(sosmarker); // 将标注添加到地图中
        // var sosmaker =addMarker(point,state)
        sosInfoWindow(res[i], sosmarker, point)
    }
}


function sosInfoWindow(res, sosmarker, point) {
    let opts = {
        width: 120, // 信息窗口宽度
        height: 90, // 信息窗口高度

    };
    var html = [];
    html.push("<ul>");
    html.push('<li class="content">');
    html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:100%"">报警时间:</h1> <h2 style="vertical-align:top;width:100%"">' + res.lastDate + ' </h2></div>');
    html.push('</li>');
    html.push('<li class="content">');
    html.push('<button class="zy" onclick="Support()">一键支援</button>');
    html.push('</li>');
    html.push('</li>');
    html.push('<li class="content">');
    html.push('<button class="jcjb" onclick="jcjb(' + res.strLongitude + ',' + res.strLatitude + ')">解除警报</button>');
    html.push('</li>');
    html.push("</ul>");

    var infoWindow = new BMap.InfoWindow(html.join(""), opts); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, point); //默认开启信息窗口
    sosmarker.addEventListener("click", function () {
        map.openInfoWindow(infoWindow, point); //开启信息窗口
    });

}



function Support() {
    console.log("一键支援")
}

// SOS弹窗的点击事件  传入a为当前的精度
function jcjb(a) {
    console.log(a);
    Sosdelete(a)
}

// 清除sos保留标记的
function Sosdelete(a) { //a 为精度， b为纬度
    map.closeInfoWindow(); //关闭信息弹窗方法
    var allOverlay = map.getOverlays(sosmarkerArr);
    for (let i = 0; i < allOverlay.length - 1; i++) {
        // console.log(allOverlay[i].getPosition().lng);
        // console.log(a);
        if (allOverlay[i].getPosition().lng == a) {
            map.removeOverlay(allOverlay[i]); //清除当前的sos点
            map.closeInfoWindow(); //关闭信息窗口
            return false;
        }
    }

}

// 删除指定坐标
let deletezb = 106.553141;

// 删除指定的点
function deletePoint(deletezb) {
    var allOverlay = map.getOverlays(markerArr);
    for (let i = 0; i < allOverlay.length - 1; i++) {
        if (allOverlay[i].getPosition().lng == deletezb) {
            map.removeOverlay(allOverlay[i]);
            return false;
        }
    }
}

// 清除指定下标点
$(".button2").bind("click", function () {
    deletePoint(deletezb)
});

//添加坐标测试数据
var testmsg1 = [{
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
    label: 0
}, ];

function All_clear() {
    clear()
}


function clear() {
    map.clearOverlays(); //删除所有点  
}





// 将6个点定位在地图中
function sign(markerArr){
    console.log(markerArr)
    markerArr.forEach(function (value) {
        let bj = new BMap.Point(value.strLongitude, value.strLatitude)
        let state = value.state
        if (state == 0) {
            var myIcon = new BMap.Icon("image/th.png",
                new BMap.Size(30, 30), {
                    offset: new BMap.Size(100, 100),
                });
        } else if (state == 1) {
            var myIcon = new BMap.Icon("image/xq.png",
                new BMap.Size(40, 40), {
                    offset: new BMap.Size(30, 50),
                });
        } else if (state == 2) {
            var myIcon = new BMap.Icon("image/zx.png",
                new BMap.Size(40, 40), {
                    offset: new BMap.Size(30, 50),
                });
        }
        var markerArr;
        markerArr = new BMap.Marker(bj, {
            icon: myIcon
        });
    
    
        map.addOverlay(markerArr); //将标注添加到地图中
    
        markerArr.addEventListener("click", function (e) {
            openDataInfo(value, e, );
        });
    });
}
sign(markerArr)

// 鼠标滑过marker事件
function openDataInfo(value, e) {
    console.log(value)
    var carOpts = {
        width: 320, // 信息窗口宽度
        height: 222, // 信息窗口高度
        title: "<h1>" + value.strName + '<h2>' + '(' + value.strNum + ')' + '</h2>' + "</h1>", // 信息窗口标题
    };

    var p = e.target;

    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);

    var html = [];
    // 内层文字
    html.push('<ul>');
    html.push('<li class="content">');
    html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">通讯号:</h1> <h2 style="vertical-align:top;">' + value.strNum + ' </h2></div>');
    html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">部门:</h1> <h2 style="vertical-align:top;">' + value.strName + ' </h2></div>');
    html.push('</li>');

    html.push('<li class="content">');
    html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">职位:</h1> <h2 style="vertical-align:top;">' + value.strPosition + ' </h2></div>');
    html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">手机:</h1> <h2 style="vertical-align:top;">' + value.strMobileNum + ' </h2></div>');
    html.push('</li>');

    html.push('<li class="content">');
    html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">精度:</h1> <h2 style="vertical-align:top;">' + value.strLongitude + ' </h2></div>');
    html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">纬度:</h1> <h2 style="vertical-align:top;">' + value.strLatitude + ' </h2></div>');
    html.push('</li>');

    html.push('<li class="content">');
    html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">位置:</h1> <h2 style="vertical-align:top;width:70%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color:red">' + "地理位置信息暂时无法查看" + ' </h2></div>');

    html.push('</li>');

    html.push('<li class="content">');
    html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">上报时间:</h1> <h2 style="vertical-align:top; width:70%;color:#ff6600;">' + value.lastDate + ' </h2></div>');
    html.push('<li class="content">');
    html.push('<button class="Voice" onclick="Voice(' + value.strLongitude + ',' + value.strLatitude + ',' + value.strNum + ',\'' + value.strName + '\')">语音</button>');
    html.push('<button class="Video" onclick="Video(' + value.strLongitude + ',' + value.strLatitude + ',' + value.strNum + ',\'' + value.strName + '\')">视频</button>');
    html.push('<button class="Monitor" onclick="Monitor(' + value.strLongitude + ',' + value.strLatitude + ',' + value.strNum + ',\'' + value.strName + '\')">监控</button>');
    html.push('<button class="Track" onclick="Track(' + value.strLongitude + ',' + value.strLatitude + ',' + value.strNum + ',\'' + value.strName + '\')">跟踪</button>');
    html.push('<button class="Information" onclick="Information(' + value.strLongitude + ',' + value.strLatitude + ',' + value.strNum + ',\'' + value.strName + '\')">监听</button>');
    html.push('<button class="msg" onclick="msg(' + value.strLongitude + ',' + value.strLatitude + ',' + value.strNum + ',\'' + value.strName + '\')">消息</button>');
    html.push('</li>');

    html.push('</ul>');

    var infoWindow = new BMap.InfoWindow(html.join(""), carOpts); // 创建信息窗口对象   
    map.openInfoWindow(infoWindow, point); //开启信息窗口  
}


var styleOptions = {
    strokeColor: "red", //边线颜色。
    fillColor: "#000", //填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3, //边线的宽度，以像素为单位。
    strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
    fillOpacity: 0.2, //填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' //边线的样式，solid或dashed。
}
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
    console.log(obj);
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
    console.log(obj);
    G5BrowserFeatures.Monitor(JSON.stringify(obj));
}

// 跟踪
function Track(a, b, c, d) {
    let obj = {
        strLongitude: a,
        strLatitude: b,
        strNum: c,
        strName: d
    };
    console.log(obj);
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
    console.log(obj)

}

// 信息
function msg(a, b, c, d) {
    let obj = {
        strLongitude: a,
        strLatitude: b,
        strNum: c,
        strName: d
    };
    console.log(obj)

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

function draw(type) {
    myDrawingManagerObject.open();
    myDrawingManagerObject.setDrawingMode(type);
}
//添加鼠标绘制工具监听事件，用于获取绘制结果
myDrawingManagerObject.addEventListener('overlaycomplete', overlaycomplete);

function overlaycomplete(e) {

    var cirCount = 0;
    // var polyCount = 0;

    myDrawingManagerObject.close(); //关闭画图

    var drawingModeType = e.drawingMode; //获取所画图形类型
    markerArr.forEach(function (value) {
        let bj = new BMap.Point(value.strLongitude, value.strLatitude)
        if (drawingModeType == "circle") {
            //圆
            if (BMapLib.GeoUtils.isPointInCircle(bj, e.overlay)) {
                cirCount++;
            }
        }
    });

    alert("圆中包含" + cirCount + "个定位点");

    map.removeOverlay(e.overlay); //画完后清除所画对象
}