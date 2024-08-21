//first Method

let image = document.getElementById('image');

image.addEventListener('mouseover',()=>{
    image.src = './assets/car2.jpg'
});

image.addEventListener('mouseout',()=>{
    image.src = './assets/car1.jpg'
});

//second Method

// function swapimage(swap){
//     document.getElementById('image1').src = swap
// }

// function image2(swap){
//     document.getElementById('image1').src = swap
//}

let swap = document.getElementById('swap')
swap.addEventListener('click', (image)=>{
    swap.src = "https://www.pexels.com/photo/black-hyundai-suv-1519192/"
})