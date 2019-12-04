$(document).ready(function () {
  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

});

$(function() {
  // 「TOPに戻る」ボタンがクリックされた時の動きを指定します。
  $("#up").click(function() {
    // ページの一番上までスクロールさせます。
    $('body, html').animate({scrollTop: 0}, 500, 'swing');
  });
});



// ページ内リンクのみ取得します。
$('a[href^=#]').click(function(){
  //デフォルトのイベントをキャンセル
  event.preventDefault();

  // 移動先となる要素を取得します。
  var target = $(this.hash);
  if (!target.length) return;

  // 移動先の位置を取得します
  var targetY = target.offset().top;

  // animateで移動します
  $('body').animate({scrollTop: targetY}, 500, 'swing');
});


