//Carousel Picture 1

var myIndex = 0; carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
} 

//tab
var spans = document.querySelectorAll(".tabheader span")
var divs = document.querySelectorAll(".content div.tab")

//Page1
for (var i = 0; i < spans.length; i++) {
    click(i)
}
function click(i) {
    spans[i].onclick = function () {
        for (var j = 0; j < spans.length; j++) {
            spans[j].classList.remove("active")
            divs[j].classList.remove("show")
        }
        this.classList.add("active")
        divs[i].classList.add("show")
    }
} 