let uitkomsten = {
    speler1: 0,
    speler2: 0
  };
  
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
  
  function Hogerer() {
    let hoger = "";
 

    if (uitkomsten.speler1 > uitkomsten.speler2) {
        hoger = "Speler 1 heeft gewonnen!";
    } else if (uitkomsten.speler1 < uitkomsten.speler2) {
        hoger = "Speler 2 heeft gewonnen!";
    } else {
        hoger = "Het is gelijkspel!";
    }
  
    document.getElementById("lager").innerHTML = hoger;

}   

function Laagerer() {
  let lager = "";

  if (uitkomsten.speler1 < uitkomsten.speler2) {
   lager = "Speler 1 heeft gewonnen!";
  } else if (uitkomsten.speler1 > uitkomsten.speler2) {
      lager = "Speler 2 heeft gewonnen!";
  } else {
      lager = "Het is gelijkspel!";
  }

  document.getElementById("lager").innerHTML = lager;

}