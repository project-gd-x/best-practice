const toastButton = document.getElementById('toastButton');
const toastWrap = document.getElementById('toast_wrap');
let params;
let counter = 1;
let windowsHeight = (window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight);

function initToaster(_params) {
    params = _params;
}

function showToast(text) {
    const toastItem = document.createElement('div');
    let items = document.querySelectorAll('.toast-item');
    toastItem.classList.add('toast-item');
    toastItem.innerHTML = text;

    if (params.position === 'top-right') {
        toastItem.style.top = '-40px';
        toastItem.style.right = '0';
        toastWrap.classList.add('top_right');
        toastItem.dataset.top = (items.length * 40).toString();
    }

    if (params.position === 'top-left') {
        toastItem.style.top = '-80px';
        toastItem.style.left = '0';
        toastWrap.classList.add('top_left');
        toastItem.dataset.top = (items.length * 40).toString();
    }

    if (params.position === 'bottom-left') {
        toastItem.style.bottom = '-40px';
        toastItem.style.left = '0';
        toastWrap.classList.add('bottom_left');
        toastItem.dataset.bottom = (items.length * 40).toString();
    }

    if (params.position === 'bottom-right') {
        toastItem.style.bottom = '-40px';
        toastItem.style.right = '0';
        toastWrap.classList.add('bottom_right');
        toastItem.dataset.bottom = (items.length * 40).toString();
        console.log('toastWrap', toastWrap);
    }

    setTimeout(() => {
        toastItem.classList.add('active');
    },100);

    toastWrap.append(toastItem);

    // if (items.length >= 3) {
    //     items[0].remove();
    // }

    let intervalId = setInterval(() => {
        let posTop = toastItem.style.top;
        const endPosTop = parseInt(toastItem.dataset.top);
        let posBottom = toastItem.style.bottom;
        const endPosBottom = parseInt(toastItem.dataset.bottom);

        posTop = parseInt(posTop);
        posBottom = parseInt(posBottom);

        if (params.position === 'top-right' || params.position === 'top-left') {
            if (posTop < endPosTop) {
                posTop += 1;
                toastItem.style.top = posTop + 'px';
            } else {
                toastItem.style.position = 'initial';
                clearInterval(intervalId);

                setTimeout(()=> {
                    toastItem.remove();
                }, params.duration);
            }
        }

        if (params.position === 'bottom-right') {
            if (posBottom < endPosBottom) {
                posBottom += 1;
                toastItem.style.bottom = posBottom + 'px';
            } else {
                toastItem.style.position = 'initial';
                clearInterval(intervalId);

                setTimeout(()=> {
                    toastItem.remove();
                }, params.duration);
            }
        }
    }, 10);
}

// setInterval(() => {
//
// }, 50);

toastButton.addEventListener('click', ()=> {
    showToast('Message Toast Click' + counter);
    counter++;
})

initToaster({
    count: 3,
    duration: 50000,
    position: 'bottom-right', // 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'
})

// showToast('Message Toast Click');