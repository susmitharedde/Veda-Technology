const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".slider");

let index = 0;
let interval;

function showSlide(i){

    if(i >= slide.length){
        index = 0;
    }

    else if(i < 0){
        index = slide.length - 1;
    }

    else{
        index = i;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

}

next.addEventListener("click",()=>{

    showSlide(index+1);
    restartAuto();

});

prev.addEventListener("click",()=>{

    showSlide(index-1);
    restartAuto();

});

dots.forEach((dot,i)=>{

    dot.addEventListener("click",()=>{

        showSlide(i);
        restartAuto();

    });

});

function startAuto(){

    interval = setInterval(()=>{

        showSlide(index+1);

    },3000);

}

function stopAuto(){

    clearInterval(interval);

}

function restartAuto(){

    stopAuto();
    startAuto();

}

slider.addEventListener("mouseenter",stopAuto);

slider.addEventListener("mouseleave",startAuto);

showSlide(index);

startAuto();