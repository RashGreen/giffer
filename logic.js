// I want to create buttons that pull up gifs of animals
// I also want to create buttons that pull up comic book gifs
// I also want to create a section that pulls up popular gifs
// I also would like to add music to the site.
// Create a document.ready function... to load the page as it comes in.
$(document).ready(function(){

    // create arrays for the topics. ACTUALLY MAKE ONE ARRAY... ITS A WASTE OF TIME TO MAKE MULTIPLES #DRY
    // one for each topic: Animals, Comics, pop culture.
    var giphers = [
        "pitbulls", "labradors", "leopards", "panthers", "Snarff", "Panthers", "Koi Fish",
        "condors", "Flight of the Conchords", "dragons", "iguana", "Nova", "Green Lantern", "Thor", "Black Panther", "Batman",
        "Silicon Valley", "Always Sunny", "Happy Endings", "Lodge 49",
        "The Daily Show", "Game of Thrones", "Daredevil",
    ];
    
    
    // next I'll need to create a function to add the buttons to the page
    function buttonMaker(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();
        
        // Then I need to loop through the choices and have them display to the page
        for (let i = 0; i < giphers.length; i++) {
            var a = $("<button class='text-center'>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
            console.log("test");
        }
        
    };
    // create an "on click" to create a user generated button. freeze the gifs so the users click can activate them
    $(document).on("click", ".new-button", function() {
        $("#gifs").empty();
        $(".new-button").removeClass("active");
        $(this).addClass("active");
    

        // here I'll create the media query for giphy --- remember your api key.
        var type = $(this).attr("data-type");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=RwNz3Bykfac4sNF4ZQ0uo67jXQRPQJvX&limit=10";

        // create an ajax request to query the giphy api
        // use the get method to get the response
        $.ajax({
            url: queryURL,
            method: "GET"
        })
         // then take the response and loop through it to display the images
        .then(function(response) {
            var results = response.data;
            
            for (var i = 0; i < results.length; i++) {
                // create space for the images to 'land' in 
                const gifDiv = $("<div class=\"gif\">");

                
                var p = $("<p>").text("Raiting " + ratings);
                
                var animate = results[i].images.fixed_height.url;
                var still = results[i].images.fixed_height_still.url;
                // use jQuery to create an image tag to append the gifs to.
                var gifImage = $("<img>");
                // display the ratings from the results of the AJAX request
                var ratings = results[i].rating;
                //use the attribute method to control the state in which the gigs roll in.
                gifImage.attr("src", still);
                gifImage.attr("data-still", still);
                gifImage.attr("data-animate", animate);
                gifImage.attr("data-state", still);
                gifImage.addClass("new-gif");
                // append the ratings to the const gifDiv
                gifDiv.append(p);
                // append those images to the div created by the 'gifDiv'
                gifDiv.append(gifImage);
                // append everything to the div on the html page
                $("#gifs").append(gifDiv);
            }
        });
    });
    // I'll need to create an on click event for the gifs. one that makes them active when clicked
    // Create an on click funtion to animate/freeze the images
    $(document).on("click", ".new-gif", function() {
        // create a constant for the state of the gif its currently still
        const state = $(this).attr("data-state");
        // if the gif is still when the user clicks on it, begin to animate.
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        // if the user clicks again set the 'state' of the image back to still
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
    
    // here I am adding an on click event to add items to the array
    $("#add-gif").on("click", function(event) {
        event.preventDefault();
        var newGif = $("input").eq(0).val();
        // attempted to set the length of the array to push new items into the giphers
        if (newGif.length < 100) {
            giphers.push(newGif);
        }
        buttonMaker(giphers, "buttons", "#buttons");
    });
    buttonMaker(giphers, "buttons", "#buttons")
});
