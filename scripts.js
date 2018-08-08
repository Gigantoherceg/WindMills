var document = document.getElementById("asd");

document.getElementById("asd").innerHTML = "<h1 align=center>Turbina-teljesítmények kiiratása és összegzése</h1>";

var allTurbins = 25;
var sumPower = 0;
var turbineCounter =1;
var fullPower = 2000;
var halfPower = 1000;
var noPower = 0;

document.getElementById("scrAns").innerHTML = "<br><h3>";

for (turbineCounter = 1; turbineCounter <=allTurbins; turbineCounter++){
  if (turbineCounter <= 10){
    sumPower = sumPower + fullPower;
    document.getElementById("scrAns").innerHTML = "A(z) " + turbineCounter + ". számú szélturbina " + "teljes" + " fordulaton működik, " + fullPower + "MWh áramot termelve. A farm összteljesítménye jelenleg " + sumPower + "MWh.";
  } else if (turbineCounter <= 20) {
    sumPower = sumPower + halfPower;
    document.getElementById("scrAns").innerHTML = "A(z) " + turbineCounter + ". számú szélturbina " + "fél" + " fordulaton működik, " + halfPower + "MWh áramot termelve. A farm összteljesítménye jelenleg " + sumPower + "MWh.";
  } else {
    sumPower = sumPower + noPower;
    document.getElementById("scrAns").innerHTML = "A(z) " + turbineCounter + ". számú szélturbina " + "áll, " + noPower + "MWh áramot termelve. A farm összteljesítménye jelenleg " + sumPower + "MWh.";
  }
document.getElementById("scrAns").innerHTML = "<br>";
}
document.getElementById("scrAns").innerHTML = "</h3>";