var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var coloredReindeer = "";

// i changed the id from "coloredReindeer" to "Reindeer".
var hohohoElement = document.getElementById("Reindeer");

for (var i = 0; i < reindeer.length; i++) {
  hohohoElement.innerHTML += `<ul><li> ${colors[i] + reindeer[i]} </li></ul>`;
}






