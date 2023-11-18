const landing_sect = document.getElementById("sect-1");
const ls_footer = document.getElementById("ls-footer");
const title = document.getElementById("ls-logo-title");
const content_desc = document.getElementById("ls-content-desc");
const content_btn = document.getElementById("ls-content-btn");

window.addEventListener("mousemove", function(e) {
    var dragMultiplier = 25;
    var mouseX = e.clientX / dragMultiplier;
    var mouseY = e.clientY / dragMultiplier;
    landing_sect.style.backgroundPositionX = mouseX + "px";
    landing_sect.style.backgroundPositionY = mouseY + "px";
})

content_btn.addEventListener("click", function() {
    window.scrollBy(0, window.innerHeight);
})
