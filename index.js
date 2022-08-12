import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
const hookKeyList = [9];

/* DOMの読み込み完了時にイベント登録などの諸々 */
globalThis.document.addEventListener('DOMContentLoaded', function() {
  const preEl = globalThis.document.getElementById('content');
  const divEl = globalThis.document.getElementById('preview');
  const saveEl = globalThis.document.getElementById('saveButton');
  init(preEl, divEl, saveEl);
}, { once: true });

function init(editerEl, previewEl, saveBtnEl) {
  /* 初期描画 */
  previewEl.innerHTML = md.render(editerEl.innerText);

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
  };

  /* ダウンロードボタン */
  attachSaveFunc(saveBtnEl, editerEl);
};

function attachSaveFunc(saveEl, contentEl) {
  saveEl.onclick = () => {
    const now = new Date();
    const tempLink = document.createElement("a");
    const textBlob = new Blob([contentEl.innerText], {type: 'text/plain'});

    tempLink.setAttribute('href', URL.createObjectURL(textBlob));
    tempLink.setAttribute('download', `${now.toLocaleDateString()}.md`);
    tempLink.click();

    URL.revokeObjectURL(tempLink.href);
  }
}