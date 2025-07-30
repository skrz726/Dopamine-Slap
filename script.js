const animations = [
    "animations/highfive1.mp4",
    "animations/highfive2.mp4",
    "animations/fistbump1.mp4",
    "animations/slap1.mp4",
    "animations/cheer1.mp4",
    "animations/swag1.mp4"
];

const sounds = [
    "sounds/slap1.wav",
    "sounds/cheer1.wav",
    "sounds/punch1.wav",
    "sounds/woosh1.wav",
    "sounds/laugh1.wav"
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRandom() {
    const video = document.getElementById("animationPlayer");
    const audio = document.getElementById("soundPlayer");

    const randomVideo = getRandomItem(animations);
    const randomSound = getRandomItem(sounds);

    video.src = randomVideo;
    video.muted = false;
    video.play();

    audio.src = randomSound;
    audio.play();
}
