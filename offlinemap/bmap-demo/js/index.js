
const map = new BMap.Map("allmap");
if (typeof map != 'undefined') {
    map.addEventListener("zoomend", function (e) {
        layer.msg('地图级别: ' + map.getZoom() + (map.getZoom() > 14 ? ', 示例中只有15级地图,超过的无法显示!' : ''), {'offset': 'b'});
    });
}

// var strLongitude = "";
// var strLatitude = "";
// var CityName="XXX";
// // 百度地图API功能
// // 定义默认的精度，维度
// strLongitude = "106.53063501";
// strLatitude = "29.54460611";
// var point = new BMap.Point(strLongitude, strLatitude);
// map.centerAndZoom(point, 13);   //初始化地图位置和地图放大等级




var strLongitude = "";
var strLatitude = "";
var CityName="";
var point = new BMap.Point(strLongitude, strLatitude);
map.centerAndZoom(point, 13);   //初始化地图位置和地图放大等级
G5BrowserFeatures.GetSystemGis().then(res => {
    if (res != "" && res != null && res != undefined) {
        let obj = JSON.parse(res);
        strLongitude = obj.x
        strLatitude = obj.y
        strCityName = obj.CityName
        var point = new BMap.Point(strLongitude, strLatitude);
        map.centerAndZoom(point, 13); //地图位置和地图放大等级
        $(".Location")[0].innerHTML = strCityName;
        $(".Location")[1].innerHTML = strCityName;
    }else{
        strLongitude = 116.405994;
        strLatitude = 39.913828;
        CityName="北京市";
    }
});


$($(".Location")[1]).click(function(){
    let point = new BMap.Point(strLongitude, strLatitude);
    map.centerAndZoom(point, 13); //地图位置和地图放大等级
})



// 添加比例尺、缩放、平移工具条
map.enableScrollWheelZoom(); //启动鼠标滚轮缩放地图

// map.addControl(new BMap.MapTypeControl());          //添加地图类型控件
var top_left_control = new BMap.ScaleControl({
    anchor: BMAP_ANCHOR_BOTTOM_RIGHT
}); // 左上角，添加比例尺
map.addControl(top_left_control);

// 添加带有定位的导航控件
var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 是否启用显示定位
    enableGeolocation: false

});
map.addControl(navigationControl);

// 定义清除地图上所有覆盖物的方法
function clearAll() {
    //清空覆盖物数组与地图上的覆盖物
    publicDrawingManager.clearStoreAndMap(map);
    //清除绘制的覆盖物列表
    var drawlist = document.getElementById('drawlist');
    while (drawlist.lastChild) {
        drawlist.removeChild(drawlist.lastChild);
    }
};


//地图加载完时关闭预加载模态框
map.addEventListener("tilesloaded", function () {
    $(".module").hide()

})

// 点击按钮关闭预加载模态框
$(".close")[0].onclick = () => {
    $(".module").hide();
};

// 定义清除地图上所有覆盖物的方法
function clearAll() {
    //清空覆盖物数组与地图上的覆盖物
    publicDrawingManager.clearStoreAndMap(map);
    //清除绘制的覆盖物列表
    var drawlist = document.getElementById('drawlist');
    while (drawlist.lastChild) {
        drawlist.removeChild(drawlist.lastChild);
    }
}
var Str = null;

//TODO 模拟数据
Str = [
    {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "郭德纲",
        "Coordinate": "[{\"lng\":106.423701,\"lat\":29.557174},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    }, {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "郭麒麟",
        "Coordinate": "[{\"lng\":106.430,\"lat\":29.542},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    }, {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "岳云鹏",
        "Coordinate": "[{\"lng\":106.440,\"lat\":29.543},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    }, {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "阎鹤祥",
        "Coordinate": "[{\"lng\":106.450,\"lat\":29.544},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    }, {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "郭美美",
        "Coordinate": "[{\"lng\":106.460,\"lat\":29.545},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    }, {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "张鹤伦",
        "Coordinate": "[{\"lng\":106.470,\"lat\":29.546},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    }, {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "郎鹤炎",
        "Coordinate": "[{\"lng\":106.480,\"lat\":29.547},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    }, {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "张云雷",
        "Coordinate": "[{\"lng\":106.490,\"lat\":29.548},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    }, {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "杨九郎",
        "Coordinate": "[{\"lng\":106.500,\"lat\":29.549},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    },
    {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "于谦",
        "Coordinate": "[{\"lng\":106.510,\"lat\":29.550},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    },
    {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "杨九郎",
        "Coordinate": "[{\"lng\":106.510,\"lat\":29.550},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    },
    {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "于谦",
        "Coordinate": "[{\"lng\":106.510,\"lat\":29.550},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    },
    {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "杨九郎",
        "Coordinate": "[{\"lng\":106.510,\"lat\":29.550},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    },
    {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "于谦",
        "Coordinate": "[{\"lng\":106.510,\"lat\":29.550},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    },
    {
        "Id": "5a05225a-4a53-4de6-8fe6-48a97881f71a",
        "Name": "杨九郎",
        "Coordinate": "[{\"lng\":106.510,\"lat\":29.550},{\"lng\":106.45992,\"lat\":29.535054},{\"lng\":106.39783,\"lat\":29.506642}]"
    }
]
// 全局覆盖物
var ii = 0
var Coverings = null

$(".search").click(()=>{
    let str = $("#suggestId").val()
    $(".nameList").empty()
    G5BrowserFeatures.GetGisAreaList(str).then(res => {
         var Str = JSON.parse(res);
         for (var i in Str) {
            $(".nameList").append($("<li class='Listbtn'></li>").text(Str[i].Name))
            for (let i = 0; i < $(".Listbtn").length; i++) {
                $($(".Listbtn")[i]).attr('title', Str[i].Name)
            }
        }
        $(".Listbtn").click(function () {
            var index = $(".nameList li").index(this);
            var data = Str[index];
            map.removeOverlay(polygon);
            var str = JSON.parse(data.Coordinate);
            var Zoomlevel = JSON.parse(data.ZoomLevel);
            var arr = [];
            for (let item in str) {
                arr.push(new BMap.Point(str[item].lng, str[item].lat))
            }
            var polygon = new BMap.Polygon(arr, {
                strokeColor: "blue",
                strokeWeight: 2,
                strokeOpacity: 1,
                fillColor: "", //填充颜色。当参数为空时，圆形将没有填充效果。
            }); //创建多边形
            Coverings = polygon
            var x = 0;
            var y = 0;
            for (var k = 0; k < str.length; k++) {
                x = x + parseFloat(str[k].lng);
                y = y + parseFloat(str[k].lat);
            }
            x = x / arr.length;
            y = y / arr.length;
            var posi = new BMap.Point(x, y);
            // 覆盖物居中
            map.centerAndZoom(posi, Zoomlevel); //描点自动居中
            map.addOverlay(polygon); //添加覆盖物
            setTimeout(() => {
                map.removeOverlay(polygon);
            }, 5000);
        })
    })
})
var ii = 0;
$(".menuone").click(function (e) {
    $("#suggestId").val('')
    $(".nameList").empty() //每一次都优先清空一次所有子集
    G5BrowserFeatures.GetGisAreaList("").then(res => {
        if (res != "") {
            var Str = JSON.parse(res);
            for (var i in Str) {
                if(i<=11){
                    $(".nameList").append($("<li class='Listbtn'></li>").text(Str[i].Name))
                    for (let i = 0; i < $(".Listbtn").length; i++) {
                        $($(".Listbtn")[i]).attr('title', Str[i].Name)
                    }
                }
            }
            $(".Listbtn").click(function () {
                var index = $(".nameList li").index(this);
                var data = Str[index];
                map.removeOverlay(polygon);
                var str = JSON.parse(data.Coordinate);
                var Zoomlevel = JSON.parse(data.ZoomLevel);
                var arr = [];
                for (let item in str) {
                    arr.push(new BMap.Point(str[item].lng, str[item].lat))
                }
                var polygon = new BMap.Polygon(arr, {
                    strokeColor: "blue",
                    strokeWeight: 2,
                    strokeOpacity: 1,
                    fillColor: "", //填充颜色。当参数为空时，圆形将没有填充效果。
                }); //创建多边形
                Coverings = polygon
                var x = 0;
                var y = 0;
                for (var k = 0; k < str.length; k++) {
                    x = x + parseFloat(str[k].lng);
                    y = y + parseFloat(str[k].lat);
                }
                x = x / arr.length;
                y = y / arr.length;
                var posi = new BMap.Point(x, y);
                // 覆盖物居中
                map.centerAndZoom(posi, Zoomlevel); //描点自动居中
                map.addOverlay(polygon); //添加覆盖物
                setTimeout(() => {
                    map.removeOverlay(polygon);
                }, 5000);
            })
        }
    });
    ii++;
    if (ii % 2 == 1) {
        $(".tc").show();
        $(".Enclosure").hide();
        $('.Tool').hide;

    } else {
        $(".tc").hide();
    }
    ii = 0;
    Enclosurenum = 0;
    Toolnum = 0;

    stopPropagation(e);
});

//  给所有元素绑定事件
$(document).bind('click', function () {
    $(".tc").hide();
    $(".Enclosure").hide()
    $(".Tool").hide()
    ii = 0
    Enclosurenum = 0
    Toolnum = 0

});
$(".tc").click(function (e) {
    stopPropagation(e);

});

var Enclosurenum = 0;
$($(".menu>ul>li")[2]).click((e) => {
    Enclosurenum++;
    if (Enclosurenum % 2 == 1) {
        $(".Enclosure").show();
        $(".Tool").hide();
    } else {
        $(".Enclosure").hide();

    }
    $(".tc").hide();     //关闭模态框
    ii = 0;
    Enclosurenum = 0;
    Toolnum = 0;
    stopPropagation(e);
})
var Toolnum = 0
$($(".menu>ul>li")[3]).click((e) => {
    Toolnum++
    if (Toolnum % 2 == 1) {
        $(".Enclosure").hide()
        $(".Tool").show()

    } else {
        $(".Tool").hide()
    }
    $(".tc").hide()     //关闭模态框
    ii = 0
    Enclosurenum = 0
    Toolnum = 0
    stopPropagation(e);
})

// 阻止冒泡功能
function stopPropagation(e) {
    var ev = e || window.event;
    if (ev.stopPropagation) {
        ev.stopPropagation();
    } else if (window.event) {
        window.event.cancelBubble = true;//兼容IE
    }
}

// 电子围栏管理
function Administration() {
    G5BrowserFeatures.ShowElectricfence()
}
// 区域管理
function ShowGisAreaMgtList() {
    G5BrowserFeatures.ShowGisAreaMgtList();
}
// 关闭工具栏区域弹窗
$(".Save_area_header>h2").click(() => {
    $(".Save_area").hide();
    clearAll();
    map.clearOverlays();

})
// 工具栏区域取消按钮
$($('.Save_area_footer>button')[0]).click((e) => {
    $(".Save_area").hide();
    clearAll();
    map.clearOverlays();
})
$('.Save_area_body>div>div>input').focus(() => {
    $('.Save_area_body>div>div>input').attr('placeholder', "");
})




