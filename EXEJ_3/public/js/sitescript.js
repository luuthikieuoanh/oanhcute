const a = document.querySelector('.image')
let timeout;
function tocdo(speed) {
    let b = 0;
    timeout = setTimeout(function quay() {
        b += 1;
        a.style.transform = 'rotate(' + b + 'deg)'
        let c = setTimeout(quay, speed);
    }, speed);
}

let b = tocdo(10);

const lv0 = document.querySelector('.level0');
lv0.addEventListener('click', () => {
   clearTimeout(timeout)
})

