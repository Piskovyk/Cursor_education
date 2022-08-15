let images = document.querySelectorAll('.image');
const root = document.documentElement;
const elements = ['.image-1', '.image-2', '.image-3', '.image-4', '.image-5']
const totalImages = images.length;

let currentImage = 1;
let nextImage = currentImage + 1;
let upcomingImage = nextImage + 1;

function filterActiveImages(image1, image2) {
    const filteredResult = elements.filter((element) => element !== image1 && element !== image2)
    return filteredResult;
}

function slideImage(currentImage, nextImage, upcomingImage) {
    let tl = gsap.timeline({ defaults: { duration: 0.8, ease: Power1.easeInOut } });
    tl.to(`.image-${currentImage}`, { rotation: -10, xPercent: -100 })
        .to(`.image-${currentImage}`, { rotation: 0, xPercent: 0 })
        .to(`.image-${nextImage}`, { zIndex: 2 }, "-=1.6")
        .to(`.image-${currentImage}`, { zIndex: -1 }, "-=1.6")
        .to(`.image-${upcomingImage}`, { zIndex: 1 }, "-=1.6")
        .to(filterActiveImages(`.image-${nextImage}`, `.image-${currentImage}`), { zIndex: 0 }, "-=2.4")
    tl.timeScale(2);
    return tl;
}

function nextAnimation() {
    slideImage(currentImage, nextImage, upcomingImage);

    currentImage = nextImage;
    nextImage = currentImage - 1;

    if (currentImage === 1) {
        nextImage = totalImages
    }

    if (nextImage === 1) {
        upcomingImage = totalImages
    } else {
        upcomingImage = nextImage - 1;
    }
}

