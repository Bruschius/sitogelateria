$(document).ready(function(){
  /*Area Inserimento Contenuti da Chose.htm*/
  var selected = -1;
    $('#contents').hide();
      $('#0').click(function(){
        if (selected != 0) {
          $('#contents').hide();
          $('#contents').load("chose.htm #0", function(){
            $('#contents').show('slow');
          });
          selected = 0;
        }
      });
      $('#1').click(function(){
        if (selected != 1) {
        $('#contents').hide();
        $('#contents').load("chose.htm #1", function(){
          $('#contents').show('slow');
        });
        selected = 1;
      }
      });
      $('#2').click(function(){
        if (selected != 2) {
        $('#contents').hide();
        $('#contents').load("chose.htm #2", function(){
          $('#contents').show('slow');
        });
        selected = 2;
      }
      });
    /*Fine Area Inserimento Contenuti da Chose.htm*/
    /*Animazioni Menu*/
    $('#0').mouseenter(function(){
      $(this).finish();
      $(this).fadeTo('fast', 1);
    });
    $('#0').mouseleave(function(){
      $(this).finish();
      $(this).fadeTo('fast', 0.65);
    });
    $('#1').mouseenter(function(){
      $(this).finish();
      $(this).fadeTo('fast', 1);
    });
    $('#1').mouseleave(function(){
      $(this).finish();
      $(this).fadeTo('fast', 0.65);
    });
    $('#2').mouseenter(function(){
      $(this).finish();
      $(this).fadeTo('fast', 1);

    });
    $('#2').mouseleave(function(){
      $(this).finish();
      $(this).fadeTo('fast', 0.65);
    });

    /*Fine Animazioni Menu*/
});
