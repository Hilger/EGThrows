(function ($) {
  var i, json, center_span;

  $.getJSON('EGThrowArchive.json', function(json) {
    $center_span = $('#center-span')

    $center_span
    .append($(document.createElement('div'))
      .attr({'class' : 'pure-u unit'})
      .append($(document.createElement('h1'))
        .text('Archive')));

    for (i=json.length-1; i>=0; i--) {

      $center_span
        .append($(document.createElement('div'))
        .attr({'class' : 'pure-u unit'})
        .append([
          $(document.createElement('h2'))
          .append($(document.createElement("span"))
            .text(json[i].player)
            .attr({'class' : 'highlighted'}))
          .append(" threw on ")
          .append($(document.createElement("span"))
            .attr({'class' : 'highlighted'}).text(json[i].date)),
          $(document.createElement('h2')).text("in the ")
          .append($(document.createElement("span"))
            .attr({'class' : 'highlighted'}).text(json[i].league)),
          $(document.createElement('h2')).text("versus ")
          .append($(document.createElement("span"))
            .attr({'class' : 'highlighted'}).text(json[i].versus)),
          $(document.createElement('h2'))
          .append($(document.createElement("a"))
            .attr({'href' : json[i].url})
            .append($(document.createElement("span"))
              .attr({'class' : 'highlighted'})
              .text("Watch it on youtube")))
        ]))
        .append($(document.createElement('div'))
        .attr({'class' : 'unit-border'}));
    }

    $('.unit-border').last().remove();
  })
})(jQuery)