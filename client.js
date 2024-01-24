let cam = document.getElementById("cam");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (s) {
      cam.srcObject = s;
      cam.play();
      cam.addEventListener("play", function () {
        canvas.width = cam.videoWidth;
        canvas.height = cam.videoHeight;
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
  ctx.drawImage(video, 0, 0);
  setTimeout(draw, 10, video);
}
