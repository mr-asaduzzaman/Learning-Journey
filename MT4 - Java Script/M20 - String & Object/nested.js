const Boy = {
    name: "Asaduzzaman",
    IdNumber: 541,
    favourite: {
        Subject: ["Bangla", "English", "Math"],
        place: ["Coxs Bazar", "Kuakata"],
        Game: {
            indoor: ["Carrom", "Ludu"],
            outdoor: ["Football", "Cricket", "Badminton"]
        }
    }
};



console.log(Boy);
console.log(Boy.favourite);
console.log(Boy.favourite.Game);
console.log(Boy.favourite.Game.outdoor); //Output will be the value of outdoor

Boy.favourite.Game.outdoor[2] = "Kabadi"
console.log(Boy.favourite.Game.outdoor[2]);