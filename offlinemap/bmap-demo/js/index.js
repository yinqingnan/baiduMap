// 百度地图API功能
// 定义默认的精度，维度
var strLongitude = "106.53063501";
var strLatitude = "29.54460611";
var map = new BMap.Map("allmap");
var point = new BMap.Point(strLongitude, strLatitude);
map.centerAndZoom(point, 13);                   //初始化地图位置和地图放大等级


var top_left_control = new BMap.ScaleControl();// 左上角，添加比例尺
var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
map.addControl(new BMap.ScaleControl()); //显示比例尺在右下角


//添加控件和比例尺
map.enableContinuousZoom();             //启用连续缩放效果
map.enableScrollWheelZoom(true);        //开启鼠标滚轮缩放
map.addControl(top_left_control);
map.addControl(top_left_navigation);

// var marker = new BMap.Marker(new BMap.Point(106.53063501, 29.54460611)); // 创建点
// map.addOverlay(marker);    //增加点

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



// //地图加载完时关闭预加载模态框
map.addEventListener("tilesloaded", function () {
    $(".module").hide()

})

// 点击按钮关闭预加载模态框
$(".close")[0].onclick = () => {
    $(".module").hide()
}






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

var ii = 0
$(".menuone").click(function (e) {
    ii++
    if (ii % 2 == 1) {
        $(".tc").show()
        $(".Enclosure").hide()
        $('.Tool').hide

    } else {
        $(".tc").hide()
    }
    ii = 0
    Enclosurenum = 0
    Toolnum=0

    stopPropagation(e);
});

//  给所有元素绑定事件
$(document).bind('click', function () {
    $(".tc").hide();
    $(".Enclosure").hide()
    $(".Tool").hide()
    ii = 0
    Enclosurenum = 0
    Toolnum=0

});
$(".tc").click(function (e) {
    stopPropagation(e);

});

var Enclosurenum = 0
$($(".menu>ul>li")[2]).click((e) => {
    Enclosurenum++
    if (Enclosurenum % 2 == 1) {
        $(".Enclosure").show()
        $(".Tool").hide()
    } else {
        $(".Enclosure").hide()

    }
    $(".tc").hide()     //关闭模态框
    ii = 0
    Enclosurenum = 0
    Toolnum=0
    stopPropagation(e);
})
var Toolnum=0
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
    Toolnum=0
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

// // 测试调用浏览器方法
// function lnqsj() {
//     clear()
//     miaodian(testmsg1)
// }
//
//
function Administration() {
    G5BrowserFeatures.ShowElectricfence()
}
//
// 关闭工具栏区域弹窗
$(".Save_area_header>h2").click(()=>{
    $(".Save_area").hide()
    clearAll()

})
// 工具栏区域取消按钮
$($('.Save_area_footer>button')[0]).click((e)=>{
    $(".Save_area").hide()
    clearAll()

})
$('.Save_area_body>div>div>input').focus(()=>{
    $('.Save_area_body>div>div>input').attr('placeholder',"");
})


