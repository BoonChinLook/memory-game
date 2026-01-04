const cardArray = [
    {
        name: 'apple',
        img: 'images/apple.png',  
    },
    {
        name: 'blueberries',
        img: 'images/blueberries.png',  
    },
    {
        name: 'grape',
        img: 'images/grape.png',  
    },
    {
        name: 'orange',
        img: 'images/orange.png',  
    },
    {
        name: 'lemon',
        img: 'images/lemon.png',  
    },
    {
        name: 'pear',
        img: 'images/pear.png',  
    },  
    {
        name: 'pineapple',
        img: 'images/pineapple.png',  
    },  
    {
        name: 'watermelon',
        img: 'images/watermelon.png',  
    },
    {
        name: 'apple',
        img: 'images/apple.png',  
    },
    {
        name: 'blueberries',
        img: 'images/blueberries.png',  
    },
    {
        name: 'grape',
        img: 'images/grape.png',  
    },
    {
        name: 'orange',
        img: 'images/orange.png',  
    },
    {
        name: 'lemon',
        img: 'images/lemon.png',  
    },
    {
        name: 'pear',
        img: 'images/pear.png',  
    },  
    {
        name: 'pineapple',
        img: 'images/pineapple.png',  
    },  
    {
        name: 'watermelon',
        img: 'images/watermelon.png',  
    }
]

cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
const resultDisplay = document.getElementById('result');

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i)
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card);
    }
}

function newGame() {

    gridDisplay.innerHTML = "";  
    cardsChosen = [];
    cardsChosenIds = [];
    cardsWon.length = 0;
    resultDisplay.textContent = "0";
    cardArray.sort(() => 0.5 - Math.random()); 
    createBoard();
}


function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    
    if (cardsChosenIds[0] === cardsChosenIds[1]) {
        alert('You clicked the same image!');
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
    } 
    else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } 
    else {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
        alert('Try again!');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
    
    if (cardsWon.length === cardArray.length / 2) {
       resultDisplay.textContent += "Congratulations, you found all matches!";
        
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 300);
    }
}
