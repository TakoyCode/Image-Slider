// View
updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    
    <div class="slider">
        <div class="slides">
            ${drawSlides()}
        </div>
        <button class="prev" onclick="prevSlide()">&#10094</button>
        <button class="next" onclick="nextSlide()">&#10095</button>
    </div>
    
    `;
    app.innerHTML = html;
};

function drawSlides() {
    let html = ``;
    for (i = 0; i < model.slideImages.length; i++) {
        html += /*HTML*/ `
        <img class="slide ${model.slideIndex == i ? "displaySlide" : ""}" 
        src="${model.slideImages[i]}" alt="Image #${i + 1}"/>
        `;
    };
    return html;
};