(function () {
  function $(id) {
    return document.getElementById(id);
  }

  document.onkeydown = function (evt) {
    var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
    if (keyCode == 13) {
      evt.preventDefault();
    }
  }

  var card = $('card'),
    openB = $('open'),
    closeB = $('close')

  openB.addEventListener('click', function () {

    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  const video = document.querySelector('.bg-video');

  // 用户点击页面时，移除静音
  document.addEventListener('click', () => {
    video.muted = false;
    video.play();
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());



var timer = null;
