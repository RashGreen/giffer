// I want to create buttons that pull up gifs of animals
// I also want to create buttons that pull up comic book gifs
// I also want to create a section that pulls up popular gifs
// I also would like to add music to the site.

// the first thing i should do is create arrays for the topics.
// one for each topic: Animals, Comics, pop culture.
const animals = [
    "pitbulls", "labradors", "leopards", "panthers", "Snarff", "Panthers", "Koi Fish",
    "condors", "falcons", "dragons", "iguana", "skunk"
];
const comics = [
    "Nova", "Green Lantern", "Thor", "Black Panther", "Batman", 
];

const popTV = [
    "Silicon Valley", "Always Sunny", "Happy Endings", "Lodge 49",
    "The Daily Show", "Game of Thrones", "Daredevil"
];
// next I'll need to creat a function to add the buttons to the page
function buttonMaker(arrayToUse, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    
// Then I need to loop through the choices and have them display to the page
    for (let i = 0; i < array.length; i++) {
        const a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", arrayToUse[i]);
        a.text(arrayToUse[i]);
        $(areaToAddTo).append(a);
    }
}

// create an ajax request to query the giphy api
// make sure that 
//I'll need to create an on click event for the gifs. one that makes them active when clicked
// 