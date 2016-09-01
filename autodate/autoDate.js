function isDays(y, m) {
    var days, tag = [];
    if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
        days = 31;
    } else if (m == 4 || m == 6 || m == 9 || m == 11) {
        days = 30;
    } else if (m == 2) {
        var isY = (0 == y % 4 && ((y % 100 != 0) || (y % 400 == 0)))
        if (isY) {
            days = 29;
        } else {
            days = 28;
        }
    }
    for (var i = 1; i <= days; i++) {
        tag.push(i);
    };
    return tag;
}

function d(s, e) {
    var s = s.split("-"),
        e = e.split("-"),
        sy = parseInt(s[0]),
        ey = parseInt(e[0]),
        sm = parseInt(s[1]),
        em = parseInt(e[1]),
        sd = parseInt(s[2]),
        ed = parseInt(e[2]),
        strdate = [];

    for (var i = sy; i <= ey; i++) {
        if (i == sy) { //开始年份
            if (sy == ey) {
                for (var j = 1; j <= 12; j++) {
                    if (j == sm) {
                        if (sm == em) {
                            var dds = isDays(i, j);
                            for (var k = 1; k <= dds.length; k++) {
                                if (k >= sd) {
                                    if (k <= ed) {
                                        // console.log(k);
                                        strdate.push(i + "-" + j + "-" + k);
                                    }
                                }
                            };
                        } else {
                            var dds = isDays(i, j);
                            for (var k = 1; k <= dds.length; k++) {
                                if (k >= sd) {
                                    strdate.push(i + "-" + j + "-" + k);
                                }
                            };
                        }
                    }
                    if (j == em) {
                        if (sm != em) {
                            var dds = isDays(i, j);
                            for (var k = 1; k <= dds.length; k++) {
                                if (k <= ed) {
                                    strdate.push(i + "-" + j + "-" + k);
                                }
                            };
                        }
                    }
                }
            } else {
                for (var j = 1; j <= 12; j++) {
                    if (j == sm) {
                        var dds = isDays(i, j);
                        for (var k = 1; k <= dds.length; k++) {
                            if (k >= sd) {
                                strdate.push(i + "-" + j + "-" + k);
                            }
                        };
                    }
                    if (j > sm) {
                        var dds = isDays(i, j);
                        for (var k = 1; k <= dds.length; k++) {
                            strdate.push(i + "-" + j + "-" + k);
                        };
                    }
                }
            }
        } else if (i == ey) { //结束年份
            for (var j = 1; j <= 12; j++) {
                if (j == em) {
                    var dds = isDays(i, j);
                    for (var k = 1; k <= dds.length; k++) {
                        if (k <= ed) {
                            strdate.push(i + "-" + j + "-" + k);
                        }
                    };
                }
                if (j < em) {
                    var dds = isDays(i, j);
                    for (var k = 1; k <= dds.length; k++) {
                        strdate.push(i + "-" + j + "-" + k);
                    };
                }
            }
        } else { //其他年份
            for (var j = 1; j <= 12; j++) {
                var dds = isDays(i, j);
                for (var k = 1; k <= dds.length; k++) {
                    strdate.push(i + "-" + j + "-" + k);
                };
            }
        };
    }
    return strdate;
}
