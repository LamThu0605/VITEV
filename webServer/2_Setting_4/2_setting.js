var doMin   = document.getElementById('DO_min');
var doMax   = document.getElementById('DO_max');
var phMin   = document.getElementById('pH_min');
var phMax   = document.getElementById('pH_max');
var tempMin = document.getElementById('Temp_min');
var tempMax = document.getElementById('Temp_max');
var wlMin   = document.getElementById('WL_min');
var wlMax   =  document.getElementById('WL_max');
var status1 = false;
var status2 = false;
var status3 = false;
var status4 = false;
var status5 = false;
var status6 = false;
var status7 = false;
var status8 = false;

function checkDO1() {
    let minDO = new Number(doMin.value);
    let maxDO = new Number(doMax.value);
    
    status1 = true;

    if (minDO < 0)        doMin.style.backgroundColor = "yellow";
    else                  doMin.style.backgroundColor = "lime";

    if (minDO >= maxDO) {
        doMin.style.backgroundColor = "yellow";
        doMax.style.backgroundColor = "yellow";
    }
    else if (status2){
        doMin.style.backgroundColor = "lime";
        doMax.style.backgroundColor = "lime";
    }
    else {
        doMin.style.backgroundColor = "lime";
        doMax.style.backgroundColor = "white";
    }
}

function checkDO2() {
    let minDO = new Number(doMin.value);
    let maxDO = new Number(doMax.value);

    status2 = true;

    if (maxDO < 0)        doMax.style.backgroundColor = "yellow";
    else                  doMax.style.backgroundColor = "lime";

    if (minDO >= maxDO) {
        doMin.style.backgroundColor = "yellow";
        doMax.style.backgroundColor = "yellow";
    }
    else if (status1){
        doMin.style.backgroundColor = "lime";
        doMax.style.backgroundColor = "lime";
    }
    else {
        doMin.style.backgroundColor = "white";
        doMax.style.backgroundColor = "lime";
    }
}

function checkPH1() {
    let minPH = new Number(phMin.value);
    let maxPH = new Number(phMax.value);

    status3 = true;

    if (minPH < 0)        phMax.style.backgroundColor = "yellow";
    else                  phMax.style.backgroundColor = "lime";

    if (minPH >= maxPH) {
        phMin.style.backgroundColor = "yellow";
        phMax.style.backgroundColor = "yellow";
    }
    else if (status4){
        phMin.style.backgroundColor = "lime";
        phMax.style.backgroundColor = "lime";
    }
    else {
        phMin.style.backgroundColor = "lime";
        phMax.style.backgroundColor = "white";
    }
}

function checkPH2() {
    let minPH = new Number(phMin.value);
    let maxPH = new Number(phMax.value);

    status4 = true;

    if (maxPH < 0)        phMax.style.backgroundColor = "yellow";
    else                  phMax.style.backgroundColor = "lime";

    if (minPH >= maxPH) {
        phMin.style.backgroundColor = "yellow";
        phMax.style.backgroundColor = "yellow";
    }
    else if (status3){
        phMin.style.backgroundColor = "lime";
        phMax.style.backgroundColor = "lime";
    }
    else {
        phMin.style.backgroundColor = "white";
        phMax.style.backgroundColor = "lime";
    }
}

function checkTemp1() {
    let minTemp = new Number(tempMin.value);
    let maxTemp = new Number(tempMax.value);

    status5 = true;

    if (minTemp < 0)        tempMax.style.backgroundColor = "yellow";
    else                    tempMax.style.backgroundColor = "lime";

    if (minTemp >= maxTemp) {
        tempMin.style.backgroundColor = "yellow";
        tempMax.style.backgroundColor = "yellow";
    }
    else if (status6){
        tempMin.style.backgroundColor = "lime";
        tempMax.style.backgroundColor = "lime";
    }
    else {
        tempMin.style.backgroundColor = "lime";
        tempMax.style.backgroundColor = "white";
    }
}

function checkTemp2() {
    let minTemp = new Number(tempMin.value);
    let maxTemp = new Number(tempMax.value);

    status6 = true;

    if (maxTemp < 0)        tempMax.style.backgroundColor = "yellow";
    else                    tempMax.style.backgroundColor = "lime";

    if (minTemp >= maxTemp) {
        tempMin.style.backgroundColor = "yellow";
        tempMax.style.backgroundColor = "yellow";
    }
    else if (status5){
        tempMin.style.backgroundColor = "lime";
        tempMax.style.backgroundColor = "lime";
    }
    else {
        tempMin.style.backgroundColor = "white";
        tempMax.style.backgroundColor = "lime";
    }
}

function checkWL1() {
    let minWL = new Number(wlMin.value);
    let maxWL = new Number(wlMax.value);

    status7 = true;

    if (minWL < 0)        wlMax.style.backgroundColor = "yellow";
    else                  wlMax.style.backgroundColor = "lime";

    if (minWL >= maxWL) {
        wlMin.style.backgroundColor = "yellow";
        wlMax.style.backgroundColor = "yellow";
    }
    else if (status8){
        wlMin.style.backgroundColor = "lime";
        wlMax.style.backgroundColor = "lime";
    }
    else {
        wlMin.style.backgroundColor = "lime";
        wlMax.style.backgroundColor = "white";
    }
}

function checkWL2() {
    let minWL = new Number(wlMin.value);
    let maxWL = new Number(wlMax.value);

    status8 = true;

    if (maxWL < 0)        wlMax.style.backgroundColor = "yellow";
    else                  wlMax.style.backgroundColor = "lime";

    if (minWL >= maxWL) {
        wlMin.style.backgroundColor = "yellow";
        wlMax.style.backgroundColor = "yellow";
    }
    else if (status7){
        wlMin.style.backgroundColor = "lime";
        wlMax.style.backgroundColor = "lime";
    }
    else {
        wlMin.style.backgroundColor = "white";
        wlMax.style.backgroundColor = "lime";
    }
}