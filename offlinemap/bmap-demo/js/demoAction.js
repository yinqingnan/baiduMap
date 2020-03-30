var points = [];
var userinfoAry = [];
var userinfoIndex = 0;
var markerArr = [
    {
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

var sosmarkerArr = [
    {
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

//描点
function miaodian(markerArr) {
    if (markerArr.length == 0) {
        return false
    } else {
        for (var i = 0; i < markerArr.length; i++) {
            var p0 = markerArr[i].strLatitude; //保存维度
            var p1 = markerArr[i].strLongitude; //保存精度
            var point = new BMap.Point(p1, p0);
            var state = markerArr[i].state;
            // var label = new BMap.Label(markerArr[i].label);
            var maker = addMarker(point, state);
            addInfoWindow(maker, markerArr[i]);
            // openInfoWinFun(markerArr)
        }
    }

}

miaodian(markerArr);

// sos紧急描点
function sosaddMarker(res) {
    // console.log(res)
    for (let i = 0; i < res.length; i++) {
        var myIcon = new BMap.Icon("image/SOS.png", new BMap.Size(50, 50));
        var point = new BMap.Point(res[i].strLongitude, res[i].strLatitude);
        var sosmarker = new BMap.Marker(point, {icon: myIcon});// 创建起点标注
        sosmarker.disableMassClear();    //不清除sos报警
        sosmarker.setAnimation(BMAP_ANIMATION_BOUNCE); //让标点跳动的动画
        map.addOverlay(sosmarker);             // 将标注添加到地图中
        // var sosmaker =addMarker(point,state)
        sosInfoWindow(res[i], sosmarker, point)
    }
}

sosaddMarker(sosmarkerArr);


function sosInfoWindow(res, sosmarker, point) {
    let opts = {
        width: 120,     // 信息窗口宽度
        height: 90,     // 信息窗口高度

    };
    //   console.log(point)
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

    var infoWindow = new BMap.InfoWindow(html.join(""), opts);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow, point); //默认开启信息窗口
    sosmarker.addEventListener("click", function () {
        map.openInfoWindow(infoWindow, point); //开启信息窗口
    });

}


// 添加标注  
function addMarker(point, state) {
    // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //让标点跳动的动画
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

    var marker = new BMap.Marker(point, {icon: myIcon});

    //   正常显示红点
    // var marker = new BMap.Marker(point);

    map.addOverlay(marker);
    return marker;
}


// 添加信息窗口  
function addInfoWindow(marker, poi) {
    // console.log(marker) strLongitude strLatitude
    // console.log(poi)
    $.ajax({
        url: 'http://api.map.baidu.com/geocoder/v2/?ak=N1FRhUpF6M0lcGGY8K5MzSa0WoGhoGpO&location=' + poi.strLatitude + ',' + poi.strLongitude + '&output=json',
        dataType: 'jsonp',
        callback: 'BMap._rd._cbk43398',
        success: function (res) {
            var dw = res.result.formatted_address;
            var html = [];
            // 内层文字
            html.push('<ul>');
            html.push('<li class="content">');
            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">通讯号:</h1> <h2 style="vertical-align:top;">' + poi.strNum + ' </h2></div>');
            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">部门:</h1> <h2 style="vertical-align:top;">' + poi.strName + ' </h2></div>');
            html.push('</li>');

            html.push('<li class="content">');
            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">职位:</h1> <h2 style="vertical-align:top;">' + poi.strPosition + ' </h2></div>');
            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">手机:</h1> <h2 style="vertical-align:top;">' + poi.strMobileNum + ' </h2></div>');
            html.push('</li>');

            html.push('<li class="content">');
            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">精度:</h1> <h2 style="vertical-align:top;">' + poi.strLongitude + ' </h2></div>');
            html.push('<div class="content_left"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all">纬度:</h1> <h2 style="vertical-align:top;">' + poi.strLatitude + ' </h2></div>');
            html.push('</li>');

            html.push('<li class="content">');
            html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">位置:</h1> <h2 style="vertical-align:top;width:70%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;" title="' + dw + '">' + dw + ' </h2></div>');

            html.push('</li>');

            html.push('<li class="content">');
            html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">上报时间:</h1> <h2 style="vertical-align:top; width:70%;color:#ff6600;">' + poi.lastDate + ' </h2></div>');
            html.push('<li class="content">');
            html.push('<button class="Voice" onclick="Voice(' + poi.strLongitude + ',' + poi.strLatitude + ',' + poi.strNum + ',\'' + poi.strName + '\')">语音</button>');
            html.push('<button class="Video" onclick="Video(' + poi.strLongitude + ',' + poi.strLatitude + ',' + poi.strNum + ',\'' + poi.strName + '\')">视频</button>');
            html.push('<button class="Monitor" onclick="Monitor(' + poi.strLongitude + ',' + poi.strLatitude + ',' + poi.strNum + ',\'' + poi.strName + '\')">监控</button>');
            html.push('<button class="Track" onclick="Track(' + poi.strLongitude + ',' + poi.strLatitude + ',' + poi.strNum + ',\'' + poi.strName + '\')">跟踪</button>');
            html.push('<button class="Information" onclick="Information(' + poi.strLongitude + ',' + poi.strLatitude + ',' + poi.strNum + ',\'' + poi.strName + '\')">监听</button>');
            html.push('<button class="msg" onclick="msg(' + poi.strLongitude + ',' + poi.strLatitude + ',' + poi.strNum + ',\'' + poi.strName + '\')">消息</button>');
            html.push('</li>');

            html.push('</ul>');
            var opts = {
                width: 320,     // 信息窗口宽度
                height: 222,     // 信息窗口高度
                title: "<h1>" + poi.strName + '<h2>' + '(' + poi.strNum + ')' + '</h2>' + "</h1>", // 信息窗口标题
            };
            var infoWindow = new BMap.InfoWindow(html.join(""), opts);
            marker.openInfoWindow(infoWindow);
            var openInfoWinFun = function () {
                marker.openInfoWindow(infoWindow);
            };
            //marker.addEventListener("mouseover", openInfoWinFun); //鼠标经过弹出
            marker.addEventListener("click", openInfoWinFun);  //添加点击事件弹出
            return openInfoWinFun;
        },
        error: function () {

        }
    });
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


//创建电子围栏工具类实例
var e_fence = new eFence();
//绘制完成后触发的事件
var overlaycomplete1 = function (e) {
    var cache1 = e.overlay;
    // console.log(cache1)
    //是否多边形
    if (cache1 instanceof BMap.Polygon) {
        if (istrue()) {
            timeOut1(4, cache1);
        }
        //是否圆形
    } else if (cache1 instanceof BMap.Circle) {
        if (istrue()) {
            timeOut1(3, cache1);
        }
    }
};
//添加鼠标绘制工具监听事件，用于获取绘制结果
publicDrawingManager.getDrawManager().addEventListener('overlaycomplete', overlaycomplete1);

var timeOut1 = function (num, efence_Overlay) {

    var allOverlay = map.getOverlays(markerArr);
    // console.log(allOverlay)
    for (let i = 0; i < markerArr.length; i++) {
        if (!e_fence.isInOverlay(allOverlay[i].point, efence_Overlay)) {
            // let arr=[]
            // arr.push(allOverlay[i].getPosition())
            // console.log(arr[0])


            // console.log(allOverlay[i].getPosition())
            // console.log(allOverlay[i].getPosition().lng)
            // console.log(allOverlay[i].getPosition().lat)
            console.log("绘制完成")

        }

    }
    closeDraw()
};

function istrue() {
    // return confirm("是否使用该覆盖物作为电子围栏进行测试？");
    return true
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
function Sosdelete(a) {            //a 为精度， b为纬度
    map.closeInfoWindow();       //关闭信息弹窗方法
    var allOverlay = map.getOverlays(sosmarkerArr);
    for (let i = 0; i < allOverlay.length - 1; i++) {
        // console.log(allOverlay[i].getPosition().lng);
        // console.log(a);
        if (allOverlay[i].getPosition().lng == a) {
            map.removeOverlay(allOverlay[i]);       //清除当前的sos点
            map.closeInfoWindow();           //关闭信息窗口
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
},
];

function All_clear() {
    clear()
}


function clear() {
    map.clearOverlays(); //删除所有点  
}

//区域管理___调用外部方法获取到数据
var Regional_management = function () {

};
