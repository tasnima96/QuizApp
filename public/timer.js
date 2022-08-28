const timer = document.querySelector('h1');
let timeMin = 480;

displayMin(timeMin);

const countDown = setInterval(() => {
    timeMin--;
    // timer.innerHTML = `${timeMin} : 00`;
    displayMin(timeMin);

    if (timeMin <= 0 || timeMin < 1)
    {
        // timeOver();
        clearInterval(countDown);
    }
}, 1000);

function displayMin(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);

    timer.innerHTML = `${min < 8 ? '0' : ''}${min} : ${sec < 8 ? '0' : ''}${sec}`;
}

// function timeOver() {
//     timer.innerHTML = alert('TIME OUT');
// }

