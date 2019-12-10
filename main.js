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

/**
 * animatedクラスを持つ要素が画面内に入ったら
 * Animate.cssのfadeInUpエフェクトを適用
 */
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      this.destroy();
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '100%',
});
