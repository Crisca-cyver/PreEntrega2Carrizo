function btn_title_show(title) {
    var btnTitle = document.getElementById('btn_title');
    btnTitle.innerHTML = title;
    btnTitle.classList.add('show');
}
function btn_title_hide() {
    var btnTitle = document.getElementById('btn_title');
    btnTitle.innerHTML = '';
    btnTitle.classList.remove('show');
}
