$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover({
    trigger: 'hover',
    placement: function () {
      var placements = ["top", "bottom"]
      return placements[Math.floor(Math.random() * placements.length)];
    }
  });
})
;
