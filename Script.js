// prompt voor de naam van Speler 1
const button1 = document.querySelector( ".Speler1");
    const owntext = document.querySelector(".owntext");
    let promptnaam = prompt("geef je naam!");
if (promptnaam !=null);
owntext.textContent = promptnaam;

//uitkomst
let uitkomsten = {
    speler1: 0,
    speler2: 0
};

//dobbelstenen met hun functies
function gooiDobbelsteen(speler) {
    let uitkomst = Math.floor(Math.random() * 20) + 1;

    if (speler === 1) {
        uitkomsten.speler1 = uitkomst;
        document.getElementById("uitkomst1").innerHTML = "Speler 1: " + uitkomst;
    } else if (speler === 2) {
        uitkomsten.speler2 = uitkomst;
        document.getElementById("uitkomst2").innerHTML = "Speler 2: " + uitkomst;
    }
}

//uitkomst wanneer hoger
function Hogerer() {
    let hoger = "";

    if (uitkomsten.speler1 > uitkomsten.speler2) {
        hoger = alert("Speler 1 heeft gewonnen!");
    } else if (uitkomsten.speler1 < uitkomsten.speler2) {
        hoger = alert("Speler 2 heeft gewonnen!");
    } else {
        hoger = alert("Het is gelijkspel!");
    }

    document.getElementById("lager").innerHTML = hoger;

}

//uitkomst wanneer lager
function Laagerer() {
    let lager = "";

    if (uitkomsten.speler1 < uitkomsten.speler2) {
        lager = alert("Speler 1 heeft gewonnen!");
    } else if (uitkomsten.speler1 > uitkomsten.speler2) {
        lager = alert("Speler 2 heeft gewonnen!");
    } else {
        lager = alert("Het is gelijkspel!");
    }

    document.getElementById("lager").innerHTML = lager;

}