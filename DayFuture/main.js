alert("this script works");

var pathWidth = 10;
var wall = 2;
var outerWall = 2;
var width = 25;
var height = 25;
var delay = 1;
var x = width/2|0;
var y  = height/2|0;
var seed = Math.random()*1000000|0;
var wallColor = '#d24';
var pathColor = '#222a33';

randomGen = function(seed) {
  if (seed===undefined) {
    var seed=performance.now();
  }//end if
  return function(){
    seed = (seed * 9301 +49297) % 233280
    return seed/233280
  }//end return function
}//end randomGen

init = function(){
  offset = pathWidth/2+outerWall
  map = []
  var canvas = document.querySelector('ul')
  ctx = canvas.getContext('2d') //gets a 2d drawing canvas
  canvas.width = outerWall*2+width*(pathWidth+wall)-wall
  canvas.height = outerWall*2+height*(pathWidth+wall)-wall
  ctx.fillStyle = wallColor
  ctx.fillRect(0,0,canvas.width,canvas.height)
  random = randomGen(seed)
  ctx.strokeStyle = pathColor
  ctx.lineCap = 'square'
  ctx.lineWidth = pathWidth
  ctx.beginPath()
  for(var i=0;i<height*2;i++){
    map[i] = []
    for(var j=0;j<width*2;j++){
      map[i][j] = false
    }
  }
  map[y*2][x*2] = true
  route = [[x,y]]
  ctx.moveTo(x*(pathWidth+wall)+offset,
             y*(pathWidth+wall)+offset)
} // end init
init()