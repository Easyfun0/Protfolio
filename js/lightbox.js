// Protofolio lighbox



const lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;
for (let i = 0; i < totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click", function () {
        console.log(i)
    })
    console.log(portfolioItems[i])
}