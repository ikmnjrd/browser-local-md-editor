import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
const hookKeyList = [9];

/* DOMの読み込み完了時にイベント登録などの諸々 */
globalThis.document.addEventListener('DOMContentLoaded', function() {
  const preEl = globalThis.document.getElementById('content');
  const divEl = globalThis.document.getElementById('preview');
  init(preEl, divEl);
}, { once: true });

function init(editerEl, previewEl) {
  /* 初期描画 */
  const tempText = getTempData()
  if (tempText) {
    previewEl.innerHTML = md.render(tempText)
    editerEl.innerText = tempText
  } else {
    previewEl.innerHTML = md.render(editerEl.innerText);
  }

  /* 文字の入力イベント登録 */
  editerEl.onkeydown = function onKeyDown(e) {
    if (hookKeyList.includes(e.keyCode)) { /* tab key */
        e.preventDefault();
    };
  };
  editerEl.onkeyup = (e) => {
    if (e.keyCode === 9) { /* [tab] */
        /* whitespace * 2 */
        globalThis.document.execCommand('insertHTML', false, '  ');
    } else if (e.keyCode === 13) {/* [enter] */
    };

    previewEl.innerHTML = md.render(e.target.innerText);

    /* 毎回ローカルストレージに保存 */
    setTempData(e.target.innerText)
  };
};

function setTempData(preString) {
  localStorage.setItem('mdlocal', preString);
}
function getTempData() {
  return localStorage.getItem('mdlocal');
}