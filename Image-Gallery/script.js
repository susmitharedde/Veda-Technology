// Select all images
const galleryImages = document.querySelectorAll(".gallery img");

// Select modal elements
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Open modal when an image is clicked
galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = image.src;
        modalImage.alt = image.alt;
    });
});

// Close modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});