var colorSlider = document.getElementById("color-slider");
var colorBox = document.getElementById("color-box");

colorSlider.addEventListener("input", function() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var color = "rgb(" + red + ", " + green + ", " + blue + ")";
  colorBox.style.backgroundColor = color;
});
