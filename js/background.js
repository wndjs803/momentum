const images = ["0.jpg", "1.png", "2.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bg";
document.body.appendChild(bgImage);
