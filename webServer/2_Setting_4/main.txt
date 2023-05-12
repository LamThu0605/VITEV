// Khai báo biến toàn cục. Các thống số cài đặt được nhập vào
/* Chí số môi trường */
var pH_min, pH_max, Temp_min, Temp_max, LW_min, LW_max

/* Thông số điều khiển */
var RTime_1, RTime_2, RTime_3, RTime_4
var PTime_1, PTime_2, PTime_3, PTime_4

var Tperiod, Tperiod_t

function CheckValue_input() {
    pH_min = document.getElementById('pH_min').value;
    pH_max = document.getElementById('pH_max').value;
    Temp_min = document.getElementById('Temp_min').value;
    Temp_max = document.getElementById('Temp_max').value;
    LW_min = document.getElementById('LW_min').value;
    LW_max = document.getElementById('LW_max').value;

    RTime_1 = document.getElementById('RTime_1').value;
    RTime_2 = document.getElementById('RTime_2').value;
    RTime_3 = document.getElementById('RTime_3').value;
    RTime_4 = document.getElementById('RTime_4').value;

    PTime_1 = document.getElementById('PTime_1').value;
    PTime_2 = document.getElementById('PTime_2').value;
    PTime_3 = document.getElementById('PTime_3').value;
    PTime_4 = document.getElementById('PTime_4').value;

    Tperiod = document.getElementById('Tperiod').value;
    Tperiod_t = document.getElementById('Tperiod_t').value;
    

    if ((pH_min > pH_max)||(pH_min<0)||(pH_max<0)){
        document.getElementById('pH_min').style.backgroundColor = "yellow";
        document.getElementById('pH_max').style.backgroundColor = "yellow";
        console.log("Lỗi 1");
    }
    else{
        document.getElementById('pH_min').style.backgroundColor = "white";
        document.getElementById('pH_max').style.backgroundColor = "white";
    }
    if ((Temp_min > Temp_max)||(Temp_min<0)||(Temp_max<0)){
        document.getElementById('Temp_min').style.backgroundColor = "yellow";
        document.getElementById('Temp_max').style.backgroundColor = "yellow";
        console.log("Lỗi 2");
    }
    else{
        document.getElementById('Temp_min').style.backgroundColor = "white";
        document.getElementById('Temp_max').style.backgroundColor = "white";
    }
    if ((LW_min > LW_max)||(LW_min<0)||(LW_max<0)){
        document.getElementById('LW_min').style.backgroundColor = "yellow";
        document.getElementById('LW_max').style.backgroundColor = "yellow";
        console.log("Lỗi 3");
    }
    else{
        document.getElementById('LW_min').style.backgroundColor = "white";
        document.getElementById('LW_max').style.backgroundColor = "white";
    }

    if ((Tperiod_t > Tperiod)||(Tperiod < 0)||(Tperiod_t < 0)){
        document.getElementById('Tperiod').style.backgroundColor = "yellow";
        document.getElementById('Tperiod_t').style.backgroundColor = "yellow";
        console.log("Lỗi 4");
    }
    else{
        document.getElementById('Tperiod').style.backgroundColor = "white";
        document.getElementById('Tperiod_t').style.backgroundColor = "white";
    }

}

function Mode_controller() {
    let Mode_Ctrl = document.getElementById('Mode_Ctrl').value;
    console.log("Đã chọn chế độ điều khiển: " + Mode_Ctrl);
    if (Mode_Ctrl == "1") {
      document.getElementById("DK_Chedo_1").style.display = 'block';
      document.getElementById("DK_Chedo_2").style.display = 'none';
      document.getElementById("DK_Chedo_3").style.display = 'none';
      console.log("M1");
    } else if (Mode_Ctrl == "2") {
      document.getElementById("DK_Chedo_1").style.display = 'none';
      document.getElementById("DK_Chedo_2").style.display = 'block';
      document.getElementById("DK_Chedo_3").style.display = 'none';
      console.log("M2");
    } else if (Mode_Ctrl == "3") {
      document.getElementById("DK_Chedo_1").style.display = 'none';
      document.getElementById("DK_Chedo_2").style.display = 'none';
      document.getElementById("DK_Chedo_3").style.display = 'block';
      console.log("M3");
    } else if (Mode_Ctrl == "0") {
      document.getElementById("DK_Chedo_1").style.display = 'none';
      document.getElementById("DK_Chedo_2").style.display = 'none';
      document.getElementById("DK_Chedo_3").style.display = 'none';
    } else {
      console.log("M_Other");
    }
  }