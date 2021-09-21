vars.default_marks['rect'] = function(scope) {

  var this_params = {};

  this_params.type = 'rect';
  this_params.rendering = 'svg';
  this_params.radius = 5;

  this_params.enter = function(selection, params, vars, mark_id) {

    selection.each(function(d, i) {

      var mark_params = utils.mark_params(params, vars, d, i);

      d3.select(this)
        .attr('id', d.__mark_id)
        .classed("items__mark__rect", true)
        .attr("x", mark_params.x)
        .attr("y", mark_params.y)
        .attr("height", mark_params.height)
        .attr("width", mark_params.height)
        .style("stroke", mark_params.stroke)
        .style("fill", mark_params.fill)
        .attr("transform", "translate(" +  mark_params.translate + ")rotate(" +  mark_params.rotate + ")")
        .each(utils.bind_events);

    });

  };

  this_params.update = function(selection, params, vars, mark_id) {

    selection.each(function(d, i) {

    var mark_params = utils.mark_params(params, vars, d, i);

      d3.select(this)
        .classed("highlighted", function(d, i) { return d.__highlighted; })
        .classed("highlighted__adjacent", function(d, i) { return d.__highlighted__adjacent; })
        .classed("selected", function(d, i) { return d.__selected; })
        .classed("selected__adjacent", function(d, i) { return d.__selected__adjacent; })
        .classed("selected__secondary", function(d, i) { return d.__selected__secondary; })
        .attr("x", mark_params.x)
        .attr("y", mark_params.y)
        .attr("height", mark_params.height)
        .attr("width", mark_params.height)
        .style("stroke", mark_params.stroke)
        .style("fill", mark_params.fill)
        .attr("transform", "translate(" +  mark_params.translate + ")rotate(" +  mark_params.rotate + ")");

      });
  };

  this_params.exit = function(selection) {
    selection.remove();
  };

  return this_params;

}
