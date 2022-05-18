'use strict';
const deckHolder = document.querySelector(".menu-infromation-section")
const addDeck = document.querySelector(".addDeck")
const flipCard = document.querySelector(".flip")
const nextCard = document.querySelector(".next")
let studyButton = document.querySelectorAll(".study")
let counter = 0
let g = []


var cards = [{"jap":"neko","eng":"cat"},{"jap":"inu","eng":"dog"},{"jap":"ie","eng":"house"}];
localStorage.setItem("my_cards", JSON.stringify(cards));

function cloneCard() {
    const deck = document.querySelectorAll(".deck")
    const node = document.querySelector(".deck");
    const clone = node.cloneNode(true);
    clone.querySelector(".deck-name").innerHTML = "Japanese Deck"
    clone.querySelector(".deck-description").innerHTML = "This is a Japanese Deck to learn basic phrase"
    clone.querySelector(".deck-size").innerHTML = "45"
    let pos = deckHolder.children.length-1
    deckHolder.insertBefore(clone, deck[pos])
    studyButton = document.querySelectorAll(".study")
    let button = studyButton[studyButton.length-1]
    eventNode(button,(studyButton.length-1))
    console.log(studyButton)
  }

  function flip()
  {
    const cardFront = document.querySelector(".card-front")
    const cardBack = document.querySelector(".card-back")
    cardFront.classList.add("hidden")
    cardBack.classList.remove("hidden")
    flipCard.classList.add("hidden")
    nextCard.classList.remove("hidden")
  }

  function next()
  {
    const cardBack = document.querySelector(".card-back")
    const cardFront = document.querySelector(".card-front")
    cardBack.classList.add("hidden")
    cardFront.classList.remove("hidden")
    nextCard.classList.add("hidden")
    flipCard.classList.remove("hidden")
    counter++
    start(counter)
  }

  function start(x)
  {
    const wordjap = document.querySelector(".wordjap")
    const wordeng = document.querySelector(".wordeng")
    wordjap.innerHTML = mycards[x].jap
    wordeng.innerHTML = mycards[x].eng
  }
//Add's new eventListners when a new deck is added
  function eventNode(button,index)
  {
    button.addEventListener("click", () =>
    {
        console.log(mycards[index])
    })
  }

  

  
  addDeck.addEventListener("click", cloneCard);
  flipCard.addEventListener("click", flip);
  nextCard.addEventListener("click", next);
  
  studyButton.forEach((button, index) =>
  {
    eventNode(button,index)
  } )
  let mycards = JSON.parse(localStorage.getItem("my_cards"));
  start(counter)