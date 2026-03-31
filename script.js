var captions = [
  "Snow Land",
  "Wintery Road",
  "Snowy Road",
  "Winter in the Country"
];

var descriptions = [
  "After an overnight snowstorm, the land looks peaceful and bright. Winter may seem quiet, but it creates a beautiful and magical scene.",
  "The most beautiful phenomenon of winter is snow. Every snowflake is different, which makes each snowy road feel special.",
  "Driving on a snowy road can feel calm and silent. The white landscape and soft light make winter roads look stunning.",
  "Winter in the country has a special charm. The snowy fields and trees create a quiet and relaxing atmosphere."
];

var fileNames = [
  "winterland1",
  "winterland2",
  "winterland3",
  "winterland4"
];

var imageList = [];
var openList = "<li class='gallery-item'>";
var closeList = "</li>";
var closeText = "Click This To Close";

for (var i = 0; i < fileNames.length; i++) {
  imageList.push(
    openList +
    "<img src='images/" + fileNames[i] + ".jpg' alt='" + captions[i] + "'>" +
    "<div class='caption'>" + captions[i] + "</div>" +
    "<div class='description-bar' data-index='" + i + "'>" + descriptions[i] + "</div>" +
    closeList
  );
}

document.getElementById("gallery").innerHTML = imageList.join("");

var infoBox = document.getElementById("infobox");
var infoHeading = document.getElementById("infoheading");
var infoText = document.getElementById("infotext");
var closeBox = document.getElementById("closebox");

closeBox.innerHTML = closeText;

var descriptionBars = document.querySelectorAll(".description-bar");

for (var j = 0; j < descriptionBars.length; j++) {
  descriptionBars[j].addEventListener("click", function () {
    var index = this.getAttribute("data-index");

    infoHeading.innerHTML = captions[index];
    infoText.innerHTML = descriptions[index];
    closeBox.innerHTML = closeText;
    infoBox.style.visibility = "visible";
  });
}

closeBox.addEventListener("click", function (event) {
  event.preventDefault();
  infoBox.style.visibility = "hidden";
});
