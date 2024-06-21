function checkNickname() {
    const nickname = document.getElementById('nickname').value;
    const correctNickname = 'meubem'; // Substitua por seu apelido

    if (nickname === correctNickname) {
        document.querySelector('.login-card').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    } else {
        document.getElementById('error-message').classList.remove('hidden');
    }
}



function nextPage() {
    window.location.href = "yes.html";
}
function nextPage2() {
    window.location.href = "yes2.html";
}
function nextPage3() {
    window.location.href = "flower.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

const audio = document.getElementById('backgroundMusic');

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function setVolume(volume) {
    audio.volume = volume;
}

