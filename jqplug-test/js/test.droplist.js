function makedata(num) {
    var sl = [];
    for (var i = 0; i < num; i++) {
        sl.push({
            txt: 'xx_' + i,
            val: 'xx_' + i
        });
    }
    return sl;
}

$(document).ready(function() {

    // 普通下拉，普通滚动条
    $('.d1').droplist({
        nodata: {
            txt: '无数据',
            val: '_'
        },
        sel_draw: true,
        filter: 'default',
        paging_mode: "S",
        data: makedata(20)
    }).droplist('set', {
        txt: 'xx_3',
        val: 'xx_3'
    });

    // 普通下拉
    $('.d2').droplist({
        sel_click_cls: '.d2_sel',
        paging_mode: "H",
        data: function() {
            return makedata(22);
        }
    });

    // 普通下拉
    $('.d3').droplist({
        sel_draw: true,
        paging_mode: "V",
        show_num_auto: true,
        filter: function(fstr, dl_item) {
            if (new RegExp(fstr).test(dl_item.txt)) {
                return true;
            }
            return false;
        },
        data: function() {
            var sel = this;
            setTimeout(function() {
                sel.droplist('load', makedata(15));
            }, 2000);
        }
    });

    // 普通下拉
    $('.d4').droplist({
        sel_draw: true,
        paging_mode: "S",
        filter: 'default',
        show_num_auto: true,
        data: function() {
            return makedata(parseInt(Math.random() * 10) + 1);
        }
    });
});