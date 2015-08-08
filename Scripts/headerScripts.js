function navMouseOver(color) {
    var header = document.getElementById("topNavBar");
    header.style.borderBottom = "2px solid "+color;
    var author = document.getElementById("authorName");
    author.style.color = color;
}
function exitNav() {
    var header = document.getElementById("topNavBar");
    header.style.borderBottom = "2px solid #dadada";
    var author = document.getElementById("authorName");
    author.style.color = "#eeeeee";
}