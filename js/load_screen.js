window.onload = function() {
    setTimeout(function() {
        var load_time = 1000;
        var load = document.getElementById('load');
        var op = 1;
        var timer = setInterval(function() {
            if (op <= .025) {
                clearInterval(timer);
                load.remove();
            }
            op -= op * 0.01 + 0.025;
            load.style.opacity = op;
        }, 35);
    }, 1500);
}