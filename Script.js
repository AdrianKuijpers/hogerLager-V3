// prompt for the name of Player 1
const button1 = document.querySelector( ".Speler1");
    const owntext = document.querySelector(".owntext");
    let promptname = prompt("geef je naam!");
if (promptname !=null);
owntext.textContent = promptname;

//Result
let results = {
    player1: 0,
    player2: 0
};

//dice with functions
function throwdice(player) {
    let result = Math.floor(Math.random() * 20) + 1;

    if (player === 1) {
        results.player1 = result;
        document.getElementById("result1").innerHTML = "Speler 1: " + result;
    } else if (player === 2) {
        results.player2 = result;
        document.getElementById("result2").innerHTML = "Speler 2: " + result;
    }
}

//result of higher
function higherresult() {
    let higher = "";

    if (results.player1 > results.player2) {
        higher = alert("Speler 1 heeft gewonnen!");
    } else if (results.player1 < results.player2) {
        higher = alert("Speler 2 heeft gewonnen!");
    } else {
        higher = alert("Het is gelijkspel!");
    }

    document.getElementById("lager").innerHTML = higher;

}

//result when lower
function Lowerresult() {
    let lower = "";

    if (results.player1 < results.player2) {
        lower = alert("Speler 1 heeft gewonnen!");
    } else if (results.player1 > results.player2) {
        lower = alert("Speler 2 heeft gewonnen!");
    } else {
        lower = alert("Het is gelijkspel!");
    }

    document.getElementById("lager").innerHTML = lower;

}

// The FPS counter for the META players, it checks how many frames you got (limited to 60 frames)
let fps = document.getElementById("fps");
let startTime = Date.now();
let frame = 0;

function tick() {
  let time = Date.now();
  frame++;
  if (time - startTime > 1000) {
      fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
      startTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(tick);
}
tick();
