let index = 0;
let audioElement = new Audio('songs/0.mp3');
let masterplay = document.getElementById('masterplay');
// let masterplay = document.getElementsById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let masterSongName = document.getElementById('masterSongName');

let song = [
    { songName: 'Let me love you', filepath: 'songs/0.mp3', coverimg: 'imgs/images (1).jpg' },
    { songName: 'Duniyaa', filepath: 'songs/1.mp3', coverimg: 'imgs/2.jpg' },
    { songName: 'Mere Sohneya', filepath: 'songs/2.mp3', coverimg: 'imgs/1.jpg' },
    { songName: 'Raataan Lambiyan', filepath: 'songs/3.mp3', coverimg: 'imgs/3.jpg' },
    { songName: 'Tere Bin - Simmba', filepath: 'songs/4.mp3', coverimg: 'imgs/4.jpg' },
    { songName: 'Tum Se Hi ', filepath: 'songs/5.mp3', coverimg: 'imgs/5.jpg' },

]

songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = song[i].coverimg;
    element.getElementsByClassName('songName')[0].innerText = song[i].songName;
});

// function masterPlay() {
//     console.log("hello");
// }

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }

})


audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = audioElement.duration * myProgressBar.value / 100;
});

const makeAllPlay = () => {
    songItemPlay.forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    });
}

songItemPlay.forEach((element) => {

    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            makeAllPlay();
            audioElement.play();
            index = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `songs/${index}.mp3`;
            masterSongName.innerText = song[index].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');

        } else {
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            gif.style.opacity = 0;
            console.log("hello friends");
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');

        }

    });
});
document.getElementById('previous').addEventListener('click', () => {
    if (index <= 0) {
        index = 0;
    }
    else {
        index -= 1;
    }
    audioElement.src = `songs/${index}.mp3`;
    masterSongName.innerText = song[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});

document.getElementById('next').addEventListener('click', () => {
    if (index >= 5) {
        index = 0;
    }
    else {
        index += 1;
    }
    audioElement.src = `songs/${index}.mp3`;
    masterSongName.innerText = song[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});
