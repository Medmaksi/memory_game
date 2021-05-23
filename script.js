const cardProperties = [
    {
        background: '#621d6e'
    }, {
        background: '#6fbe5d'
    }, {
        background: '#621d6e'
    }, {
        background: "#beae5d"
    }, {
        background: '#304891'
    }, {
        background: '#6fbe5d'
    }, {
        background: "#beae5d"
    }, {
        background: "#83dea5"
    }, {
        background: "#c577d4"
    }, {
        background: '#e00f0f'
    }, {
        background: "#e0510f"
    }, {
        background: '#304891'
    }, {
        background: "#c577d4"
    }, {
        background: "#e0510f"
    }, {
        background: '#e00f0f'
    }, {
        background: "#83dea5"
    }
];

const cards = document.getElementsByClassName('grid');
let selectedCards = [];
let found = 0;

Array.from(cards).forEach(card => {
    card.addEventListener('click', flipCard);
})

function flipCard () {
    if(found === cards.length / 2 - 1) {
        alert ('You won!');
        return false;
    }

    this.className += ' flipped';
    this.style.backgroundColor = cardProperties[Array.from(cards).indexOf(this)].background;

    selectedCards.push(this);
    if(selectedCards.length === 2) {
        if(selectedCards[0].style.backgroundColor === selectedCards[1].style.backgroundColor) {
           found++;
           selectedCards= [];
        } else {
            selectedCards[0].classList.remove('flipped');
            selectedCards[1].classList.remove('flipped');
            setTimeout(function() {
                selectedCards[0].style.backgroundColor = 'gray';
                selectedCards[1].style.backgroundColor = 'gray';
                selectedCards= [];
            }, 500)
        }
    }
}




