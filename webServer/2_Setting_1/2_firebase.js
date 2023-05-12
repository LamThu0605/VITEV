// Them thu vien
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, set, child, get, onValue, update} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

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

var doMin   = document.getElementById('DO_min');
var doMax   = document.getElementById('DO_max');
var phMin   = document.getElementById('pH_min');
var phMax   = document.getElementById('pH_max');
var tempMin = document.getElementById('Temp_min');
var tempMax = document.getElementById('Temp_max');
var wlMin   = document.getElementById('WL_min');
var wlMax   =  document.getElementById('WL_max');

// Realtime DO min
const ref_doMin = ref(db, 'Slave_1/DO' + '/doMin');
onValue(ref_doMin, (snapshot) => {
    doMin.value = snapshot.val();
});

// Realtime DO max
const ref_doMax = ref(db, 'Slave_1/DO' + '/doMax');
onValue(ref_doMax, (snapshot) => {
    doMax.value = snapshot.val();
});

// Realtime pH min
const ref_phMin = ref(db, 'Slave_1/PH' + '/phMin');
onValue(ref_phMin, (snapshot) => {
   phMin.value = snapshot.val();
});

// Realtime pH max
const ref_phMax = ref(db, 'Slave_1/PH' + '/phMax');
onValue(ref_phMax, (snapshot) => {
    phMax.value = snapshot.val();
});

// Realtime temp min
const ref_tempMin = ref(db, 'Slave_1/Temp' + '/tempMin');
onValue(ref_tempMin, (snapshot) => {
    tempMin.value = snapshot.val();
});

// Realtime temp Max
const ref_tempMax = ref(db, 'Slave_1/Temp' + '/tempMax');
onValue(ref_tempMax, (snapshot) => {
    tempMax.value = snapshot.val();
});

// Realtime wl min
const ref_wlMin = ref(db, 'Slave_1/WL' + '/wlMin');
onValue(ref_wlMin, (snapshot) => {
    wlMin.value = snapshot.val();
});

// Realtime wl max
const ref_wlMax = ref(db, 'Slave_1/WL' + '/wlMax');
onValue(ref_wlMax, (snapshot) => {
    wlMax.value = snapshot.val();
});
const bt_save = document.getElementById('bt_Save');
var doMin   = document.getElementById('DO_min');
var doMax   = document.getElementById('DO_max');
var phMin   = document.getElementById('pH_min');
var phMax   = document.getElementById('pH_max');
var tempMin = document.getElementById('Temp_min');
var tempMax = document.getElementById('Temp_max');
var wlMin   = document.getElementById('WL_min');
var wlMax   =  document.getElementById('WL_max');

var child_RTime = [
    "RTime_1",
    "RTime_2",
    "RTime_3",
    "RTime_4",
    "RTime_5",
    "RTime_6",
    "RTime_7",
    "RTime_8",
    "RTime_9",
    "RTime_10"
];

var child_PTime = [
    "PTime_1",
    "PTime_2",
    "PTime_3",
    "PTime_4",
    "PTime_5",
    "PTime_6",
    "PTime_7",
    "PTime_8",
    "PTime_9",
    "PTime_10"
];

bt_save.addEventListener('click',(e) => {
    update(ref(db, 'Slave_1/DO/'), { doMin: Number(doMin.value), doMax: Number(doMax.value)});
    update(ref(db, 'Slave_1/PH/'), { phMin: Number(phMin.value), phMax: Number(phMax.value)});
    update(ref(db, 'Slave_1/Temp/'), { tempMin: Number(tempMin.value), tempMax: Number(tempMax.value)});
    update(ref(db, 'Slave_1/WL/'), { wlMin: Number(wlMin.value), wlMax: Number(wlMax.value)});
    
    doMin.style.backgroundColor = "white";
    doMax.style.backgroundColor = "white";
    phMin.style.backgroundColor = "white";
    phMax.style.backgroundColor = "white";
    tempMin.style.backgroundColor = "white";
    tempMax.style.backgroundColor = "white";
    wlMin.style.backgroundColor = "white";
    wlMax.style.backgroundColor = "white";

    if (value == 1) {
        switch(count) {
            case 1:
                set(ref(db, 'Control_1/Device_1/TimeVal/'),{
                    Time_1: document.getElementById(child_RTime[0]).value + " + " + document.getElementById(child_PTime[0]).value
                });
                break;
            case 2:
                set(ref(db, 'Control_1/Device_1/TimeVal/'),{
                    Time_1: document.getElementById(child_RTime[0]).value + " + " + document.getElementById(child_PTime[0]).value,
                    Time_2: document.getElementById(child_RTime[1]).value + " + " + document.getElementById(child_PTime[1]).value
                })
                break;
            case 3:
                set(ref(db, 'Control_1/Device_1/TimeVal/'),{
                    Time_1: document.getElementById(child_RTime[0]).value + " + " + document.getElementById(child_PTime[0]).value,
                    Time_2: document.getElementById(child_RTime[1]).value + " + " + document.getElementById(child_PTime[1]).value,
                    Time_3: document.getElementById(child_RTime[2]).value + " + " + document.getElementById(child_PTime[2]).value
                });
                break;
            case 4:
                set(ref(db, 'Control_1/Device_1/TimeVal/'),{
                    Time_1: document.getElementById(child_RTime[0]).value + " + " + document.getElementById(child_PTime[0]).value,
                    Time_2: document.getElementById(child_RTime[1]).value + " + " + document.getElementById(child_PTime[1]).value,
                    Time_3: document.getElementById(child_RTime[2]).value + " + " + document.getElementById(child_PTime[2]).value,
                    Time_4: document.getElementById(child_RTime[3]).value + " + " + document.getElementById(child_PTime[3]).value
                });
                break;
            case 5:
                set(ref(db, 'Control_1/Device_1/TimeVal/'),{
                    Time_1: document.getElementById(child_RTime[0]).value + " + " + document.getElementById(child_PTime[0]).value,
                    Time_2: document.getElementById(child_RTime[1]).value + " + " + document.getElementById(child_PTime[1]).value,
                    Time_3: document.getElementById(child_RTime[2]).value + " + " + document.getElementById(child_PTime[2]).value,
                    Time_4: document.getElementById(child_RTime[3]).value + " + " + document.getElementById(child_PTime[3]).value,
                    Time_5: document.getElementById(child_RTime[4]).value + " + " + document.getElementById(child_PTime[4]).value
                });
                break;
            case 6:
                set(ref(db, 'Control_1/Device_1/TimeVal/'),{
                    Time_1: document.getElementById(child_RTime[0]).value + " + " + document.getElementById(child_PTime[0]).value,
                    Time_2: document.getElementById(child_RTime[1]).value + " + " + document.getElementById(child_PTime[1]).value,
                    Time_3: document.getElementById(child_RTime[2]).value + " + " + document.getElementById(child_PTime[2]).value,
                    Time_4: document.getElementById(child_RTime[3]).value + " + " + document.getElementById(child_PTime[3]).value,
                    Time_5: document.getElementById(child_RTime[4]).value + " + " + document.getElementById(child_PTime[4]).value,
                    Time_6: document.getElementById(child_RTime[5]).value + " + " + document.getElementById(child_PTime[5]).value
                });
                break;
            case 7:
                set(ref(db, 'Control_1/Device_1/TimeVal'),{
                    Time_1: document.getElementById(child_RTime[0]).value + " + " + document.getElementById(child_PTime[0]).value,
                    Time_2: document.getElementById(child_RTime[1]).value + " + " + document.getElementById(child_PTime[1]).value,
                    Time_3: document.getElementById(child_RTime[2]).value + " + " + document.getElementById(child_PTime[2]).value,
                    Time_4: document.getElementById(child_RTime[3]).value + " + " + document.getElementById(child_PTime[3]).value,
                    Time_5: document.getElementById(child_RTime[4]).value + " + " + document.getElementById(child_PTime[4]).value,
                    Time_6: document.getElementById(child_RTime[5]).value + " + " + document.getElementById(child_PTime[5]).value,
                    Time_7: document.getElementById(child_RTime[6]).value + " + " + document.getElementById(child_PTime[6]).value
                });
                break;
            case 8:
                set(ref(db, 'Control_1/Device_1/TimeVal/'),{
                    Time_1: document.getElementById(child_RTime[0]).value + " + " + document.getElementById(child_PTime[0]).value,
                    Time_2: document.getElementById(child_RTime[1]).value + " + " + document.getElementById(child_PTime[1]).value,
                    Time_3: document.getElementById(child_RTime[2]).value + " + " + document.getElementById(child_PTime[2]).value,
                    Time_4: document.getElementById(child_RTime[3]).value + " + " + document.getElementById(child_PTime[3]).value,
                    Time_5: document.getElementById(child_RTime[4]).value + " + " + document.getElementById(child_PTime[4]).value,
                    Time_6: document.getElementById(child_RTime[5]).value + " + " + document.getElementById(child_PTime[5]).value,
                    Time_7: document.getElementById(child_RTime[6]).value + " + " + document.getElementById(child_PTime[6]).value,
                    Time_8: document.getElementById(child_RTime[7]).value + " + " + document.getElementById(child_PTime[7]).value
                });
                break;
            case 9:
                set(ref(db, 'Control_1/Device_1/TimeVal/'),{
                    Time_1: document.getElementById(child_RTime[0]).value + " + " + document.getElementById(child_PTime[0]).value,
                    Time_2: document.getElementById(child_RTime[1]).value + " + " + document.getElementById(child_PTime[1]).value,
                    Time_3: document.getElementById(child_RTime[2]).value + " + " + document.getElementById(child_PTime[2]).value,
                    Time_4: document.getElementById(child_RTime[3]).value + " + " + document.getElementById(child_PTime[3]).value,
                    Time_5: document.getElementById(child_RTime[4]).value + " + " + document.getElementById(child_PTime[4]).value,
                    Time_6: document.getElementById(child_RTime[5]).value + " + " + document.getElementById(child_PTime[5]).value,
                    Time_7: document.getElementById(child_RTime[6]).value + " + " + document.getElementById(child_PTime[6]).value,
                    Time_8: document.getElementById(child_RTime[7]).value + " + " + document.getElementById(child_PTime[7]).value,
                    Time_9: document.getElementById(child_RTime[8]).value + " + " + document.getElementById(child_PTime[8]).value
                });
                break;
            case 10:
                set(ref(db, 'Control_1/Device_1/TimeVal/'),{
                    Time_1: document.getElementById(child_RTime[0]).value + " + " + document.getElementById(child_PTime[0]).value,
                    Time_2: document.getElementById(child_RTime[1]).value + " + " + document.getElementById(child_PTime[1]).value,
                    Time_3: document.getElementById(child_RTime[2]).value + " + " + document.getElementById(child_PTime[2]).value,
                    Time_4: document.getElementById(child_RTime[3]).value + " + " + document.getElementById(child_PTime[3]).value,
                    Time_5: document.getElementById(child_RTime[4]).value + " + " + document.getElementById(child_PTime[4]).value,
                    Time_6: document.getElementById(child_RTime[5]).value + " + " + document.getElementById(child_PTime[5]).value,
                    Time_7: document.getElementById(child_RTime[6]).value + " + " + document.getElementById(child_PTime[6]).value,
                    Time_8: document.getElementById(child_RTime[7]).value + " + " + document.getElementById(child_PTime[7]).value,
                    Time_9: document.getElementById(child_RTime[8]).value + " + " + document.getElementById(child_PTime[8]).value,
                    Time_10: document.getElementById(child_RTime[9]).value + " + " + document.getElementById(child_PTime[9]).value
                });
                break;
            default:
                break; 
        }
    }
    else if (value == 2) {
        update(ref(db, 'Control_1/Device_1/'), {
            TimeVal: document.getElementById('Tperiod').value + " + " + document.getElementById('Tperiod_t').value
        });
        console.log("Che do 2");
    }
    else if (value == 3) {
        console.log("Che do 3");
    }

    alert("Cập nhật thành công");
});

const Mode_Ctrl = document.getElementById('Mode_Ctrl');

Mode_Ctrl.addEventListener('click', (e) => {
    let Mode_Ctrl = new Number(document.getElementById('Mode_Ctrl').value);
    
    update(ref(db, 'Control_1/Device_1/'), { Mode_Ctrl: Mode_Ctrl});
});

// Realtime Mode Ctrl
const ref_modeCtrl = ref(db, 'Control_1/Device_1' + '/Mode_Ctrl');
let value;

onValue(ref_modeCtrl, (snapshot) => {
    value = snapshot.val();

    document.getElementById('Mode_Ctrl').value = value;
    
    if (value == 1) {
      document.getElementById("DK_Chedo_1").style.display = 'block';
      document.getElementById("DK_Chedo_2").style.display = 'none';
      document.getElementById("DK_Chedo_3").style.display = 'none';

    } else if (value == 2) {
      document.getElementById("DK_Chedo_1").style.display = 'none';
      document.getElementById("DK_Chedo_2").style.display = 'block';
      document.getElementById("DK_Chedo_3").style.display = 'none';

    } else if (value == 3) {
      document.getElementById("DK_Chedo_1").style.display = 'none';
      document.getElementById("DK_Chedo_2").style.display = 'none';
      document.getElementById("DK_Chedo_3").style.display = 'block';

    } else if (value == 0) {
      document.getElementById("DK_Chedo_1").style.display = 'none';
      document.getElementById("DK_Chedo_2").style.display = 'none';
      document.getElementById("DK_Chedo_3").style.display = 'none';
    }
});

// Nut an
const bt_add = document.getElementById('bt_add');
const bt_remove = document.getElementById('bt_remove');
let count = 0;

bt_add.addEventListener('click',(e) => {
    if (count > 10) {
        count = 10;
        alert("Đã đạt tối đa");
    }
    else count++;
    update(ref(db, 'Control_1/Device_1/'), { Counter: count});
});

bt_remove.addEventListener('click',(e) => {
    if (count <= 1) {
        count = 1;
        alert("Không thể xóa");
    }
    else count--;
    update(ref(db, 'Control_1/Device_1/'), { Counter: count});
});

var count_Device = [
    document.getElementById("time_1"),
    document.getElementById("time_2"),
    document.getElementById("time_3"),
    document.getElementById("time_4"),
    document.getElementById("time_5"),
    document.getElementById("time_6"),
    document.getElementById("time_7"),
    document.getElementById("time_8"),
    document.getElementById("time_9"),
    document.getElementById("time_10")
];

// Realtime Counter 1
const ref_Counter1 = ref(db, 'Control_1/Device_1' + '/Counter');
onValue(ref_Counter1, (snapshot) => {
    count = snapshot.val();
    console.log(count);

    for(let i = 9; i >= count - 1; i--) {
        count_Device[i].style.display = 'none';
    }

    for(let i = 0; i < count; i++) {
        count_Device[i].style.display = 'block';
    }
});


// SW điều thiết bị khiển thủ công
var SW_1 = document.getElementById('SW_1');

// Gửi trạng thái điều khiển thiết bị chế độ thủ công lên firebase
SW_1.addEventListener('change',function(){
    if(this.checked) {
        update(ref(db, 'Control_1/Device_1/'), { TimeVal: 1 });
    } else {
        update(ref(db, 'Control_1/Device_1/'), { TimeVal: 0 });
    }
});

// Cập nhật trạng thái điều khiển thiết bị chế độ thủ công
const ref_sw1 = ref(db, 'Control_1/Device_1' + '/TimeVal');
onValue(ref_sw1, (snapshot) => {
    console.log(snapshot.val());
    if (snapshot.val() == 1) {
        document.getElementById('txt_sw1').innerHTML = 'Thiết bị 1 đang bật';
        SW_1.checked = true;
    }
    else if (snapshot.val() == 0) {
        document.getElementById('txt_sw1').innerHTML = 'Thiết bị 1 đang tắt';
        SW_1.checked = false;
    }
    else {
        document.getElementById('txt_sw1').innerHTML = 'Thiết bị 1 đang gặp lỗi';
        SW_1.checked = false;
    }
});