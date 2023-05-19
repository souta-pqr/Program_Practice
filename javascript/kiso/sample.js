window.onload = function(){
//idを取得する
  var message = document.getElementById('text');
//色を赤にする
  message.style.backgroundColor = 'red';

  var btn = document.getElementById('btn');
//onclickイベントを設定し、ボタンが押されたらアラートで'click'を表示
  btn.onclick = function(){
    alert('clicked');
  }
}

