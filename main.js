$("#userQuery").keyup(function() {
  // get user input in realtime when user enters something
  var searchQuery = $("#userQuery").val();
  $.ajax({
    url: 'http://en.wikipedia.org/w/api.php',
    data: {
      action: 'query',
      list: 'search',
      srsearch: searchQuery,
      format: 'json'
    },
    dataType: 'jsonp',
    success: function(data) {
      // the api tree is data.query.search
      var searchResult = data.query.search;
      var displayHTMLResult = "";
      // iterate through all the different objects
      for (var i = 0; i < searchResult.length; i++) {
        // push to HTML result
        displayHTMLResult +=
          "<h2>" +
          "<a href=\"http://en.wikipedia.org/wiki/" + searchResult[i].title + "\" target=\"_blank\">" + searchResult[i].title + "</a>" +
          "</h2>" +
          "<p>" + searchResult[i].snippet + "</p>";
      }
      $("#display").html(displayHTMLResult);
    }
  });
});
