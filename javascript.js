var myIndex = 0;
var myIndex1 = 0;
var myIndex2 = 0;
var myIndex3 = 0;
var myIndex4 = 0;

topleftimages();
toprightimages();
bottomleftimages();
bottommiddleimages();
bottomrightimages();

function topleftimages() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex-1].style.display = "block";
    setTimeout(topleftimages, 2000); // Change image every 2 seconds
}


function toprightimages() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex1++;
  if (myIndex1 > x.length) {
    myIndex1 = 1;
  }
  x[myIndex1 -1].style.display = "block";
  setTimeout(toprightimages,3000);
}

function bottomleftimages() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex2++;
  if (myIndex2 > x.length) {
    myIndex2 = 1;
  }
  x[myIndex2 -1].style.display = "block";
  setTimeout(bottomleftimages,2500);
}

function bottommiddleimages() {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex3++;
  if (myIndex3 > x.length) {
    myIndex3 = 1;
  }
  x[myIndex3 -1].style.display = "block";
  setTimeout(bottommiddleimages,2500);
}

function bottomrightimages() {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex4++;
  if (myIndex4 > x.length) {
    myIndex4 = 1;
  }
  x[myIndex4 -1].style.display = "block";
  setTimeout(bottomrightimages,2500);
}
