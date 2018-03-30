(function( $ ) {
  $.fn.myPlugin = function() {
    var model = { procedure: JSON.parse(<?= data ?>) };
    $(document).ready(function () {
      ko.applyBindings(model);
    });

    $(document).ready(function(){
    $('#myTable').dataTable();
    });
  };
  
})( jQuery );

