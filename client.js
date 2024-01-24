let cam = document.getElementById("cam");
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (s) {
      console.log(s);
      cam.srcObject = s;
    })
    .catch((err) => {
      alert("You need to allow cam access to use this app!");
    });
} else {
  console.log("Please allow camera access");
}
