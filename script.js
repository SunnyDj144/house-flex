console.log("House Flex Loaded");

const images = document.querySelectorAll(".draggable");

images.forEach(img => {

img.addEventListener("mousedown",function(e){

let shiftX = e.clientX - img.getBoundingClientRect().left;
let shiftY = e.clientY - img.getBoundingClientRect().top;

img.style.position = "absolute";
img.style.zIndex = 1000;

document.body.append(img);

moveAt(e.pageX, e.pageY);

function moveAt(pageX, pageY){
img.style.left = pageX - shiftX + "px";
img.style.top = pageY - shiftY + "px";
}

function onMouseMove(e){
moveAt(e.pageX, e.pageY);
}

document.addEventListener("mousemove", onMouseMove);

img.onmouseup = function(){
document.removeEventListener("mousemove", onMouseMove);
img.onmouseup = null;
};

});

img.ondragstart = function(){
return false;
};

});

// Booking alert

document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Booking Successful! Our team will contact you.");

this.reset();

});