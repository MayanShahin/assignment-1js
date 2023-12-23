
var para1 = document.getElementById("para1");
var para2 = document.getElementById("para2");
function changeImage() {
   var inp = document.getElementById("inp");
   var enteredText = inp.value;
   para1.innerText = enteredText + ", This text is changed using the innerText property. ";
   para2.innerHTML = " <u> " + enteredText + " </u> " + ", <b> Be Yourself . <b> <br> ";
}

