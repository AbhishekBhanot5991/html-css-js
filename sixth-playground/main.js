const container = document.querySelector('#container');
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let currentIndex = 0;
console.log(container)

const images = [
    {
    title:"img1",
    imageUrl:"images/pic1.jpg"
    },
    {
    title:"img2",
    imageUrl:"images/pic2.jpg"
    },
    {
    title:"img3",
    imageUrl:"images/pic1.jpg"
    },
]

function updateSlider(){
    const currentImage = images[currentIndex]
    slider.querySelector('img').src = currentImage.imageUrl;
}

function showNextImage(){
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function showPrevImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

nextBtn.addEventListener('click', showNextImage)
prevBtn.addEventListener('click', showPrevImage)

// setInterval(showNextImage, 1000);

updateSlider()
// document.body.append(container)


