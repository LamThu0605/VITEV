// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  
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
var login = document.getElementById("login");
var dangky = document.getElementById("signin");

dangky.addEventListener("click", (e) => {
  window.location.replace('../dang_ky/dangky.html');
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  if(email.value == "" || password.value == "") {
    alert("Vui lòng nhập đầy đủ thông tin");
  }
  var obj = {
    email: email.value,
    password: password.value,
  };

  console.log(obj);

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      var aaaa = success.user.uid;
      localStorage.setItem("uid", aaaa);
      console.log(aaaa);
      window.location.replace('../1_Monitor/1__Trangchu.html');
    })
    .catch(function (err) {
      alert("login error" + err);
    });

  console.log(obj);
});
