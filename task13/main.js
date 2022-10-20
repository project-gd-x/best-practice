const toastButton = document.getElementById('toastButton');
const toastWrap = document.getElementById('toast_wrap');
let params;
let counter = 1;
let oldTimestamp = 0;

function initToaster(_params) {
    params = _params;
}

function showToast(text) {
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

    // if (items.length >= 3) {
    //     items[0].remove();
    // }

    // let intervalId = setInterval(() => {
    //     let posTop = toastItem.style.top;
    //     const endPosTop = parseInt(toastItem.dataset.top);
    //     let posBottom = toastItem.style.bottom;
    //     const endPosBottom = parseInt(toastItem.dataset.bottom);
    //
    //     posTop = parseInt(posTop);
    //     posBottom = parseInt(posBottom);
    //
    //     if (params.position === 'top-right' || params.position === 'top-left') {
    //         if (posTop < endPosTop) {
    //             posTop += 1;
    //             toastItem.style.top = posTop + 'px';
    //         } else {
    //             toastItem.style.position = 'initial';
    //             clearInterval(intervalId);
    //
    //             setTimeout(()=> {
    //                 toastItem.remove();
    //             }, params.duration);
    //         }
    //     }
    //
    //     if (params.position === 'bottom-right' || params.position === 'bottom-left') {
    //         if (posBottom < endPosBottom) {
    //             posBottom += 1;
    //             toastItem.style.bottom = posBottom + 'px';
    //         } else {
    //             toastItem.style.position = 'initial';
    //             clearInterval(intervalId);
    //
    //             setTimeout(()=> {
    //                 toastItem.remove();
    //             }, params.duration);
    //         }
    //     }
    // }, 10);

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

        // setTimeout(()=> {
        //     toastItem.remove();
        // }, params.duration);
    }

    requestAnimationFrame(step);

    // const animationBox = document.querySelector(".box_for_animation");
    //
    // function step(timestamp) {
    //     if (!oldTimestamp) {
    //         oldTimestamp = timestamp;
    //     }
    //
    //     const progress = timestamp - oldTimestamp;
    //
    //     animationBox.style.transform = `translateY(${progress / 5}px)`;
    //
    //     const boxY = animationBox.getBoundingClientRect().bottom;
    //
    //     if (boxY <= window.innerHeight - 6) {
    //         window.requestAnimationFrame(step);
    //     }
    // }
    //
    // requestAnimationFrame(step);
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

// showToast('Message Toast Click');

// function startAnimation() {
//     requestId = window.requestAnimationFrame(step);
// }
// let oldTimestamp = 0;
// function step(timestamp) {
//     if (oldTimestamp === 0) {
//         oldTimestamp = timestamp;
//     }
//
//     console.log('Timestamp', timestamp - oldTimestamp ); // 16 , 1000
//
//     boxY += (timestamp - oldTimestamp) / 16;
//     animationBox.style.top = boxY + 'px';
//
//     oldTimestamp = timestamp;
//
//     requestAnimationFrame(step);
// }
//
// toastButton.addEventListener('click', () => {
//     requestAnimationFrame(step)
// })