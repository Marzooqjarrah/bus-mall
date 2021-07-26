'use strict';

let leftImage = document.getElementById('left-image');

let rightImage = document.getElementById('right-image');

let midImage = document.getElementById('mid-image');



let maxAttempts = 25;
let userCounterAttempt = 0;


let leftImageIndex;
let rightImageIndex;
let midImageIndex;



function Product(name, src) {

    this.name = name;
    this.src = src;
    this.votes = 0;
    this.shown = 0;
    products.push(this);
}


let products = [];


new Product('bag', 'img/assets/bag.jpg');
new Product('banana', 'img/assets/banana.jpg');
new Product('bathroom', 'img/assets/bathroom.jpg');
new Product('boots', 'img/assets/boots.jpg');
new Product('breakfast', 'img/assets/breakfast.jpg');
new Product('bubblegum', 'img/assets/bubblegum.jpg');
new Product('chair', 'img/assets/chair.jpg');
new Product('cthulhu', 'img/assets/cthulhu.jpg');
new Product('dog-duck', 'img/assets/dog-duck.jpg');
new Product('dragon', 'img/assets/dragon.jpg');
new Product('pen', 'img/assets/pen.jpg');
new Product('pet-sweep', 'img/assets/pet-sweep.jpg');
new Product('scissors', 'img/assets/scissors.jpg');
new Product('shacrk', 'img/assets/shark.jpg');
new Product('sweep', 'img/assets/sweep.png');
new Product('tauntaun', 'img/assets/tauntaun.jpg');
new Product('unicorn', 'img/assets/unicorn.jpg');
new Product('water-can', 'img/assets/water-can.jpg');
new Product('pwine-glass', 'img/assets/wine-glass.jpg');



function getRandomIndex(max, min) {

    console.log(Math.floor(Math.random() * (max - min) + min));
    // return Math.floor(Math.random() * products.length);
    return Math.floor(Math.random() * (max - min) + min);


}

// getRandomIndex(0,19);
// console.log(getRandomIndex());



function renderThreeImages() {

    leftImageIndex = getRandomIndex(0, 19);
    rightImageIndex = getRandomIndex(0, 19);
    midImageIndex = getRandomIndex(0, 19);


    while (rightImageIndex === leftImageIndex || rightImageIndex === midImageIndex || leftImageIndex === midImageIndex) {

        leftImageIndex = getRandomIndex(0,19);
        rightImageIndex = getRandomIndex(0,19);
       midImageIndex = getRandomIndex(0,19);

    }


    console.log(rightImageIndex, leftImageIndex);

    console.log(products);

    leftImage.src = products[leftImageIndex].src;

    rightImage.src = products[rightImageIndex].src;

    midImage.src = products[midImageIndex].src;

    products[leftImageIndex].shown++
    products[rightImageIndex].shown++
    products[midImageIndex].shown++

}


renderThreeImages();


let div = document.getElementById('image-div');

div.addEventListener('click', handleUserClick);


function handleUserClick(event) {

    console.log(event.target.id);

    userCounterAttempt++;


    if (userCounterAttempt < maxAttempts) {

        if (event.target.id === 'left-image') {

            products[leftImageIndex].votes++

        } else if (event.target.id === 'right-image') {

            products[rightImageIndex].votes++

        } else if  (event.target.id === 'mid-image') {

                products[midImageIndex].votes++
        } else {
            alert('please click on the image');        }



        renderThreeImages();
    }
    else {

        let parent = document.getElementById('btn');
        parent.addEventListener('click', showResults)

 div.removeEventListener('click', handleUserClick);
    }
   
    // leftImage = removeEventListener('click', handleUserClick)
    // rightImage = removeEventListener('click', handleUserClick)
    // midImage = removeEventListener('click', handleUserClick)

}


// let button = document.createElement('button');



// parent.appendChild(button);




function showResults() {

    let list = document.getElementById('results-list');
    for (let i = 0; i < products.length; i++) {

        let li = document.createElement('li');

        list.appendChild(li);

        li.textContent = `${products[i].name} had ${products[i].votes} and was seen ${products[i].shown}  times `

    }
}












