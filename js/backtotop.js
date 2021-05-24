(function () {
    var backtotop = document.getElementById('backtotop');

    var timer;

    backtotop.onclick = function () {
        // 设表先关
        clearInterval(timer);
        timer = setInterval(function () {
            document.documentElement.scrollTop -= 100;

            if (document.documentElement.scrollTop <= 0) {
                clearInterval(timer);
            }
        }, 20);
    };

    //　监听页面的滚动
    window.onscroll = function () {
        // 卷动值
        var scrollTop = document.documentElement.scrollTop || window.scrollY;

        // 页面没有卷动 就隐藏
        if (scrollTop == 0) {
            backtotop.style.display = 'none';
        } else {
            backtotop.style.display = 'block';
        }
    };
})();