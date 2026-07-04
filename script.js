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