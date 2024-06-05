// console.log("welcom to spotify");

// let songIndex =0;
// let audioElement = new Audio('songs/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let songItems = Array.from(document.getElementsByClassName("songItem"));

// let songs = [
//     {songName: "Salam-e-Ishq" , filePath: "songs/1.mp3" , coverPath: "covers/1.jpg"},
//     {songName: "Rabba" , filePath: "songs/2.mp3" , coverPath: "covers/2.jpg"},
//     {songName: "Ud Jaa Kala Kava" , filePath: "songs/3.mp3" , coverPath: "covers/3.jpg"},
//     {songName: "Dil Jhoom" , filePath: "songs/4.mp3" , coverPath: "covers/4.jpg"},
//     {songName: "Salam-e-Ishq" , filePath: "songs/5.mp3" , coverPath: "covers/5.jpg"},
//     {songName: "Salam-e-Ishq" , filePath: "songs/6.mp3" , coverPath: "covers/6.jpg"},
//     {songName: "Salam-e-Ishq" , filePath: "songs/7.mp3" , coverPath: "covers/7.jpg"},
//     {songName: "Salam-e-Ishq" , filePath: "songs/8.mp3" , coverPath: "covers/8.jpg"},
//     {songName: "Salam-e-Ishq" , filePath: "songs/9.mp3" , coverPath: "covers/9.jpg"},
//     {songName: "Salam-e-Ishq" , filePath: "songs/1.mp3" , coverPath: "covers/1.jpg"},

// ]

// songItems.forEach((element , i) => {
//     // console.log(element, i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


// })

// masterPlay.addEventListener('click' , () => {
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//         gif.style.opacity = 1;

//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.add('fa-circle-play');
//         masterPlay.classList.remove('fa-circle-pause');
//         gif.style.opacity = 0;
//     }
// })

// // audioElement.play();

// audioElement.addEventListener('timeupdate' , ()=>{
//     console.log('timeupdate');

//     //update seekbar

//     progress = parseInt((audioElement.currentTime/audioElement.duration) * 100 );
//     console.log(progress);
//     myProgressBar.value = progress;

// })

// myProgressBar.addEventListener('change' , () => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })

// const makeAllPlays = () => {
//     // e.target.classList.add('fa-circle-play');
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.add('fa-circle-play');
//         element.classList.add('fa-circle-pause');


//     })

// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click' , (e)=> {
//         console.log(e.target);
//         makeAllPlays();
//         index = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.src = 'songs/${index}.mp3';
//         audioElement.currentTime = 0
//         audioElement.play();
//     //    masterPlay.classList.remove('fa-circle-play');
//     //     masterPlay.classList.add('fa-circle-pause');
//     })
// })

console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Zihaal e Miskin", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Mujhe Phir Or Kya Chahiye ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Deva DEva ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tere Hawale", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ud Jaa Kala Kauva", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Malang Sajna", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "what Jhumka", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Mere Baba", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "I Am In Love", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Bade Miyan to Bade Miyaan", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
