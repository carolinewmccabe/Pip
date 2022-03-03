$(document).ready(function(){
  $('.container').mousemove(function(event){
    var colour = '#'+Math.floor(Math.random()*16777215).toString(16);
    $('#cursor').css('top', event.pageY).css('left', event.pageX).css('background', colour);
  });
});
