// Them thu vien
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, set, child, get, onValue, update} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

const scriptURL = 'https://script.google.com/macros/s/AKfycby9DIGayNI64yFVIIZYEFm9w4XbV67l2zhIRc86BACBHPGaGmmpVyjnJLpegyxiJtSy/exec'

// Cau hinh firebase
const firebaseConfig = {
    apiKey: "AIzaSyD-Kxicm-mAOMpZTpulnpU8_hcGW5QMBU8",
    authDomain: "mdfteam-ctu.firebaseapp.com",
    databaseURL: "https://mdfteam-ctu-default-rtdb.firebaseio.com",
    projectId: "mdfteam-ctu",
    storageBucket: "mdfteam-ctu.appspot.com",
    messagingSenderId: "178473918283",
    appId: "1:178473918283:web:5eb6f557bda59a385dd2ce",
    measurementId: "G-0ES8P44CRV"
  };

// Khai bao bien  
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getDatabase();

var counter = 0;
var count = 0;
var timeUpdate, DO_Val, pH_Val, WL_Val, temp_Val;
var DO_Min = 5, DO_Max = 6, pH_Min = 6, pH_Max = 9, temp_Min = 25, temp_Max = 35, WL_Min = 50, WL_Max = 200;

// setInterval(function () {
//     var time;
//     if (counter >= 24) {
//         counter = 0;
//         for(let i = 0; i <= 23; i++) {
//             removeData(chartDO);
//             removeData(chartPH);
//             removeData(chartTemp);
//             removeData(chartWL);
//         }
//     }
//     if (counter < 10) {
//         time = "0" + counter + ":30:41 | 2023-04-05";
//     }
//     else {
//         time = counter + ":30:41 | 2023-04-05";
//     }
    
    // var do1 = Math.floor(Math.random() * (4)) + 4;
    // var ph1 = Math.floor(Math.random() * (6)) + 5;
    // var temp1 = Math.floor(Math.random() * (6)) + 25;
    // var wl1 = Math.floor(Math.random() * (11)) + 70;

    // update(ref(db, 'Slave_1/'), { timeUpdate: time});
    // update(ref(db, 'Slave_1/DO'), { doVal: do1});
    // update(ref(db, 'Slave_1/PH'), { phVal: ph1});
    // update(ref(db, 'Slave_1/Temp'), { tempVal: temp1});
    // update(ref(db, 'Slave_1/WL'), { wlVal: wl1});
    
//     counter++;
// }, 3000);

// Realtime DO
const ref_DO = ref(db, 'Slave_1/DO' + '/doVal');
onValue(ref_DO, (snapshot) => {
    DO_Val = snapshot.val();
    alarmDO();
    document.getElementById('DO_Val').innerHTML = DO_Val;
});

// Realtime pH
const ref_pH = ref(db, 'Slave_1/PH' + '/phVal');
onValue(ref_pH, (snapshot) => {
    pH_Val = snapshot.val();
    alarmPH();
    document.getElementById('pH_Val').innerHTML = pH_Val;
});

// Realtime muc nuoc
const ref_WL = ref(db, 'Slave_1/WL' + '/wlVal');
onValue(ref_WL, (snapshot) => {
    WL_Val = snapshot.val();
    alarmWL();
    document.getElementById('WL_Val').innerHTML = WL_Val;
});

// Realtime nhiet do
const ref_Temp = ref(db, 'Slave_1/Temp' + '/tempVal');
onValue(ref_Temp, (snapshot) => {
    temp_Val = snapshot.val();
    alarmTemp();
    document.getElementById('temp_Val').innerHTML = temp_Val;
});

// Thoi gian cap nhat
const ref_Time = ref(db, 'Slave_1/timeUpdate');
onValue(ref_Time, (snapshot) => {
    timeUpdate = snapshot.val();
    var time = timeUpdate.slice(0, 5);
    document.getElementById('time_update').innerHTML = "Thời gian cập nhật: " + timeUpdate;
    addData(chartDO, time, DO_Val);
    addData(chartPH, time, pH_Val);
    addData(chartTemp, time, temp_Val);
    addData(chartWL, time, WL_Val);

    if (count > 0) {
        savaData();
    }
    count++;
});

function alarmDO() {
    if (DO_Val < DO_Min)          addLists("DO thấp" + " - " + timeUpdate + " ");
    else if (DO_Val > DO_Max)     addLists("DO cao" + " - " + timeUpdate + " ");
}

function alarmPH() {
    if (pH_Val < pH_Min)          addLists("PH thấp" + " - " + timeUpdate + " ");
    else if (pH_Val > pH_Max)     addLists("PH cao" + " - " + timeUpdate + " ");
}

function alarmTemp() {
    if (temp_Val < temp_Min)          addLists("Nhiệt độ thấp" + " - " + timeUpdate + " ");
    else if (temp_Val > temp_Max)     addLists("Nhiệt độ cao" + " - " + timeUpdate + " ");
}

function alarmWL() {
    if (WL_Val < WL_Min)          addLists("Mức nước thấp" + " - " + timeUpdate + " ");
    else if (WL_Val > WL_Max)     addLists("Mức nước cao" + " - " + timeUpdate + " ");
}

function savaData() {
    const formData = new FormData();
    formData.append("timeUpdate",  timeUpdate);
    formData.append("do", DO_Val);
    formData.append("ph", pH_Val);
    formData.append("wl", WL_Val);
    formData.append("temp", temp_Val);

    fetch(scriptURL, { method: 'POST', body: formData})
        .then(response => console.log('Success!', response))
        // .then(response => alert("Thành công"))
        .catch(error => console.error('Error!', error.message))
}