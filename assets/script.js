$(document).ready(function () {
    // variables
    var container = $("div.container");
    var timeblock = $($("#timeblock").html());
    var currentHour = moment().hour();

    // create current date
    var currentDay = moment().format("dddd | MMMM Do YYYY | hh:mm a");
    $("#currentDay").append(currentDay); 

    // create time blocks
    for (var i = 0; i < 9; i++) {

        var hour = moment(i + 9, "HH");
        var newTimeblock = timeblock.clone();

        // hour block
        newTimeblock.find("div.hour p").text(hour.format("hA"));

        // text area
        newTimeblock.find("textarea")
            .attr("id", `textarea-${i+9}`)
            .text(JSON.parse(localStorage.getItem(`textarea-${i+9}`)));


        // append to container
        container.append(newTimeblock);
    }

    
});