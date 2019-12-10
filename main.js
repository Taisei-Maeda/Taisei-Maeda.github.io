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


// animatedクラスの付いた要素にwaypointを登録
$('.animated').waypoint({
  handler(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素にfadeInUpクラスを付けることで
       * アニメーションを開始
       */
      $(this.element).addClass('fadeInUp');

      /**
       * waypointを削除することで、この要素に対しては
       * これ以降handlerが呼ばれなくなる
       */
      this.destroy();
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});
