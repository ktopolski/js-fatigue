// "marked" package is required to complete this lesson. I was doing it offline, so here's poor man's version.
var poorMansMarked = function(markdown) {
  var html =
    "<p>" +
    markdown
      .replace(/[\*|_]{2}(.+)[\*|_]{2}/g, "<strong>$1</strong>")
      .replace(/[\*|_](.+)[\*|_]/g, "<em>$1</em>") +
    "</p>";

  return html;
}

markDownBlinkToHtml = function(markdown) {
  var html = poorMansMarked(markdown);
  var blinkedHtml = html.replace(/@@([^@@]+)@@/g, "<blink>$1</blink>");

  return blinkedHtml;
}

module.exports = markDownBlinkToHtml
