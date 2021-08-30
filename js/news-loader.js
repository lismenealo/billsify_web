// News feed loader
function loadJSON(callback) {

    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/news.json', true); // Getting the news feed from file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
function createNewsItem(image, title, author, description, url, date, source) {

    return "\t\t\t\t\t\t\t<li>\n" +
        "\t\t\t\t\t\t\t\t<!-- New -->\n" +
        "\t\t\t\t\t\t\t\t<article class=\"box highlight\">\n" +
        "\t\t\t\t\t\t\t\t\t<header>\n" +
        "\t\t\t\t\t\t\t\t\t\t<h3 class=\"title\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<span class=\"date\">" + date + " </span>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<a href=\"" + url + "\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t" + title + "\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</a>\n" +
        "\t\t\t\t\t\t\t\t\t\t</h3>\n" +
        "\t\t\t\t\t\t\t\t\t</header>\n" +
        "\t\t\t\t\t\t\t\t\t<a href=\"" + url + "\" class=\"image left\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<img src=\"" + image + "\" alt=\"Image - " + title + "\" />\n" +
        "\t\t\t\t\t\t\t\t\t</a>\n" +
        "\t\t\t\t\t\t\t\t\t<p>\n" +
        "\t\t\t\t\t\t\t\t\t\t" + description + "\n" +
        "\t\t\t\t\t\t\t\t\t</p>\n" +
        "\t\t\t\t\t\t\t\t\t<footer>\n" +
        "\t\t\t\t\t\t\t\t\t\t<p class=\"author\">" + author + "</p>\n" +
        "\t\t\t\t\t\t\t\t\t</footer>\n" +
        "\t\t\t\t\t\t\t\t</article>\n" +
        "\t\t\t\t\t\t\t</li>\n";

}

function createNewsFeed(news) {
    let newsFeedHTML = "<ul class=\"divided\">\n";
    
    newsFeedHTML += createNewsItem();
    newsFeedHTML += "\t\t\t\t\t\t</ul>"
}

loadJSON(function(response) {
    // Parse JSON string into object
    let actual_JSON = JSON.parse(response);
    console.log(actual_JSON);
});