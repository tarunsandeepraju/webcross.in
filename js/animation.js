const faviconFrames = [
    "animation/img(1).png",
    "animation/img(2).png",
    "animation/img(3).png",
    "animation/img(4).png",
    "animation/img(5).png",
    "animation/img(6).png",
    "animation/img(7).png",
    "animation/img(8).png",
    "animation/img(9).png",
    "animation/img(10).png",
    "animation/img(11).png",
    "animation/img(12).png",
    "animation/img(13).png",
    "animation/img(14).png",
    "animation/img(15).png",
    "animation/img(16).png",
    "animation/img(17).png",
    "animation/img(18).png",
    "animation/img(19).png",
    "animation/img(20).png",
    "animation/img(21).png",
    "animation/img(22).png",
    "animation/img(23).png",
    "animation/img(24).png",
    "animation/img(25).png",
    "animation/img(26).png",
    "animation/img(27).png",
    "animation/img(28).png",
    "animation/img(29).png",
    "animation/img(30).png",
    "animation/img(31).png",
    "animation/img(32).png",
    "animation/img(33).png",
    "animation/img(34).png",
    "animation/img(35).png",
    "animation/img(36).png",
    "animation/img(37).png",
    "animation/img(38).png",
    "animation/img(39).png",
    "animation/img(40).png",
    "animation/img(41).png",
    "animation/img(42).png",
    "animation/img(43).png",
    "animation/img(44).png",
    "animation/img(45).png",
    "animation/img(46).png",
    "animation/img(47).png",
    "animation/img(48).png",
    "animation/img(49).png",
    "animation/img(50).png"
    // ... Add more image URLs here
];

let currentFrameIndex = 0;

function updateFavicon() {
    const newFavicon = new Image();
    newFavicon.src = faviconFrames[currentFrameIndex];
    newFavicon.onload = function () {
        const favicon = document.querySelector("link[rel='icon']");
        favicon.href = newFavicon.src;
    };
    currentFrameIndex = (currentFrameIndex + 1) % faviconFrames.length;
}

// Update the favicon every 200 milliseconds (adjust as needed)
setInterval(updateFavicon, 40);