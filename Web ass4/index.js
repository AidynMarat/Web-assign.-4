/*-----------------------------Айдын-------------------------------------*/
function getAdultTickets() {
    var adultTickets = prompt("Enter the number of adult tickets: ");
    var childTickets = prompt("Enter the number of child tickets: ");
    var ZhansayaTickets = prompt("Enter the number of Zhansaya tickets: ");
    var totalCost = adultTickets*10000 + childTickets*5000 + ZhansayaTickets*1000000000000;
    alert("Total Cost: " + totalCost);
}

$(document).ready(function() {
    const toggleButton = $('#toggleButton');
    const myDiv = $('#myDiv');
    const myAudio = $('#myAudio');

    toggleButton.on('click', function() {
        myAudio.trigger('play');
        myDiv.fadeToggle(1000, function() {
            myAudio.trigger('pause');
            myAudio[0].currentTime = 0;
        });
    });
});
$("#ferrisWheel").mouseover(function(){
    var newElem = $('<img width="10%" src="Images/ferris wheel gold.png"> alt="<Images/ferris wheel 2.png"');
    $("#ferrisWheel").replaceWith(newElem);
});
$("#fwg").mouseover(function(){
    var newElem = $('<img width="30%" src="Images/ferris wheel gold.png"> alt="<Images/ferris wheel 2.png"');
    $("#fwg").replaceWith(newElem);
});
$(document).on('keydown', function(){
    $("h6").css("color", "gold");
});
$(document).on('keydown', function(){
    $("h1").css("color", "gold");
});
$(document).on('keydown', function(){
    $("h5").css("color", "gold");
});
$(document).on('keydown', function(){
    $("h4").css("color", "gold");
});
$(document).on('keydown', function(){
    $("li").css("color", "gold");
});
$(document).on('keydown', function(){
    var newIcon = $('<i class="fa-brands fa-youtube fa-beat fa-2xl" style="color: #ffd700;"></i>');
    $("#first").replaceWith(newIcon);
});
$(document).on('keydown', function(){
    var newIcon = $('<i class="fa-brands fa-tiktok fa-bounce fa-2xl" style="color: #ffd700;"></i>');
    $("#second").replaceWith(newIcon);
});
$(document).on('keydown', function(){
    var newIcon = $('<i class="fa-solid fa-phone fa-shake fa-2xl" style="color: #ffd700;"></i>');
    $("#third").replaceWith(newIcon);
});

/*--------------------------------Жансая-----------------------------------------------*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const ticketQuantity = document.getElementById("ticketQuantity");
const incrementButton = document.getElementById("incrementTickets");
const decrementButton = document.getElementById("decrementTickets");

let count = 0;

incrementButton.addEventListener("click", () => {
    count++;
    updateTicketCount();
});

decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateTicketCount();
    }
});

function updateTicketCount() {
    ticketQuantity.value = count;
}
/*--------------------------------Нурболат--------------------------------------------------------------*/ 
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function () {
        const filterType = document.getElementById("filterType");
        const filterAge = document.getElementById("filterAge");
        const filterRating = document.getElementById("filterRating");
        const sortPrice = document.getElementById("sortPrice");
        const attractionsContainer = document.body;
        const originalAttractions = Array.from(document.querySelectorAll(".attraction"));

        const selectedType = filterType.value;
        const selectedAge = filterAge.value;
        const selectedRating = filterRating.value;
        const sortBy = sortPrice.value;

        const filteredAttractions = originalAttractions.filter((attraction) => {
            const type = attraction.getAttribute("data-type");
            const age = attraction.getAttribute("data-age");
            const rating = attraction.getAttribute("data-rating");

            return (selectedType === "all" || selectedType === type) &&
                (selectedAge === "all" || selectedAge === age) &&
                (selectedRating === "all" || selectedRating === rating);
        });

        filteredAttractions.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute("data-price").replace('$', ''));
            const priceB = parseFloat(b.getAttribute("data-price").replace('$', ''));

            if (sortBy === "asc") {
                return priceA - priceB;
            } else {
                return priceB - priceA;
            }
        });

        attractionsContainer.innerHTML = "";

        filteredAttractions.forEach((attraction) => {
            attractionsContainer.appendChild(attraction);
        });
    });
});
