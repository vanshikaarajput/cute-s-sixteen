/* ==========================================================
                CREATE TWINKLING STARS
========================================================== */

// Selecting the stars container
const starsContainer = document.getElementById("stars");

// Total stars to generate
const totalStars = 100;

// Loop to create stars
for(let i = 0; i < totalStars; i++){

    // Create a new div
    const star = document.createElement("div");

    // Give it the class "star"
    star.classList.add("star");

    // Random horizontal position
    star.style.left = Math.random() * 100 + "vw";

    // Random vertical position
    star.style.top = Math.random() * 100 + "vh";

    // Random size
    const size = Math.random() * 4 + 2;

    star.style.width = size + "px";
    star.style.height = size + "px";
    // Random animation delay
    star.style.animationDelay = Math.random() * 3 + "s";

    // Add star into the sky
    starsContainer.appendChild(star);

}
/* ==========================================================
                CREATE FLOATING CLOUDS
========================================================== */

// Selecting the cloud container
const cloudContainer = document.getElementById("clouds");

// Number of clouds
const totalClouds = 6;

for(let i = 0; i < totalClouds; i++){

    // Create cloud
    const cloud = document.createElement("div");

    cloud.classList.add("cloud");

    // Random vertical position
    cloud.style.top = (40 + Math.random() * 250) + "px";

    // Different animation speeds
    cloud.style.animationDuration = (25 + Math.random() * 20) + "s";

    // Start clouds at different positions
    cloud.style.left = (-300 - Math.random() * 800) + "px";

    // Different sizes
    const scale = 0.6 + Math.random() * 0.8;

    cloud.style.transform = `scale(${scale})`;

    cloudContainer.appendChild(cloud);

}
/* ==========================================================
                CREATE FLOATING HEARTS
========================================================== */

const heartEmojis = [
    "💖",
    "💕",
    "💗",
    "💓",
    "💞"
];

// Create one heart every 700 milliseconds
setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    // Random heart emoji
    heart.innerHTML =
        heartEmojis[
            Math.floor(Math.random()*heartEmojis.length)
        ];

    // Random horizontal position
    heart.style.left =
        Math.random()*100 + "vw";

    // Random animation duration
    heart.style.animationDuration =
        (8 + Math.random()*6) + "s";

    // Random size
    heart.style.fontSize =
        (18 + Math.random()*16) + "px";

    document.body.appendChild(heart);

    // Remove after animation
    setTimeout(()=>{

        heart.remove();

    },14000);

},700);

/* ==========================================================
                CURSOR SPARKLES
========================================================== */

document.addEventListener("mousemove",(e)=>{

    const sparkle=document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left=e.clientX+"px";

    sparkle.style.top=e.clientY+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },800);

});

/* ==========================================================
                START BUTTON TRANSITION
========================================================== */

// Select elements
const startButton = document.getElementById("start-btn");
const landingPage = document.querySelector(".landing-page");
const menuScreen = document.getElementById("menu-screen");

// When Start is clicked...
startButton.addEventListener("click", () => {

    // Add a small press animation
    startButton.style.transform = "scale(0.95)";

    // Wait a little before switching screens
    setTimeout(() => {

        // Hide the landing page
        landingPage.style.display = "none";

        // Show the menu
        menuScreen.style.display = "flex";

    }, 250);

});
/* ==========================================================
                CHAPTER NAVIGATION
========================================================== */

const storyCard = document.getElementById("story-card");
const chapterOne = document.getElementById("chapter-one");
const backMenu = document.getElementById("back-menu");

// Open Chapter 1
storyCard.addEventListener("click", () => {

    menuScreen.style.display = "none";

    chapterOne.style.display = "flex";

});

// Go back to Menu
backMenu.addEventListener("click", () => {

    chapterOne.style.display = "none";

    menuScreen.style.display = "flex";

});
/* ==========================================================
                MEMORY PAGE NAVIGATION
========================================================== */

// Memory Card (Menu)
const memoryCard = document.getElementById("memory-card");

// Memory Page
const memoryPage = document.getElementById("memory-page");

// Open Memory Page
memoryCard.addEventListener("click", () => {

    // Hide Menu
    menuScreen.style.display = "none";

    // Hide Chapter One (just in case it's open)
    chapterOne.style.display = "none";

    // Show Memory Page
    memoryPage.style.display = "block";

});
/* ==========================================================
                BACK TO MENU
========================================================== */

const memoryBackBtn = document.getElementById("memory-back-btn");

memoryBackBtn.addEventListener("click", () => {

    memoryPage.style.display = "none";

    menuScreen.style.display = "flex";

});
/* ==========================================================
                PHOTO POPUP FUNCTIONALITY
========================================================== */

// Select all photo cards
const photos = document.querySelectorAll(".photo-card img");

// Popup elements
const popup = document.getElementById("photo-popup");
const popupImage = document.getElementById("popup-image");
const popupCaption = document.getElementById("popup-caption");
const closePopup = document.getElementById("close-popup");

// Captions for each photo
const captions = [
    "One smile, countless memories. 🤍",
    "A moment worth keeping forever.",
    "This picture always makes us smile.",
    "Some memories never fade.",
    "A little happiness captured forever.",
    "One of our favourite moments.",
    "Proof that beautiful moments exist.",
    "A tiny memory with a huge smile.",
    "One frame. Endless happiness.",
    "Still one of the cutest pictures ever.",
    "Here's to many more memories together. 💖"
];

// Open popup
photos.forEach((photo, index) => {

    photo.addEventListener("click", () => {

        popup.style.display = "flex";

        popupImage.src = photo.src;

        popupCaption.textContent = captions[index];

    });

});

// Close using X
closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});

// Close by clicking outside image
popup.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.style.display = "none";

    }

});