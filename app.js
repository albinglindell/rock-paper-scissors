//Slut uppgift Albin Lindell
//Här är alla mina variabler för bilderna och texten.
let match = document.getElementById("match");
let bild1 = document.getElementById("bild1");
let bild2 = document.getElementById("bild2");
let bild3 = document.getElementById("bild3");
let bild12 = document.getElementById("bild12");
let bild22 = document.getElementById("bild22");
let bild32 = document.getElementById("bild32");

//Här är variablerna för datorns val.
let sten1 = 0;
let sax1 = 1;
let pase1 = 2;


//Här skapas funktionen som gör att om jag väljer sten så ska jag vinna, förlora eller få oavgjort beroende på vad datorn väljer.
function sten() {
    //Här slumpas datorns val.
    datorn = Math.floor(Math.random() * 3);
    //om datorn väljer sax då vinner jag och så visas bilderna.
    if (datorn == sax1) {
        match.innerHTML = "Datorn valde sax och du vann!"
        bild12.style.display = "none";
        bild22.style.display = "block";
        bild32.style.display = "none";
    }
    //om datorn väljer sten då blir det oavgjort och så visas bilderna.
    else if (datorn == sten1) {
        match.innerHTML = "Datorn valde sten och det blev oavgjort."
        bild12.style.display = "block";
        bild22.style.display = "none";
        bild32.style.display = "none";
        }
        //om datorn väljer påse då förlorar jag och så visas bilderna.
    else {
        match.innerHTML = "Datorn valde påse och du förlorade."
        bild12.style.display = "none";
        bild22.style.display = "none";
        bild32.style.display = "block";
    }
    //Om jag klickar på sten så visas bilden på stenhanden
    bild1.style.display = "block";
    bild2.style.display = "none";
    bild3.style.display = "none";
    

}
//Här skapas funktionen som gör att om jag väljer sax så ska jag vinna, förlora eller få oavgjort beroende på vad datorn väljer.
function sax() {
    //Här slumpas datorns val.
    datorn = Math.floor(Math.random() * 3);
    //om datorn väljer sax då blir det oavgjort och så visas bilderna.
    if (datorn == sax1) {
        match.innerHTML = "Datorn valde sax och det blev oavgjort."
        bild12.style.display = "none";
        bild22.style.display = "block";
        bild32.style.display = "none";
    }
    //om datorn väljer sten då förlorar du och så visas bilderna.
    else if (datorn == sten1) {
        match.innerHTML = "Datorn valde sten och du förlorade."
        bild12.style.display = "block";
        bild22.style.display = "none";
        bild32.style.display = "none";
        }
    //om datorn väljer påse då vinner jag och så visas bilderna.
    else {
        match.innerHTML = "Datorn valde påse och du vann!"
        bild12.style.display = "none";
        bild22.style.display = "none";
        bild32.style.display = "block";
    }
    //Om jag klickar på sax så visas bilden på saxhanden
    bild1.style.display = "none";
    bild2.style.display = "block";
    bild3.style.display = "none";
}
//Här skapas funktionen som gör att om jag väljer påse så ska jag vinna, förlora eller få oavgjort beroende på vad datorn väljer.
function pase() {
    //Här slumpas datorns val.
    datorn = Math.floor(Math.random() * 3);
    //om datorn väljer sax då förlorar jag och så visas bilderna.
    if (datorn == sax1) {
        match.innerHTML = "Datorn valde sax och du förlorade,"
        bild12.style.display = "none";
        bild22.style.display = "block";
        bild32.style.display = "none";
    }
    //om datorn väljer sten då vinner du och så visas bilderna.
    else if (datorn == sten1) {
        match.innerHTML = "Datorn valde sten och du vann!"
        bild12.style.display = "block";
        bild22.style.display = "none";
        bild32.style.display = "none";
        }
    else {
        //om datorn väljer påse då blir det oavgjort och så visas bilderna.
        match.innerHTML = "Datorn valde påse och det blev oavgjort."
        bild12.style.display = "none";
        bild22.style.display = "none";
        bild32.style.display = "block";
    }
    //Om jag klickar på påse så visas bilden på påshanden.
    bild1.style.display = "none";
    bild2.style.display = "none";
    bild3.style.display = "block";
}
