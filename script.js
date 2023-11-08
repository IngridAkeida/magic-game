function randomBallClick() {

  // get randon answer
// get answer random based on rabdon number
// display answer

let answers = ["yes","No", "seems unlikely", "ask again"]

let number = Math.floor(Math.random() * answers.length);

let answer = answers[number];

let ballEl = document.getElementById("ball");
ballEl.classList.add("ball_animated");

ballEl.addEventListener("animationend", function() {
  ballEl.classList.remove("ball_animated");

  let answerEl = document.getElementById('ball_answer');
  answerEl.innerHTML = answer;
},
{once : true})

};

/*if(number == 0){
  console.log("yes")
} else if (number == 1 ){
  console.log("No")
} else if (number == 2){
  console.log("seems unlikely")
} else if ( number == 3){
  console.log("ask again")
}*/
  


let ballEl = document.getElementById("ball");
ballEl.addEventListener("click", randomBallClick);

document.addEventListener("keydown", function(e) {
  if (e.key === '') {
    randomBallClick();
  }
  
});

console.log(ballEl)




