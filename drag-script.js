var boxArray = document.getElementsByClassName("taskBox");
var boxes = Array.prototype.slice.call(boxArray);
dragula({ containers: boxes });
