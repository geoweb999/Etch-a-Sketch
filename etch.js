var numBoxes = 16;
var borderSize = 2;
var length = 960 / numBoxes - 2 * borderSize;

// Get the container element
var container = document.getElementById("container");

// Set the border size and calculate the box width and height
var borderSize = 2;
var boxWidth = (960 - (4 * borderSize)) / 4; // 960 is the container width
var boxHeight = (960 - (4 * borderSize)) / 4; // 960 is the container height

// Create the 4x4 matrix
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    // Create a box element
    var box = document.createElement("div");
    box.className = "box box-border"; // Add the .box-border class

    // Set the width and height of the current box
    box.style.width = boxWidth + "px";
    box.style.height = boxHeight + "px";

    // Set the --border-size CSS variable for the current box
    box.style.setProperty("--border-size", borderSize + "px");

    box.addEventListener("mouseenter", function() {
        var computedStyle = window.getComputedStyle(this);
        var currentColor = computedStyle.backgroundColor;
        var rgbValues = currentColor.match(/\d+/g);
        var r = parseInt(rgbValues[0]);
        var g = parseInt(rgbValues[1]);
        var b = parseInt(rgbValues[2]);
        var darkerR = Math.round(r * 0.9);
        var darkerG = Math.round(g * 0.9);
        var darkerB = Math.round(b * 0.9);
        this.style.backgroundColor = `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
      });

    // Add the box to the container
    container.appendChild(box);
  }
}
