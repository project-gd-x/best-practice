const toastButton = document.getElementById('toastButton');
const toastWrap = document.getElementById('toast_wrap');
let params;
let counter = 1;

function initToaster(_params) {
    params = _params;
}

function showToast(text) {
    let oldTimestamp = 0;
    const toastItem = document.createElement('div');
    let items = document.querySelectorAll('.toast-item');
    toastItem.classList.add('toast-item');
    toastItem.style.zIndex = '1';
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
    }

    setTimeout(() => {
        toastItem.classList.add('active');
    },100);


    if (params.position === 'top-right' || params.position === 'top-left') {
        toastWrap.append(toastItem);
    } else {
        toastWrap.prepend(toastItem);
    }

    if (items.length >= 3) {
        items[0].remove();
    }

    function step(timestamp) {
        let posTop = toastItem.style.top;
        const endPosTop = parseInt(toastItem.dataset.top);
        let posBottom = toastItem.style.bottom;
        const endPosBottom = parseInt(toastItem.dataset.bottom);

        posTop = parseInt(posTop);
        posBottom = parseInt(posBottom);

        if (!oldTimestamp) {
            oldTimestamp = timestamp;
        }

        if (params.position === 'top-right' || params.position === 'top-left') {
            posTop += (timestamp - oldTimestamp) / 16;
            toastItem.style.top = posTop + 'px';
            oldTimestamp = timestamp;

            if (posTop <= endPosTop) {
                window.requestAnimationFrame(step);
            } else {
                toastItem.style.position = 'initial';
            }
        }

        if (params.position === 'bottom-right' || params.position === 'bottom-left') {
            posBottom += (timestamp - oldTimestamp) / 16;
            toastItem.style.bottom = posBottom + 'px';
            oldTimestamp = timestamp;

            if (posBottom < endPosBottom) {
                window.requestAnimationFrame(step);
            }
        }

        setTimeout(()=> {
            toastItem.remove();
        }, params.duration);
    }

    requestAnimationFrame(step);
}

toastButton.addEventListener('click', ()=> {
    showToast('Message Toast Click' + counter);
    counter++;
})

initToaster({
    count: 3,
    duration: 5000,
    position: 'top-right', // 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'
})