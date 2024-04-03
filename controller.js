// Controller

model.intervalID = setInterval(nextSlide, 5000);

function prevSlide() {
    clearInterval(model.intervalID);
    model.slideIndex--;
    if (model.slideIndex < 0) {
        model.slideIndex = model.slideImages.length - 1;
    };
    updateView();
};

function nextSlide() {
    model.slideIndex++;
    if (model.slideIndex >= model.slideImages.length) {
        model.slideIndex = 0;
    };
    updateView();
};