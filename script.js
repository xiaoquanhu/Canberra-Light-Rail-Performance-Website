// by default the current slide index is the first one 1
var slideIndex = 1;

// Next/previous controls for the cursor, n can only be +1/-1
function plusSlides(n) {
  // change current index by -1 or +1
  showSlides(slideIndex += n);
}

// if one thubnail is clicked, this slide will be displayed
function currentSlide(n) {
  // change current index to n
  showSlides(slideIndex = n);
}

// according to current index to show that index slide
function showSlides(n) {
  // use array to store all slides
  var slides = document.getElementsByClassName("mySlides");
  // use array to store all thumbnails
  var dots = document.getElementsByClassName("demo");
  // get the caption text as slide information
  var captionText = document.getElementById("caption");

  // if the right cursor click is beyoud the last slide, make the array index back to 1
  if (n > slides.length) {slideIndex = 1}

  // if the left cursor click is less than first one, make array index back to last one
  if (n < 1) {slideIndex = slides.length}

  // ensure all slides are hidden now unless some one is clicked
  // or make last clicked one hidden again
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // ensure all the thumbnail slides' opacity is 0.4, only the hovered one or clicked one's opacity is 1
  // or make last clicked thumbnail class name back to demo
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // change this slide.style.display to "block" so this picture can be displayed
  // before this change, all slides are hidden because their display is none
  // be default the first one is displayed
  slides[slideIndex -1].style.display = "block";

  // change this thumbnail slide class to ative so its opacity can be 1
  // be default the first one opacity is 1
  dots[slideIndex -1].className += " active";

  // display alt information in caption container
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// this array is used to store total number of rating, 5-star, 4-star, 3-star, 2-star, 1-star
var numbers = [100, 50, 25, 20, 3, 2];
var average = recalculate().toFixed(2);

// if browser click the rating button, show thank you
function showthanks() {
  alert("Thanks for your rating, may I get more feedback ^_^ ");
}

// 5-star button is clicked change the side right number and total, change the number and calculate average
function fivestar() {
  numbers[0] ++;
  numbers[1] ++;
  recalculate();
  var text = document.getElementById("totalnumberofratings");
  text.innerHTML = "so far, there are " + numbers[0] + " user ratings";
  document.getElementById("ratingscore").innerHTML = "Average User Rating  :   " + average;
  document.getElementById("5starnum").innerHTML = ""+numbers[1];
  document.getElementById("bar-5").style.width = ((numbers[1]+0.0)/numbers[0])*100 + "%";
}

// 4-star button is clicked change the side right number and total, change the number and calculate average
function fourstar() {
  numbers[0] ++;
  numbers[2] ++;
  recalculate();
  var text = document.getElementById("totalnumberofratings");
  text.innerHTML = "so far, there are " + numbers[0] + " user ratings";
  document.getElementById("ratingscore").innerHTML = "Average User Rating  :   " + average;
  document.getElementById("4starnum").innerHTML = ""+numbers[2];
  document.getElementById("bar-4").style.width = ((numbers[2]+0.0)/numbers[0])*100 + "%";
}

// 3-star button is clicked change the side right number and total, change the number and calculate average
function threestar() {
  numbers[0] ++;
  numbers[3] ++;
  recalculate();
  var text = document.getElementById("totalnumberofratings");
  text.innerHTML = "so far, there are " + numbers[0] + " user ratings";
  document.getElementById("ratingscore").innerHTML = "Average User Rating  :   " + average;
  document.getElementById("3starnum").innerHTML = ""+numbers[3];
  document.getElementById("bar-3").style.width = ((numbers[3]+0.0)/numbers[0])*100 + "%";
}

// 2-star button is clicked change the side right number and total, change the number and calculate average
function twostar() {
  numbers[0] ++;
  numbers[4] ++;
  recalculate();
  var text = document.getElementById("totalnumberofratings");
  text.innerHTML = "so far, there are " + numbers[0] + " user ratings";
  document.getElementById("ratingscore").innerHTML = "Average User Rating  :   " + average;
  document.getElementById("2starnum").innerHTML = ""+numbers[4];
  document.getElementById("bar-2").style.width = ((numbers[4]+0.0)/numbers[0])*100 + "%";
}

// 1-star button is clicked change the side right number and total, change the number and calculate average
function onestar() {
  numbers[0] ++;
  numbers[5] ++;
  recalculate();
  var text = document.getElementById("totalnumberofratings");
  text.innerHTML = "so far, there are " + numbers[0] + " user ratings";
  document.getElementById("ratingscore").innerHTML = "Average User Rating  :   " + average;
  document.getElementById("1starnum").innerHTML = ""+numbers[5];
  document.getElementById("bar-1").style.width = ((numbers[5]+0.0)/numbers[0])*100 + "%";
}

// recalculate average rating
function recalculate() {
  average = ((5*numbers[1] + 4*numbers[2] + 3*numbers[3] + 2*numbers[4] + 1*numbers[5] + 0.0)/numbers[0]).toFixed(2);
}

