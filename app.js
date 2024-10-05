document.addEventListener("DOMContentLoaded", function () {
    // Combine both event listeners into one
    document.getElementById("RightToLeft").addEventListener("click", function () {
        document.getElementById("slide").style.marginLeft = "0";
        document.querySelector(".top").style.marginLeft = "100%";
    });

    document.getElementById("LeftToRight").addEventListener("click", function () {
        document.getElementById("slide").style.marginLeft = "50%";
        document.querySelector(".top").style.marginLeft = "0"; // Fixed selector issue
    });

    // Apply transitions
    document.getElementById("slide").style.transition = "all 0.5s";
    document.querySelector(".top").style.transition = "all 0.5s";
});