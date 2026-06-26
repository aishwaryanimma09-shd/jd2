"use strict";

/* ===========================================
   ONE REEL LATER ❤️
   SCRIPT.JS
   PART 1
===========================================*/

/* -------------------------
   DOM ELEMENTS
--------------------------*/

const pages = [...document.querySelectorAll(".page")];

const bgMusic = document.getElementById("bgMusic");

const loadingScreen = document.getElementById("loadingScreen");

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const passwordError = document.getElementById("passwordError");

const introNext = document.getElementById("introNext");

const reasonCard = document.getElementById("reasonCard");
const reasonText = document.getElementById("reasonText");
const reasonNumber = document.getElementById("reasonNumber");
const finishReasons = document.getElementById("finishReasons");

const typewriter = document.getElementById("typewriter");
const letterNext = document.getElementById("letterNext");

const heartContainer = document.getElementById("heartContainer");


/* -------------------------
   VARIABLES
--------------------------*/

let currentPage = 0;

let reasonIndex = 0;

let typingFinished = false;

let musicStarted = false;


/* -------------------------
   PASSWORD
--------------------------*/

/*
Write every accepted password
in lowercase.
*/

const PASSWORDS = [

    "aishu",
    "aishu",
    "aishwarya",
    "aish",
    "aishu❤️"

];


/* -------------------------
   20 LOVE NOTES
--------------------------*/

const reasons = [

    "The way you make me laugh.",

    "You always make me feel safe.",

    "Your smile fixes everything.",

    "You remember little things.",

    "You make ordinary days exciting.",

    "You listen to me patiently.",

    "You believe in me.",

    "You're effortlessly handsome.",

    "You care deeply.",

    "Your hugs feel like home.",

    "You make me blush.",

    "You respect me.",

    "You make distance feel smaller.",

    "You support my dreams.",

    "You calm my overthinking.",

    "You're my comfort person.",

    "You never stop making me smile.",

    "You came into my life unexpectedly.",

    "You make love feel easy.",

    "Because you're simply... you ❤️"

];


/* -------------------------
   LETTER
--------------------------*/

const letter = `

Happy Birthday, Jonathan ❤️

I honestly never imagined that
one random reel would become
the beginning of something so special.

Thank you for every laugh,
every late-night conversation,
every smile you unknowingly gave me,
and every moment that became
a memory I never want to lose.

I hope this birthday brings you
as much happiness as you bring
into my life.

I can't promise life will always
be perfect...

But I promise that whenever I can,
I'll always choose you.

Happy 20th Birthday.

I love you.

— Aishu ❤️

`;


/* -------------------------
   PAGE NAVIGATION
--------------------------*/

function showPage(index) {

    if (index < 0) return;

    if (index >= pages.length) return;

    pages.forEach(page => {

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

    currentPage = index;

}


/* -------------------------
   NEXT BUTTONS
--------------------------*/

document.querySelectorAll(".nextBtn").forEach(button => {

    button.addEventListener("click", () => {

        if (button.id === "finishReasons") return;

        if (button.id === "letterNext") return;

        showPage(currentPage + 1);

    });

});


/* -------------------------
   INTRO BUTTON
--------------------------*/

introNext.addEventListener("click", () => {

    showPage(1);

});


/* -------------------------
   PASSWORD
--------------------------*/

unlockBtn.addEventListener("click", unlockGift);

passwordInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        unlockGift();

    }

});


function unlockGift() {

    const answer = passwordInput.value.trim().toLowerCase();

    if (PASSWORDS.includes(answer)) {

        passwordError.textContent = "";

        showPage(2);

        startMusic();

    }

    else {

        passwordError.textContent =
            "Hmm... that's not the answer ❤️";

        passwordInput.classList.add("shake");

        setTimeout(() => {

            passwordInput.classList.remove("shake");

        }, 500);

    }

}


/* -------------------------
   LOADING SCREEN
--------------------------*/

window.addEventListener("load", () => {

    loadingScreen.classList.add("show");

    setTimeout(() => {

        loadingScreen.classList.remove("show");

        showPage(0);

    }, 1800);

});


/* -------------------------
   BACKGROUND MUSIC
--------------------------*/

function startMusic() {

    if (musicStarted) return;

    bgMusic.volume = 0.35;

    bgMusic.play().catch(() => {});

    musicStarted = true;

}


/* -------------------------
   HELPER
--------------------------*/

function sleep(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}
/* ===========================================
   SCRIPT.JS
   PART 2
   LOVE NOTES + HEARTS
===========================================*/


/* -------------------------
   LOVE NOTES CARD
--------------------------*/

function updateReasonCard() {

    reasonCard.classList.add("flip");

    setTimeout(() => {

        reasonText.textContent = reasons[reasonIndex];

        reasonNumber.textContent =
            `${reasonIndex + 1} / ${reasons.length}`;

    }, 250);

    setTimeout(() => {

        reasonCard.classList.remove("flip");

    }, 500);

}


/* -------------------------
   CARD CLICK
--------------------------*/

reasonCard.addEventListener("click", () => {

    if (reasonIndex < reasons.length - 1) {

        reasonIndex++;

        updateReasonCard();

    }

    else {

        finishReasons.style.display = "block";

        finishReasons.animate([
            {
                transform: "scale(.8)",
                opacity: 0
            },
            {
                transform: "scale(1.08)",
                opacity: 1
            },
            {
                transform: "scale(1)",
                opacity: 1
            }

        ], {

            duration: 500,
            easing: "ease"

        });

    }

});


/* -------------------------
   CONTINUE BUTTON
--------------------------*/

finishReasons.addEventListener("click", () => {

    showPage(currentPage + 1);

});


/* -------------------------
   INITIAL CARD
--------------------------*/

reasonText.textContent = reasons[0];

reasonNumber.textContent = `1 / ${reasons.length}`;


/* -------------------------
   FLOATING HEARTS
--------------------------*/

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floatingHeart";

    heart.innerHTML = Math.random() > .5 ? "❤️" : "💖";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 18 + 18 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 5 + "s";

    heart.style.opacity =
        Math.random() * .5 + .4;

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}


/* -------------------------
   AUTO HEARTS
--------------------------*/

setInterval(() => {

    createHeart();

}, 650);


/* -------------------------
   EXTRA HEART BURST
--------------------------*/

document.addEventListener("click", function (e) {

    for (let i = 0; i < 6; i++) {

        const heart = document.createElement("div");

        heart.className = "floatingHeart";

        heart.innerHTML = "❤️";

        heart.style.left =
            (e.clientX + (Math.random() * 80 - 40)) + "px";

        heart.style.top =
            (e.clientY + (Math.random() * 40 - 20)) + "px";

        heart.style.bottom = "auto";

        heart.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        heart.style.fontSize =
            (18 + Math.random() * 12) + "px";

        heartContainer.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 4000);

    }

});


/* -------------------------
   BUTTON RIPPLE
--------------------------*/

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", function () {

        this.animate([

            {
                transform: "scale(1)"
            },

            {
                transform: "scale(.95)"
            },

            {
                transform: "scale(1)"
            }

        ], {

            duration: 180

        });

    });

});


/* -------------------------
   PHOTO HOVER TILT
--------------------------*/

document.querySelectorAll(

    ".heroPhoto,.smallPhoto,.letterPhoto"

).forEach(photo => {

    photo.addEventListener("mousemove", function (e) {

        const rect = this.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - .5) * 10;

        const rotateX =
            ((y / rect.height) - .5) * -10;

        this.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });

    photo.addEventListener("mouseleave", function () {

        this.style.transform = "";

    });

});


/* -------------------------
   SMALL RANDOM SPARKLES
--------------------------*/

function sparkle() {

    const sparkle = document.createElement("div");

    sparkle.textContent = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top =
        Math.random() * window.innerHeight + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.fontSize =
        (10 + Math.random() * 10) + "px";

    sparkle.style.opacity = ".9";

    sparkle.style.transition = "1.5s";

    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {

        sparkle.style.transform =
            "translateY(-30px) scale(1.5)";

        sparkle.style.opacity = "0";

    });

    setTimeout(() => {

        sparkle.remove();

    }, 1500);

}


setInterval(sparkle, 2200);
/* ===========================================
   SCRIPT.JS
   PART 3
   TYPEWRITER • FINAL EFFECTS • POLISH
===========================================*/


/* -------------------------
   TYPEWRITER EFFECT
--------------------------*/

let typingStarted = false;

async function startTypewriter() {

    if (typingStarted) return;

    typingStarted = true;

    typewriter.textContent = "";

    for (let i = 0; i < letter.length; i++) {

        typewriter.textContent += letter.charAt(i);

        if (
            letter.charAt(i) === "." ||
            letter.charAt(i) === "," ||
            letter.charAt(i) === "!" ||
            letter.charAt(i) === "?"
        ) {

            await sleep(120);

        } else {

            await sleep(32);

        }

    }

    typingFinished = true;

}


/* -------------------------
   WATCH PAGE CHANGES
--------------------------*/

const observer = new MutationObserver(() => {

    if (
        pages[currentPage] &&
        pages[currentPage].id === "letterPage"
    ) {

        startTypewriter();

    }

    if (
        pages[currentPage] &&
        pages[currentPage].id === "finalPage"
    ) {

        celebrate();

    }

});

pages.forEach(page => {

    observer.observe(page, {

        attributes: true,
        attributeFilter: ["class"]

    });

});


/* -------------------------
   LETTER BUTTON
--------------------------*/

letterNext.addEventListener("click", () => {

    if (!typingFinished) {

        typewriter.textContent = letter;

        typingFinished = true;

        typingStarted = true;

        return;

    }

    showPage(currentPage + 1);

});


/* -------------------------
   CELEBRATION
--------------------------*/

function celebrate() {

    let count = 0;

    const burst = setInterval(() => {

        for (let i = 0; i < 8; i++) {

            createHeart();

        }

        count++;

        if (count >= 15) {

            clearInterval(burst);

        }

    }, 250);

}


/* -------------------------
   KEYBOARD SUPPORT
--------------------------*/

document.addEventListener("keydown", e => {

    if (e.key === "ArrowRight") {

        if (currentPage < pages.length - 1) {

            showPage(currentPage + 1);

        }

    }

    if (e.key === "ArrowLeft") {

        if (currentPage > 0) {

            showPage(currentPage - 1);

        }

    }

});


/* -------------------------
   DOUBLE CLICK
   HEART EXPLOSION
--------------------------*/

document.addEventListener("dblclick", e => {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "floatingHeart";

            heart.innerHTML = Math.random() > .5 ? "❤️" : "💖";

            heart.style.left =
                (e.clientX + (Math.random() * 200 - 100)) + "px";

            heart.style.top =
                (e.clientY + (Math.random() * 120 - 60)) + "px";

            heart.style.bottom = "auto";

            heart.style.fontSize =
                (18 + Math.random() * 20) + "px";

            heart.style.animationDuration =
                (2 + Math.random() * 2) + "s";

            heartContainer.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 4000);

        }, i * 30);

    }

});


/* -------------------------
   TAB VISIBILITY
--------------------------*/

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        bgMusic.pause();

    } else {

        if (musicStarted) {

            bgMusic.play().catch(() => {});

        }

    }

});


/* -------------------------
   WINDOW RESIZE
--------------------------*/

window.addEventListener("resize", () => {

    document.querySelectorAll(".floatingHeart").forEach(h => {

        const left = parseFloat(h.style.left);

        if (left > window.innerWidth) {

            h.style.left = (window.innerWidth - 20) + "px";

        }

    });

});


/* -------------------------
   PREVENT IMAGE DRAG
--------------------------*/

document.querySelectorAll("img").forEach(img => {

    img.draggable = false;

});


/* -------------------------
   PREVENT RIGHT CLICK
   (OPTIONAL)
--------------------------*/

// Uncomment if you want to disable right click

/*
document.addEventListener("contextmenu", e => {
    e.preventDefault();
});
*/


/* -------------------------
   INITIAL STATE
--------------------------*/

showPage(0);

reasonText.textContent = reasons[0];

reasonNumber.textContent =
`${reasonIndex + 1} / ${reasons.length}`;


/* -------------------------
   START BACKGROUND HEARTS
--------------------------*/

createHeart();

setTimeout(createHeart, 500);

setTimeout(createHeart, 900);


/* -------------------------
   CONSOLE MESSAGE ❤️
--------------------------*/

console.log(
"%cHappy Birthday Jonathan ❤️",
"color:#ff6b9a;font-size:22px;font-weight:bold;"
);

console.log(
"%cMade with love by Aishu ✨",
"color:white;font-size:15px;"
);


/* ===========================================
   END OF SCRIPT.JS
===========================================*/