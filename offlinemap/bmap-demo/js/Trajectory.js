// 定义默认的精度，维度
var strLongitude = "106.53063501"
var strLatitude = "29.54460611"
var Grade = 13

var map = new BMap.Map("allmap");
var point = new BMap.Point(strLongitude, strLatitude);
map.centerAndZoom(point, Grade);

var res = {
    "success": true,
    "code": "1",
    "msg": "",
    "data": [{
        "exten": "735108",
        "gis_jd": "106.53146",
        "gis_wd": "29.547954",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-04 16:24:09"
    }, {
        "exten": "735108",
        "gis_jd": "106.54339",
        "gis_wd": "29.555243",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-05 16:25:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.577741",
        "gis_wd": "29.560395",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-06 16:27:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.584496",
        "gis_wd": "29.566427",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-07 16:33:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.588089",
        "gis_wd": "29.576228",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-04 16:34:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.552732",
        "gis_wd": "29.575977",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-08 16:36:11"
    }, {
        "exten": "735108",
        "gis_jd": "106.539796",
        "gis_wd": "29.579369",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-09 16:37:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.540659",
        "gis_wd": "29.584018",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-05 16:39:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.531891",
        "gis_wd": "29.590676",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-10 16:40:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.528154",
        "gis_wd": "29.604369",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-11 16:41:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.528154",
        "gis_wd": "29.604369",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-12 16:43:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.5993",
        "gis_wd": "29.628985",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-13 16:45:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.57156",
        "gis_wd": "29.636268",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-14 16:46:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.554744",
        "gis_wd": "29.648197",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-15 16:47:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.516368",
        "gis_wd": "29.633506",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-16 16:49:12"
    }, {
        "exten": "735108",
        "gis_jd": "106.506649",
        "gis_wd": "29.613934",
        "gis_gd": "4.9E-324",
        "gis_sd": "",
        "date": "2019-12-17 16:50:12"
    }]
}


// console.log(points)
// 添加比例尺、缩放、平移工具条
map.enableScrollWheelZoom();//启动鼠标滚轮缩放地图

//地图加载完时关闭预加载模态框
map.addEventListener("tilesloaded", function () {
    $(".module").hide()
})

// 点击按钮关闭预加载模态框
$(".close")[0].onclick = () => {
    $(".module").hide()
}


layui.use('laydate', function () {
    var laydate = layui.laydate;
    laydate.render({
        elem: '#test5'
        , type: 'datetime'
        , range: '&'
        , format: 'yyyy-MM-dd HH:mm'
    });

});
//获取轨迹数据
var Police = ""
var data = ""
var pointArr = [];
var points = []

// 获取轨迹
$(".gettrajectory").click(function () {
    map.clearOverlays();
    Police = $(".Police").val()
    data = $("#test5").val()
    // 判断不为空时将数据传出去
    if (Police != "" && data != "") {
        var arr = data.split("&")
        G5BrowserFeatures.GetMapTrack(Police, arr[0], arr[1]).then(function (res) {          //浏览器方法调用开始
            var obj = JSON.parse(res)
            if (obj.success == false) {
                alert(obj.msg)
            } else {
                deleteline()
                var data = obj.data
                points = obj.data
                var pointArr = [];
                var start_jd = data[0].gis_jd
                var start_wd = data[0].gis_wd
                var End_jd = data[data.length - 1].gis_jd
                var End_wd = data[data.length - 1].gis_wd
                // 起点标注

                var myIcon = new BMap.Icon("image/guiji/qidian.png", new BMap.Size(50, 50));
                var point = new BMap.Point(start_jd, start_wd);
                var marker = new BMap.Marker(point, {icon: myIcon});// 创建起点标注
                map.addOverlay(marker);             // 将标注添加到地图中
                //终点标注
                var myIcon1 = new BMap.Icon("image/guiji/zhongdian.png", new BMap.Size(50, 50));
                var point1 = new BMap.Point(End_jd, End_wd);
                var marker1 = new BMap.Marker(point1, {icon: myIcon1});// 创建终点标注
                map.addOverlay(marker1);             // 将标注添加到地图中

                for (let i = 0; i < data.length; i++) {
                    pointArr.push({
                        lng: data[i].gis_jd,
                        lat: data[i].gis_wd
                    });
                }
                // 生成坐标点
                var trackPoint = [];
                for (var i = 0, j = pointArr.length; i < j; i++) {
                    trackPoint.push(new BMap.Point(pointArr[i].lng, pointArr[i].lat));
                }
                map.centerAndZoom(trackPoint[0], 13);
                // var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
                //     scale: 0.5,//图标缩放大小
                //     strokeColor:'#fff',//设置矢量图标的线填充颜色
                //     strokeWeight: '2',//设置线宽
                // });
                // var icons = new BMap.IconSequence(sy, '20', '30');
                // // 画线
                map.addOverlay(polyline);
                var polyline = new BMap.Polyline(trackPoint, {
                    enableEditing: false,//是否启用线编辑，默认为false
                    enableClicking: true,//是否响应点击事件，默认为true
                    // icons:[icons],
                    strokeWeight: '4',//折线的宽度，以像素为单位
                    strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
                    strokeColor: "#797979" //折线颜色
                });
                map.addOverlay(polyline);          //增加折线

                let opts = {
                    width: 200,     // 信息窗口宽度
                    height: 130,     // 信息窗口高度

                }
                var html = []
                html.push("<ul>")
                html.push('<li class="content">');
                html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%"">警员编号:</h1> <h2 style="vertical-align:top;width:70%"">' + data[0].exten + ' </h2></div>');
                html.push('</li>');
                html.push('<li class="content">');
                html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">精度:</h1> <h2 style="vertical-align:top;width:70%"">' + start_jd + ' </h2></div>');
                html.push('</li>');
                html.push('<li class="content">');
                html.push('<div class="content_left " style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%"">纬度:</h1> <h2 style="vertical-align:top;width:70%"">' + start_wd + ' </h2></div>');
                html.push('</li>');
                html.push('<li class="content">');
                html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%"">时间:</h1> <h2 style="vertical-align:top;width:70%"">' + data[0].date + ' </h2></div>');
                html.push('</li>');
                html.push("</ul>")

                var infoWindow = new BMap.InfoWindow(html.join(""), opts);  // 创建信息窗口对象
                map.openInfoWindow(infoWindow, point); //开启信息窗口
                marker.addEventListener("click", function () {
                    map.openInfoWindow(infoWindow, point); //开启信息窗口
                });


            }


        });          //浏览器方法结束


    }
});
//播放
$(".play").click(function () {
    if (points.length > 0) {
        deleteline()
        loadTrackByTime()
    } else {
        alert("先获取轨迹数据")
    }
});
//重置
$(".Reset").click(function () {
    // $(".Police").val("")
    // $("#test5").val("")
    deleteline()
});

// 清除掉被保留的画线标记
function deleteline() {
    var allOverlay = map.getOverlays();
    for (var i = 0; i < allOverlay.length; i++) {
        allOverlay[i].enableMassClear();
    }
    map.clearOverlays();
}


// 轨迹回放
var donePoints = [];//已经显示的点。
var bPoints = [];//保存百度化的坐标组。用于重设地图的中心点和显示级别。
var timerArr = [];//定时器
var interval;

//根据时间选择。
function loadTrackByTime() {
    //清除当前所有的定时器和地图上的覆盖物。
    map.clearOverlays();
    for (var t = 0; t < timerArr.length; t++) {
        clearTimeout(timerArr[t]);
    }
    ;
    timerArr = [];
    clearInterval(interval);
    bPoints.length = 0;
    donePoints.length = 0;
    // 开始时间
    var dateBegin = points[0].date
    // 结束时间
    // var dateEnd=points[points.length-1].date

    //从原始数组中查询符合条件的坐标点。
    var searchRes = [];//用来装符合条件的坐标信息。

    //满足条件的放上去。
    for (var i = 0; i < points.length; i++) {
        searchRes.push(points[i]);
    }
    ;
    // 不绘制开始和结束
    // for (var i = 0; i < pointsLen; i++) {
    // 	if(dateDiff(points[i].date,dateBegin)>0&&dateDiff(points[i].date,dateEnd)<0){
    // 		searchRes.push(points[i]);
    // 	}
    // };
    for (var j = 0; j < searchRes.length; j++) {
        var wait = dateDiff(searchRes[j].date, dateBegin) * 1000;    //等待时间。

        (function () {

            var pointAg = [searchRes[j]], timer;
            // console.log(pointAg)
            timer = setTimeout(function () {

                var doneLen = donePoints.length;    //次数
                var linePoints = [];
                if (doneLen != 0) {
                    linePoints.push(donePoints[doneLen - 1]);
                }
                linePoints.push(pointAg[0]);
                donePoints.push(pointAg[0]);
                addLine(linePoints); //把原始数据的轨迹线添加到地图上。
                addMarker(pointAg);   //添加描点到页面上
                // bPoints.push(new BMap.Point(pointAg[0].gis_jd,pointAg[0].gis_wd));
                // setZoom(bPoints);   实时描点居中

            }, wait);
            // console.log(wait)
            timerArr.push(timer);
        })();
    };
}


//根据点信息实时更新地图显示范围，让轨迹完整显示。设置新的中心点和显示级别
// function setZoom(bPoints){
//     var view = map.getViewport(eval(bPoints));
//     var mapZoom = view.zoom; 
//     var centerPoint = view.center; 
//     map.centerAndZoom(centerPoint,mapZoom);
// }

//在轨迹点上创建图标，并添加点击事件，显示轨迹点信息。points,数组。
function addMarker(points) {
    var pointsLen = points.length;
    if (pointsLen == 0) {
        return;
    }
    var myIcon = new BMap.Icon("image/guiji/jc.png", new BMap.Size(50, 50), {
        offset: new BMap.Size(10, 10)
    });

    // 创建标注对象并添加到地图   
    for (var i = 0; i < pointsLen; i++) {
        var point = new BMap.Point(points[i].gis_jd, points[i].gis_wd);
        var marker = new BMap.Marker(point, {icon: myIcon});
        map.addOverlay(marker);
        (function () {
            var thePoint = points[i];
            marker.addEventListener("click", function () {
                showInfo(this, thePoint);   //点击弹窗
            });
        })();
    }
}



//点击轨迹点后显示信息窗口
function showInfo(thisMaker, point) {
    let opts = {
        width: 200,     // 信息窗口宽度
        height: 100,     // 信息窗口高度

    }
    var sContent =
        "<ul style='margin:0 0 5px 0;padding:0.2em 0'>"
        + "<li style='line-height: 26px;font-size: 15px;'>"
        + "<span style='width: 80px;display: inline-block;text-align: right;'>警员编号：</span>" + point.exten + "</li>"
        + "<li style='line-height: 26px;font-size: 15px;'>"
        + "<span style='width: 80px;display: inline-block;text-align: right;'>精度：</span>" + point.gis_jd + "</li>"
        + "<li style='line-height: 26px;font-size: 15px;'>"
        + "<span style='width: 80px;display: inline-block;text-align: right;'>纬度：</span>" + point.gis_wd + "</li>"
        + "<li style='line-height: 26px;font-size: 15px;'><span style='width: 80px;display: inline-block;text-align: right;'>时间：</span>" + point.date + "</li>"
        + "</ul>";
    var infoWindow = new BMap.InfoWindow(sContent, opts);  // 创建信息窗口对象
    thisMaker.openInfoWindow(infoWindow);   //图片加载完毕重绘infowindow
}


//添加线
function addLine(points) {
    var linePoints = [];
    if (points.length == 0) {
        return;
    }
    // 创建标注对象并添加到地图   
    for (var i = 0; i < points.length; i++) {
        linePoints.push(new BMap.Point(points[i].gis_jd, points[i].gis_wd));
    }
    var polyline = new BMap.Polyline(linePoints, {strokeColor: "red", strokeWeight: 4, strokeOpacity: 0.5});   //创建折线
    map.clearOverlays();        //清除所有的覆盖物
    polyline.disableMassClear();    //不清空线条
    map.addOverlay(polyline);   //增加折线
}


//求时间差的方法
function dateDiff(date1, date2) {
    var type1 = typeof date1
    var type2 = typeof date2;

    if (type1 == 'string') {
        date1 = stringToTime(date1);
    } else if (date1.getTime) {
        date1 = date1.getTime();
    }
    if (type2 == 'string') {
        date2 = stringToTime(date2);
    } else if (date2.getTime) {
        date2 = date2.getTime();
    }
    // console.log(date1)
    return (date1 - date2) / 500000000;//结果是秒
}

//字符串转成Time(dateDiff)所需方法
function stringToTime(string) {
    var f = string.split(' ', 2);
    var d = (f[0] ? f[0] : '').split('-', 3);
    var t = (f[1] ? f[1] : '').split(':', 3);
    return (new Date(
        parseInt(d[0], 10) || null,
        (parseInt(d[1], 10) || 1) - 1,
        parseInt(d[2], 10) || null,
        parseInt(t[0], 10) || null,
        parseInt(t[1], 10) || null,
        parseInt(t[2], 10) || null
    )).getTime();
}
