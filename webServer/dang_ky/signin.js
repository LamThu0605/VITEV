// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-Kxicm-mAOMpZTpulnpU8_hcGW5QMBU8",
  authDomain: "mdfteam-ctu.firebaseapp.com",
  databaseURL: "https://mdfteam-ctu-default-rtdb.firebaseio.com",
  projectId: "mdfteam-ctu",
  storageBucket: "mdfteam-ctu.appspot.com",
  messagingSenderId: "178473918283",
  appId: "1:178473918283:web:5eb6f557bda59a385dd2ce",
  measurementId: "G-0ES8P44CRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
var password_1 = document.getElementById("password_1");
var signin = document.getElementById("signin");

signin.addEventListener("click", (e) => {
  if(email.value == "" || password.value == "" || password_1.value == "") {
    alert("Vui lòng nhập đầy đủ thông tin");
  }
  if(password.value != password_1.value) {
    alert("Nhập lại mật khẩu không đúng");
  }

  e.preventDefault();

  var obj = {
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function(success){
    window.location.replace('../dang_nhap/dangnhap.html');
    
    alert("Đăng ký thành công")
  })
  .catch(function(err){
    alert("Đăng ký không thành công")
  });
  console.log(obj);
});
