function sendMail() {
  var params = {
    surname: document.getElementById("surname").value,
    name: document.getElementById("name").value,
    Email: document.getElementById("Email").value,
    phonecall: document.getElementById("phonecall").value,
    Messega: document.getElementById("Messega").value,
  };

  const serviceID = "service_4qjpbmo";
  const templateID = "template_cf0zvkr";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("surname").value = "";
        document.getElementById("name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("phonecall").value = "";
        document.getElementById("Messega").value = "";
        console.log(res);
        alert(" Cảm ơn bạn vì đã góp ý")

    })
    .catch(err=>console.log(err));

}

