document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "Toggle Section";
    document.body.appendChild(button);

    const section = document.createElement("div");
    section.textContent = "This is the section content.";
    section.style.display = "block";
    document.body.appendChild(section);

    button.addEventListener("click", function() {
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const welcomeImage = document.createElement("img");
    welcomeImage.src = "images/materials/PlaceholderImg.png";
    welcomeImage.style.position = "fixed";
    welcomeImage.style.top = "0";
    welcomeImage.style.left = "0";
    welcomeImage.style.width = "100%";
    welcomeImage.style.height = "100%";
    welcomeImage.style.zIndex = "1000";
    welcomeImage.style.transition = "opacity 1s";
    document.body.appendChild(welcomeImage);

    welcomeImage.addEventListener("click", function() {
        welcomeImage.style.opacity = "0";
        setTimeout(function() {
            welcomeImage.remove();
        }, 1000);
    });
});