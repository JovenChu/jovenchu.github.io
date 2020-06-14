(function() {
    Storage.prototype.setExpire = (key, value, expire) => {
        let obj = {
            data: value,
            time: Date.now(),
            expire: expire
        };
        localStorage.setItem(key, JSON.stringify(obj));
    }

    Storage.prototype.getExpire = key => {
        let val = localStorage.getItem(key);
        if (!val) {
            return val;
        }
        val = JSON.parse(val);
        if (Date.now() - val.time > val.expire) {
            localStorage.removeItem(key);
            return null;
        }
        return val.data;
    }

    function isNightRange(beginTime, endTime) {
        let nowDate = new Date();
        var nowTime = nowDate.getHours() + ":" + nowDate.getMinutes();
        var strb = beginTime.split(":");
        if (strb.length != 2) {
            return false;
        }

        var stre = endTime.split(":");
        if (stre.length != 2) {
            return false;
        }

        var strn = nowTime.split(":");
        if (stre.length != 2) {
            return false;
        }

        var b = new Date();
        var e = new Date();
        var n = new Date();

        b.setHours(strb[0]);
        b.setMinutes(strb[1]);
        e.setHours(stre[0]);
        e.setMinutes(stre[1]);
        n.setHours(strn[0]);
        n.setMinutes(strn[1]);

        console.log(n.getTime());
        if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
            return true;
        } else {
            console.log("now Date is：" + n.getHours() + ":" + n.getMinutes() + "，is not Night！");
            return false;
        }
    }

    const expireTime1H = 1000 * 60 * 60; // 1小时过期
    function isNightFun() {
        let isNightTemp = localStorage.getExpire('night');

        // 第一次进来判断是白天还是晚上
        if (isNightTemp == null || isNightTemp == undefined) {
            if (isNightRange("20:00", "23:59") || isNightRange("00:00", "07:00")) {
                isNightTemp = 'true';
            } else {
                isNightTemp = 'false';
            }
            localStorage.setExpire("night", isNightTemp, expireTime1H);
        }
        return isNightTemp;
    }

    let isNight = isNightFun();
    let nightNav;
  
    function applyNight(value) {
        if (value.toString() === 'true') {
            document.body.classList.add('night');
        } else {
            document.body.classList.remove('night');
        }
    }
  
    function findNightNav() {
        nightNav = document.getElementById('night-nav');
        if (!nightNav) {
            setTimeout(findNightNav, 100);
        } else {
            nightNav.addEventListener('click', switchNight);
        }
    }
  
    function switchNight() {
        isNight = isNight ? isNight.toString() !== 'true' : true;
        applyNight(isNight);
        localStorage.setItem('night', isNight);
    }
  
    findNightNav();
    isNight && applyNight(isNight);
  }());