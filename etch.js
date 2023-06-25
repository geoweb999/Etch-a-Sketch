var numBoxes = 4096;
var rows = 64
var borderSize = 0;
var length = 960 / numBoxes - 2 * borderSize;
marginSize = 1;

// Get the container element
var container = document.getElementById("container");

rowsButton.addEventListener("click", function() {
    var rows = parseInt(prompt("Enter the number of rows for the matrix:"));
    
    // Clear the existing matrix
    container.innerHTML = "";
    
    // Calculate the box width and height based on the number of rows
    var borderSize = 1;
    var containerSize = 960;
    var boxSize = (containerSize - (rows + 1) * borderSize) / rows;
    
    // Create the matrix
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < rows; j++) {
        // Create a box element
        var box = document.createElement("div");
        box.className = "box box-border"; // Add the .box-border class
  
        // Set the width and height of the current box
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
  
        // Set the --border-size CSS variable for the current box
        box.style.setProperty("--border-size", borderSize + "px");
  
        // Add event listener for hover effect
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
});