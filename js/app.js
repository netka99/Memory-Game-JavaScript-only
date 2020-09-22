/*
 * Create a list that holds all of your cards
 */


document.addEventListener('DOMContentLoaded', () => {

    const allCard = document.querySelectorAll(".card");
    const allCards = [...allCard];
    const openCards = [];
    const matchedCards = [];
    const restart = document.querySelector(".restart");
    const deck = document.querySelector(".deck");
    let counter;
    counter = 0;
    let lItems = document.querySelector(".stars");
    let allStars = lItems.getElementsByTagName("li");
    let allStars1 = [...allStars];
    let starsRating1;
    const buttonStartAgain = document.querySelector(".buttonAgain");
    let matchedLenght = matchedCards.length;
    let modal = document.getElementById("myModal");
    let spanClose = document.querySelector(".close");
    let startList = lItems.getElementsByTagName("li");
    let rating = document.querySelector(".starsRating");


    function getMoves(clicks) {
        return Math.floor(clicks / 2)
    }

/*    function dblclicks (){
    allCards.forEach(function (carde) {
        carde.addEventListener("dblclick", function (e) {
        e.preventDefault();
    });
        });
} */

    startGame();
    movesLogic();
    
  /*  function logicOfGame (){
        

    }*/
    function movesLogic(){
    allCards.forEach(function (card) {
       // dblclicks ();
        card.addEventListener("click", function (e) {
            card.value = ++counter;
            document.querySelector(".moves").innerHTML = getMoves(counter);
            openCards.push(card);
            openCards[0].classList.add("open", "show");
            //try {
            openCards[1].classList.add("open", "show");

            //} catch(e) {};
            if (openCards[0].firstElementChild.className == openCards[1].firstElementChild.className) {
                openCards[0].classList.remove("open", "show");
                openCards[1].classList.remove("open", "show");
                openCards[0].classList.add("match");
                openCards[1].classList.add("match");
                matchedCards.push(openCards[0]);
                matchedCards.push(openCards[1]);
                winMessage();
                openCards.length = 0;

            } else {
                removeClass();
            }

            if (Math.floor(counter / 2) > 9) {
                let nth = lItems.getElementsByTagName("li")[2];
                nth.innerHTML = "<li class='fa fa-star-o'></li>";
            }

            if (Math.floor(counter / 2) > 12) {
                let nth1 = lItems.getElementsByTagName("li")[1];
                nth1.innerHTML = "<li class='fa fa-star-o'></li>";
            }

            if (Math.floor(counter / 2) > 16) {
                let nth2 = lItems.getElementsByTagName("li")[0];
                nth2.innerHTML = "<li class='fa fa-star-o'></li>";
            }
        });
    });
}


    function winMessage() {
        let spanClose = document.getElementsByClassName("close")[0];
        document.querySelector(".moves1").innerHTML = getMoves(counter);
        //document.querySelector(".starsRating").innerHTML = startList.length;
        // When the user clicks on <span> (x), close the modal
        let matchedLenght = matchedCards.length;
        let modal = document.getElementById("myModal");
        let startList = lItems.getElementsByTagName("li");
        let rating = document.querySelector(".starsRating");
        starRating1 = document.querySelector('.stars').innerHTML;
        rating.innerHTML = starRating1;
        spanClose.onclick = function () {
        modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        if (matchedLenght == 16) {
            modal.style.display = "block";
        }


    }

  function closeModal() {
            modal.style.display = "none";
    } 


    function removeClass() {
        setTimeout(function () {
            openCards[0].classList.remove("open", "show");
            openCards[1].classList.remove("open", "show");
            openCards.length = 0;
        }, 1200);

    }

    /*
     * Display the cards on the page
     *   - shuffle the list of cards using the provided "shuffle" method below
     *   - loop through each card and create its HTML
     *   - add each card's HTML to the page
     */

    // Shuffle function from http://stackoverflow.com/a/2450976

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    function startGame() {
        let shuffleArray = shuffle(allCards);
        shuffleArray = allCards.forEach(function (card) {
            let li = document.createElement('li');
            li.innerHTML = card;
            deck.appendChild(card);
            card.classList.remove("open", "show", "match");
            
        })
    }

    function restartGame() {
        closeModal();
        counter = 0;
        document.querySelector(".moves").innerHTML = counter;
        startGame();
        matchedCards.splice(0, matchedCards.length);
        allStars1.forEach(function(star){
            let starNew = document.createElement("li");
            starNew.innerHTML = star;
            lItems.appendChild(star);
            star.innerHTML = '<i class="fa fa-star"></i>';   
        });

        removeListTags();
        

      // window.location.reload(false);    
    }

    function removeListTags() {
        Array.from(deck.getElementsByTagName('li')).forEach(
            (el) => el.removeAttribute('value')
        );
    }
    
    buttonStartAgain.addEventListener("click", restartGame);
    restart.addEventListener("click", restartGame);
    /*
     * set up the event listener for a card. If a card is clicked:
     *  - display the card's symbol (put this functionality in another function that you call from this one)
     *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
     *  - if the list already has another card, check to see if the two cards match
     *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
     *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
     *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
     *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
     */
})