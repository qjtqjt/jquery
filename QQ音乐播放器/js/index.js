$(document).ready(function(){
    $(".content_in_list").niceScroll({
        cursorcolor: "#333", 
        cursoropacitymax: 0.5,
    });
    $(".right_botton_list").niceScroll({
        cursorcolor: "#333", 
        cursoropacitymax: 0.5,
    });
    $(".list_title").hover(function() {
        // $(".content_in_list").mCustomScrollbar()
        //1.歌曲移入子菜单icon显示
       $(this).find(".sing_num_list").stop().fadeIn(100);
       $(this).find(".del").stop().fadeIn(100);
       $(this).find(".time").stop().fadeOut(100);
    }, function() {
        console.log(2121)
        // 移出
        $(this).find(".sing_num_list").stop().fadeOut(100);
        $(this).find(".del").stop().fadeOut(100);
        $(this).find(".time").stop().fadeIn(100);
    })
    // 获取数据
    getPlayerList()
    function getPlayerList() {
        $.ajax({
            url: '../source/musiclist.json',
            dataType: 'json',
            success: function (data) {
                console.log(data)
            },
            error: function (e) {
                console.log(e)
            }
        })
    }
})