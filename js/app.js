var ouibounce;
var isFired = false;

$(function () {

      ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
      aggressive: false,
      timer: 0,
      callback: function() {
         isFired = true;
       }
    });
    $('body').on('click', function() {
        $('#ouibounce-modal').hide();
      });
      $('#ouibounce-modal .modal-footer2').on('click', function() {
        $('#ouibounce-modal').hide();
      });
      $('#ouibounce-modal .modal2').on('click', function(e) {
        e.stopPropagation();
      });

});

$(window).on('scroll', function(){
  var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

  var scrollPercent = (s / (d - c)) * 100;
  if(scrollPercent  > 42.00) {
          if (!isFired) {
            ouibounce.fire();
          }
      }

});
