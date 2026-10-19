const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("rating-text");

let selectedRating = 0;

function highlightStars(rating){

    stars.forEach((star)=>{

        if(star.dataset.value <= rating){
            star.classList.add("active");
        }else{
            star.classList.remove("active");
        }

    });

}

stars.forEach((star)=>{

    star.addEventListener("mouseover",()=>{

        highlightStars(star.dataset.value);

    });

    star.addEventListener("click",()=>{

        selectedRating = star.dataset.value;

        highlightStars(selectedRating);

        ratingText.textContent = `Your Rating: ${selectedRating} / 5`;

    });

});

document.querySelector(".stars").addEventListener("mouseleave",()=>{

    highlightStars(selectedRating);

});