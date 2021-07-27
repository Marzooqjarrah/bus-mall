'use strict';

let imagesDiv = document.getElementById('image-div');

let buttonElement = document.getElementById('button');

let leftImageElement = document.getElementById('left-image');

let midImageElement = document.getElementById('mid-image');

let rightImageElement = document.getElementById('right-image');



let maxAttempts = 25;
let userAttemptsCounter = 0;


let leftImageIndex;
let midImageIndex;
let rightImageIndex;


let namesArr = [];
let votesArr = [];
let shownArr = [];


function Product (name, src) {

    this.name = name;
    this.src = src;
    this.votes = 0;
    this.shown = 0;

    Product.allProducts.push(this);


    namesArr.push(this.name);

    updateStorage();
}

Product.allProducts = [];


Product.prototype.loog = function () {

    console.log(Products.loog);
}



function updateStorage() {

    console.log(Product.allProducts);

    let stringArr = JSON.stringify(Product.allProducts);
    console.log(stringArr);

    localStorage.setItem('products', stringArr);

}


function getProductOrders() {

    let data = localStorage.getItem('products');
    console.log(data);


    let parsedArr = JSON.parse(data);
    console.log(parsedArr);


    if (parsedArr !== null) {

        for (let i = 0; i < parsedArr.length; i++) {

            console.log(parsedArr[i]);


            new Product(parsedArr[i].name, parsedArr[i].src);



        }

        console.log(Product.allProducts);
    }
       renderThreeImages();
}




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

    console.log('befor', number);

    while (rightImageIndex === leftImageIndex || rightImageIndex === midImageIndex || leftImageIndex === midImageIndex || number.includes(leftImageIndex) || number.includes(rightImageIndex) || number.includes(midImageIndex)) {

        leftImageIndex = getRandomIndex();
        midImageIndex = getRandomIndex();
        rightImageIndex = getRandomIndex();
    }

    number = [];
    number.push(leftImageIndex, rightImageIndex, midImageIndex);

    console.log('after', number);


    // console.log(rightImageIndex, leftImageIndex);

    // console.log(products);

    leftImageElement.src = Product.allProducts[leftImageIndex].src;
    Product.allProducts[leftImageIndex].shown++
    console.log(Product.allProducts[leftImageIndex]);

    midImageElement.src = Product.allProducts[midImageIndex].src;
    Product.allProducts[midImageIndex].shown++

    rightImageElement.src = Product.allProducts[rightImageIndex].src;
    Product.allProducts[rightImageIndex].shown++


}


renderThreeImages();



imagesDiv.addEventListener('click', handleUserClick);


function handleUserClick(event) {

    console.log(event.target.id);

    userAttemptsCounter++;


    if (userAttemptsCounter < maxAttempts) {

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
            userAttemptsCounter--;
        }

        // renderThreeImages();
    }
    else {

        buttonElement.hidden = false;
        // let parent = document.getElementById('btn');
        buttonElement.addEventListener('click', showResults);

        function showResults() {

            let list = document.getElementById('results-list');
            for (let i = 0; i < Product.allProducts.length; i++) {
                let li = document.createElement('li');

                list.appendChild(li);

                li.textContent = `${Product.allProducts[i].name} had ${Product.allProducts[i].votes} votes,  and was seen ${Product.allProducts[i].shown}  times `

                // div.removeEventListener('click', handleUserClick);
            }
            buttonElement.removeEventListener('click', showResults)
            // leftImage = removeEventListener('click', handleUserClick)
            // rightImage = removeEventListener('click', handleUserClick)
            // midImage = removeEventListener('click', handleUserClick)

        }

        for (let i = 0; i < Product.allProducts.length; i++) {

            votesArr.push(Product.allProducts[i].votes);
            shownArr.push(Product.allProducts[i].shown);
            // parent.appendChild(button);
        }

        imagesDiv.removeEventListener('click', handleUserClick);

        showChart();

    }
    userAttemptsCounter++;

}

function showChart() {

    const data = {
        labels: namesArr,
        datasets: [{
            label: 'Votes',
            data: votesArr,
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
            data: shownArr,
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



getProductOrders();




































// function save() {

//     let newArr = JSON.stringify(Product.allProducts);
//     localStorage.setItem('put', newArr);

// }


// function getVotes() {

//     let data = localStorage.getItem('put');

//     console.log(data);

//     let parsedput = JSON.parse(data);

//     console.log(parsedput);


//     if (parsedput !== null) {

//         Product.allProducts = parsedput;

//     };

//     getVotes();

// }













