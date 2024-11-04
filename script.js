window.onscroll = function() { toggleScrollButton(); };

function toggleScrollButton() {
    const scrollUpButton = document.getElementById("scrollUpButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}