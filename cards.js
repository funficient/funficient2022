function card(question) {
    this.question = question;
    
}

var deck = [
    new card('What do you want to be remembered for?', 'q1'),
    new card('What makes time stand still for you?', 'q2'),
    new card('When was the last time you laughed?', 'q3'),
    new card('What do people appreciate you for?', 'q4'),
    new card('What makes you sad? Why?', 'q5'),
    new card('What is your most daring aspiration?', 'q6'),
    
]

function getRandom(number) {
    var randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
}

document.getElementById("shuffle").onclick = function(){
    var index = getRandom(6);
    var currentCard = deck[index];

    document.getElementById("question").innerHTML = '<img src="/assets/questions/' + currentCard.question + '.png"></img>';
};