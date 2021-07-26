'use strict';


let button = document.getElementById('btn');

let leftImage = document.getElementById('left-image');

let rightImage = document.getElementById('right-image');

let midImage = document.getElementById('mid-image');

let maxAttempts = 25;
let userCounterAttempt = 0;


let leftImageIndex;
let rightImageIndex;
let midImageIndex;

let namesArray = [];
let votesArray = [];
let shownArray = [];


function Product(name, src) {

    this.name = name;
    this.src = src;
    this.votes = 0;
    this.shown = 0;

    Product.allProducts.push(this);
    // products.push(this);

    namesArray.push(this.name);
}

Product.allProducts = [];


// let products = [];


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



function getRandomIndex() {

    // console.log(Math.floor(Math.random() * (max - min) + min));
    // return Math.floor(Math.random() * products.length);
    return Math.floor(Math.random() * Product.allProducts.length);


}

// getRandomIndex(0,19);
console.log(getRandomIndex());


   let number = [];

function renderThreeImages() {

    leftImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();
    midImageIndex = getRandomIndex();

 

    while (rightImageIndex === leftImageIndex || rightImageIndex === midImageIndex || leftImageIndex === midImageIndex || number.includes(leftImageIndex) || number.includes(rightImageIndex) || number.includes(midImageIndex)) {

        leftImageIndex = getRandomIndex();
        rightImageIndex = getRandomIndex();
        midImageIndex = getRandomIndex();
    }

number = [];
number.push(leftImageIndex,rightImageIndex,midImageIndex);

console.log(number);


    // console.log(rightImageIndex, leftImageIndex);

    // console.log(products);

    leftImage.src = Product.allProducts[leftImageIndex].src;
    console.log(Product.allProducts[leftImageIndex]);


    rightImage.src = Product.allProducts[rightImageIndex].src;
    Product.allProducts[rightImageIndex].shown++


    midImage.src = Product.allProducts[midImageIndex].src;
    Product.allProducts[midImageIndex].shown++




}


renderThreeImages();


let div = document.getElementById('image-div');

div.addEventListener('click', handleUserClick);


function handleUserClick(event) {

    console.log(event.target.id);

    userCounterAttempt++;


    if (userCounterAttempt < maxAttempts) {

        if (event.target.id === 'left-image') {

            Product.allProducts[leftImageIndex].votes++;

            renderThreeImages();


        } else if (event.target.id === 'right-image') {

            Product.allProducts[rightImageIndex].votes++;

            renderThreeImages();

        } else if (event.target.id === 'mid-image') {

            Product.allProducts[midImageIndex].votes++;
            renderThreeImages();

        } else {
            alert('please click on  images only');
        }

        renderThreeImages();
    }
    else {

        button.hidden = false;
        // let parent = document.getElementById('btn');
        button.addEventListener('click', showResults)

        // div.removeEventListener('click', handleUserClick);
    }

    // leftImage = removeEventListener('click', handleUserClick)
    // rightImage = removeEventListener('click', handleUserClick)
    // midImage = removeEventListener('click', handleUserClick)

}


// let button = document.createElement('button');



// parent.appendChild(button);




function showResults() {

    let list = document.getElementById('results-list');
    for (let i = 0; i < Product.allProducts.length; i++) {

        let li = document.createElement('li');

        list.appendChild(li);

        li.textContent = `${Product.allProducts[i].name} had ${Product.allProducts[i].votes} votes,  and was seen ${Product.allProducts[i].shown}  times `

    }
    div.removeEventListener('click', showResults);
}


for (let i = 0; i < Product.allProducts.length; i++) {

    // console.log(Product.allProducts[i].votes);
    votesArray.push(Product.allProducts[i].votes);
    shownArray.push(Product.allProducts[i].shown);

}

// div.removeEventListener('click', handleUserClick);


showChart();

{
    userCounterAttempt++;
}

console.log(namesArray);

function showChart() {

    const data = {
        labels: namesArray,
        datasets: [{
            label: 'Votes',
            data: votesArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],

            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],

            borderWidth: 1
        },

        {
            label: 'Shown',
            data: shownArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],

            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],

            borderWidth: 1
        }

        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };


    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}




