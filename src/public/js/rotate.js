$(function() {
  alert(123);
  var $btn = $('.playbtn');
  var playnum = 1; //初始次数，由后台传入
  $('.playnum').html(playnum);
  var isture = 0;
  var clickfunc = function() {
    var data = [1, 2, 3, 4, 5, 6];
    //data为随机出来的结果，根据概率后的结果
    data = data[Math.floor(Math.random() * data.length)];
    switch(data) {
      case 1:
        rotateFunc(2, 60, '恭喜您获得888元中博课程神券！');
        break;
      case 2:
        rotateFunc(2, 60, '恭喜您获得8688元iPhone X 64G！');
        break;
      case 3:
        rotateFunc(3, 120, '恭喜您获得3888元中博课程神券！');
        break;
      case 4:
        rotateFunc(4, 180, '恭喜您获得100元京东E卡!');
        break;
      case 5:
        rotateFunc(5, 240, '谢谢参与~再来一次吧~');
        break;
      case 6:
        rotateFunc(6, 300, '恭喜您获得2888元Appwatch3!');
        break;
    }
  }
  $btn.click(function() {
    if(isture) return; // 如果在执行就退出
    isture = true; // 标志为 在执行
    //先判断是否登录,未登录则执行下面的函数
    if(1 == 2) {
      $('.playnum').html('0');
      alert("请先登录");
      isture = false;
    } else { //登录了就执行下面
      if(playnum <= 0) { //当抽奖次数为0的时候执行
        alert("没有次数了");
        $('.playnum').html(0);
        isture = false;
      } else { //还有次数就执行
        playnum = playnum - 1; //执行转盘了则次数减1
        if(playnum <= 0) {
          playnum = 0;
        }
        $('.playnum').html(playnum);
        clickfunc();
      }
    }
  });
  var rotateFunc = function(awards, angle, text) {
    isture = true;
    $btn.stopRotate();
    $btn.rotate({
      angle: 0,
      duration: 4000, //旋转时间
      animateTo: angle + 1440, //让它根据得出来的结果加上1440度旋转
      callback: function() {
        isture = false; // 标志为 执行完毕
        alert(text);
      }
    });
  };
});
