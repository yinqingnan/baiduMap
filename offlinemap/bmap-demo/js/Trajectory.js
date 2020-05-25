// 定义默认的精度，维度
var strLongitude = "106.53063501"
var strLatitude = "29.54460611"


var map = new BMap.Map("allmap");
var point = new BMap.Point(strLongitude, strLatitude);
map.centerAndZoom(point, 13);



// G5BrowserFeatures.GetSystemGis().then(res => {
//     let obj = JSON.parse(res);
//     strLongitude = obj.x
//     strLatitude = obj.y
//     strCityName = obj.CityName
//     var point = new BMap.Point(strLongitude, strLatitude);
//     map.centerAndZoom(point, 13); //地图位置和地图放大等级
// });

// 添加比例尺、缩放、平移工具条
map.enableScrollWheelZoom(); //启动鼠标滚轮缩放地图
// 左上角，添加比例尺
map.addControl(new BMap.NavigationControl());    
map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));    


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


// 添加比例尺、缩放、平移工具条
map.enableScrollWheelZoom(); //启动鼠标滚轮缩放地图
// 左上角，添加比例尺
map.addControl(new BMap.NavigationControl());    
map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));       

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
        elem: '#test5',
        type: 'datetime',
        range: '&',
        format: 'yyyy-MM-dd HH:mm'
    });

});
//获取轨迹数据
var pointArr = [];
var points = []

var timer; //定时器
var index = 0; //记录播放到第几个point

// 获取轨迹
$(".gettrajectory").click(function () {
    map.clearOverlays();
    var Police = $(".Police").val();
    if(!Police)
    {
        layer.alert('请输入警员', {title: '提示'})
        return;
    }
    var data = $("#test5").val()
    if(!data)
    {
        layer.alert('请选择查询时间', {title: '提示'})
        return;
    }
    // 判断不为空时将数据传出去
    if (Police != "" && data != "") {
        var arr = data.split("&")
        G5BrowserFeatures.GetMapTrack(Police, arr[0], arr[1]).then(function (res) { //浏览器方法调用开始
            Reset();
            var obj = JSON.parse(res);
            var obj= res
            if (obj.success == false) {
                alert(obj.msg)
            } else {
                if(obj.data.length<=0)
                {
                    layer.alert('未获取到警员轨迹信息', {title: '提示'})
                    return;
                }
                //获取警员坐标
                $.each(obj.data, function (i, item) {
                    points.push(new BMap.Point(item.gis_jd, item.gis_wd));
                    pointArr.push(item);
                });
                // 创建起点标注
                var StartingPoint=new BMap.Marker(new BMap.Point(points[0].lng, points[0].lat), {
                    icon: new BMap.Icon("image/guiji/qidian.png", new BMap.Size(50, 50))
                })
                map.addOverlay(StartingPoint);
                map.centerAndZoom(new BMap.Point(points[0].lng, points[0].lat), 16);
                //提示框
                
                StartingPoint.addEventListener("click", function () {
                    //开启信息窗口
                    map.openInfoWindow(new BMap.InfoWindow(TooltipHtml(pointArr[0]).join(""), {
                        width: 200,
                        height: 130
                    }), points[0]);
                  });
               
                // 创建终点标注
                var EndPoint = new BMap.Marker(new BMap.Point(points[points.length - 1].lng, points[points.length - 1].lat), {
                    icon: new BMap.Icon("image/guiji/zhongdian.png", new BMap.Size(50, 50))
                })
                EndPoint.addEventListener("click", function () {
                    //开启信息窗口
                    map.openInfoWindow(new BMap.InfoWindow(TooltipHtml(pointArr[pointArr.length-1]).join(""), {
                        width: 200,
                        height: 130
                    }), points[pointArr.length-1]);
                  });
                map.addOverlay(EndPoint);

                //连接所有点
                map.addOverlay(new BMap.Polyline(points, {
                    strokeColor: "#797979",
                    strokeWeight: 4,
                    strokeOpacity: 0.8
                }));
            }
        }); //浏览器方法结束
    }
});

function TooltipHtml(gis) {
    var html = []
    html.push("<ul>")
    html.push('<li class="content">');
    html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%"">警员编号:</h1> <h2 style="vertical-align:top;width:70%"">' + gis.exten + ' </h2></div>');
    html.push('</li>');
    html.push('<li class="content">');
    html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%">经度:</h1> <h2 style="vertical-align:top;width:70%"">' + gis.gis_jd + ' </h2></div>');
    html.push('</li>');
    html.push('<li class="content">');
    html.push('<div class="content_left " style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%"">纬度:</h1> <h2 style="vertical-align:top;width:70%"">' + gis.gis_wd + ' </h2></div>');
    html.push('</li>');
    html.push('<li class="content">');
    html.push('<div class="content_left" style="width:100%"> <h1 style="vertical-align:top;white-space:nowrap;word-break:keep-all;width:30%"">时间:</h1> <h2 style="vertical-align:top;width:70%"">' + gis.date + ' </h2></div>');
    html.push('</li>');
    html.push("</ul>");
    return html;
}

var drawOverlay = [];

function play() {
    var point = points[index];
    if (index > 0) {
        drawOverlay.push(map.addOverlay(new BMap.Polyline([points[index - 1], point], {
            strokeColor: "#797979",
            strokeWeight: 4,
            strokeOpacity: 0.8,
            enableEditing: false, //是否启用线编辑，默认为false
            enableClicking: true //是否响应点击事件，默认为true
        })));
    }
    //删除上一个点
    if (index > 1) {
        var prePoint = points[index - 1];
        var allOverlay = map.getOverlays();
        for (var i = 0; i < allOverlay.length - 1; i++) {
            if (allOverlay[i] instanceof BMap.Marker) {
                var position = allOverlay[i].getPosition();
                if (position.lat == prePoint.lat && position.lng == prePoint.lng) {
                    map.removeOverlay(allOverlay[i]);
                }
            }
        }
    }
    //绘制新的点
    if (index != 0 && index != (points.length - 1)) {
        var newPoint =new BMap.Marker(point, {
            icon: new BMap.Icon("image/guiji/jc.png", new BMap.Size(50, 50))
        })
        newPoint.addEventListener("click", function () {
          //开启信息窗口
            map.openInfoWindow(new BMap.InfoWindow(TooltipHtml(pointArr[index]).join(""), {
                width: 200,
                height: 130
            }), point);
        });
        map.addOverlay(newPoint);
    }
    
    
    //画面跟随
    map.panTo(point);
    index++;
    if (index < points.length) {
        timer = window.setTimeout("play(" + index + ")", 1000);
    } else {
        $(".play").show();
        $(".pause").hide();
        index = 0;
        if (timer) {
            window.clearTimeout(timer);
        }
        map.panTo(point);
    }
}

//播放
$(".play").click(function () {
    if (points.length > 0) {
        $(".play").hide();
        $(".pause").show();
        play();
    } else {
        layer.alert('请获取警员轨迹', {title: '提示'})
    }
});

//暂停
$(".pause").click(function () {
    $(".play").show();
    $(".pause").hide();
    if (timer) {
        window.clearTimeout(timer);
    }
});

function Reset() {
    if (timer) {
        window.clearTimeout(timer);
    }
    $(".play").show();
    $(".pause").hide();
    //清空点和先
    map.clearOverlays();
    //关闭弹窗
    map.closeInfoWindow();
    index = 0;
    points = [];
    pointArr = [];
    drawOverlay = [];
}

//重置
$(".Reset").click(function () {
    $(".Police").val('');
    $("#test5").val('');
    Reset();
});