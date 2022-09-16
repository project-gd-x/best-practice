const toastButton = document.getElementById('toastButton');
const toastWrap = document.getElementById('toast_wrap');
let params;

function initToaster(_params) {
    params = _params;
}

function showToast(text) {
    const toastItem = document.createElement('div');
    toastItem.classList.add('toast-item');
    toastItem.innerHTML = text;

    setTimeout(() => {
        toastItem.classList.add('active');
    },100);

    toastWrap.append(toastItem);

    let items = document.querySelectorAll('.toast-item');

    for (let i = 0; i < items.length; ++i) {
        if (i >= 3) {
            toastItem.remove();
        }
    }

    setTimeout(()=> {
        toastItem.remove();
    }, params.duration);
}

toastButton.addEventListener('click', ()=> {
    showToast('Message Toast Click');
})

initToaster({
    count: 3,
    duration: 5000
})

showToast('Message Toast Click');