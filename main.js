// link user input to searchQuery
var searchQuery = "";
$.ajax({
  url: '//en.wikipedia.org/w/api.php',
  data: {
    action: 'query',
    list: 'search',
    srsearch: "canada", // NEED TO CHANGE TO USER INPUT
    format: 'json'
  },
  dataType: 'jsonp',
  success: function(data) {
    // link html to search results in a list? 
    // make a for loop
    var searchResult = data.query.search;
    // var displaySearchResultTitle = [];
    var searchMap = {};
    var displayHTMLResult = "";
    for (var i = 0; i < searchResult.length; i++) {
      displayHTMLResult += "<h2><a href=\"http://en.wikipedia.org/wiki/" + searchResult[i].title + "\">" + searchResult[i].title + "</a></h2>" +
        "<p>" + searchResult[i].snippet + "</p>";
      // displaySearchResultTitle.push(searchResult[i].title);
      // searchMap[searchResult[i].title] = searchResult[i].snippet;
    }

    function displaySearchMap() {
      for (var key in searchMap) {
      }
    }
    $("#display").html(displayHTMLResult);
    console.log(searchMap);
  }
});
