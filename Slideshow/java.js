var slide = document.querySelector('.Slideshow')
var imagens = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg'
]
var time = 3000;
var count = 0 

function moveSlideShow(){
    
    slide.src = imagens[count];

    if(count < imagens.length - 1){
        count++;
    }else{
        count = 0;
    }

    setTimeout("moveSlideShow()", time);
}

window.onload = moveSlideShow;