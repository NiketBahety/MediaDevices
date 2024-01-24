let cam = document.getElementById("cam");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (s) {
      cam.srcObject = s;
      cam.addEventListener("play", function () {
        draw(this);
      });
    })
    .catch((err) => {
      alert("You need to allow cam access to use this app!");
    });
} else {
  console.log("Please allow camera access");
}

function draw(video) {
  ctx.drawImage(video, canvas.width, canvas.height);
  setTimeout(draw, 10, video);
}
