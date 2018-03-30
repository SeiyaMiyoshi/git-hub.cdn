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
  
  $.ready(function() {
      var table = $('#employee_list').DataTable( {
          deferRender:    true,
          scrollY:        200,
          scrollX:        true,
          scrollCollapse: true,
          scroller:       true
      } );
   
      new $.fn.dataTable.FixedColumns( table, {
        leftColumns: 2
      });
  });
})( jQuery );

