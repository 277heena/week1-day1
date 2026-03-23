let images = [
    "images/winterland1.jpg",
    "images/winterland2.jpg",
    "images/winterland3.jpg",
    "images/winterland4.jpg",
    "images/winterland5.jpg",
    "images/winterland6.jpg",
    "images/central_park.jpg",
    "images/east-village.jpg",
    "images/winterland1.jpg",
    "images/winterland2.jpg"
];

let captions = [
    "Winter Scene 1",
    "Winter Scene 2",
    "Winter Scene 3",
    "Winter Scene 4",
    "Winter Scene 5",
    "Winter Scene 6",
    "Central Park",
    "East Village",
    "Snow View 1",
    "Snow View 2"
];

let descriptions = [
    "A peaceful snowy landscape",
    "Cold winter morning view",
    "Snow covered trees",
    "Beautiful winter path",
    "Chilly nature scene",
    "Frozen forest view",
    "A winter view of Central Park",
    "A calm city winter scene",
    "Another quiet snow scene",
    "A soft and peaceful winter day"
];

let gallery = document.getElementById("gallery");

if (gallery) {
    for (let i = 0; i < images.length; i++) {
        gallery.innerHTML +=
            "<li id='photo" + (i + 1) + "'>" +
            "<img src='" + images[i] + "' alt='" + captions[i] + "'>" +
            "<p class='caption'>" + captions[i] + "</p>" +
            "<p class='description'>" + descriptions[i] + "</p>" +
            "</li>";
    }
}

function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    if (sec < 10) {
        sec = "0" + sec;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (hr == 0) {
        hr = 12;
        ampm = "AM";
    } else if (hr < 12) {
        ampm = "AM";
    } else if (hr == 12) {
        ampm = "PM";
    } else {
        hr = hr - 12;
        ampm = "PM";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm;

    document.getElementById("clock").innerHTML = time;
}

if (document.getElementById("clock")) {
    currentTime();
    setInterval(currentTime, 1000);
}
