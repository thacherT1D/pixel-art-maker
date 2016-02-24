var body = document.getElementsByTagName('body')[0];
var wrapper = document.createElement('section');
body.appendChild(wrapper);
// wrapper.style.width = '560px';
// wrapper.style.width = '450px';
var heightWidth = '11.1%';

for(var i = 0; i < 3; i++){
  for(var j = 0; j < 16; j++){
    var squares = document.createElement('div');
    squares.style.height = heightWidth;
    squares.style.width = heightWidth;
    // squares.style.float = 'left';
    squares.style.paddingTop = '10%';
    squares.style.margin = '0% 0.5% 0px 0px';
    squares.style.display = 'inline-block';
    squares.style.border = '1px solid black';
document.getElementsByTagName('section')[0].appendChild(squares);
 }
}

var palette = document.createElement('section');
body.appendChild(palette);

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple','pink','grey']

for(var i = 0; i < 1; i++){
  for(var j = 0; j < 8; j++){
    var paletteSquares = document.createElement('div');
    paletteSquares.style.height = heightWidth;
    paletteSquares.style.width = heightWidth;
    // squares.style.float = 'left';
    paletteSquares.style.paddingTop = '10%';
    paletteSquares.style.margin = '2% 0.5% 0px 0px';
    paletteSquares.style.display = 'inline-block';
    paletteSquares.style.border = '1px solid black';
    paletteSquares.style.backgroundColor = colors[j];
    paletteSquares.addEventListener('click',targetingColor);
    document.getElementsByTagName('section')[1].appendChild(paletteSquares);
 }
}

var paletteWrapper = document.getElementsByTagName('section')[1];


//PaletteColors
// var lastSquare = document.getElementsByTagName('div');
// lastSquare[lastSquare.length-1].style.backgroundColor = 'blue';
// lastSquare[lastSquare.length-2].style.backgroundColor = 'purple';
// lastSquare[lastSquare.length-3].style.backgroundColor = 'red';

//Do Stuff

function targetingColor(someEvent) {
  saveColor = someEvent.target.style.backgroundColor;
}


var clickSquares = document.querySelector('section');
var saveColor = 'red';
function targeting (event) {
  event.target.style.background = saveColor;
  // console.log(event.target.style.background);
}
clickSquares.addEventListener('click',targeting);
