var body = document.getElementsByTagName('body')[0];
var wrapper = document.createElement('section');
body.appendChild(wrapper);
var heightWidth = '10%';

for(var i = 0; i < 8; i++){
  var row = document.createElement('div');
  row.style.clear = 'both';
  wrapper.appendChild(row);
  for(var j = 0; j < 8; j++){
    var squares = document.createElement('div');
    squares.style.height = heightWidth;
    squares.style.width = heightWidth;
    squares.style.float = 'left';
    squares.style.paddingTop = '10%';
    squares.style.margin = '0.5% 0.5% 0px 0px';
    // squares.style.display = 'inline-block';
    squares.style.border = '1px solid black';
    squares.style.boxSizing = 'border-box';
    row.appendChild(squares);
// document.getElementsByTagName('section')[0].appendChild(squares);
 }
}

var palette = document.createElement('section');
body.appendChild(palette);
palette.style.clear = 'both';

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

function targetingColor(someEvent) {
  saveColor = someEvent.target.style.backgroundColor;
}
var clickSquares = document.querySelector('section');
var saveColor = 'red';
function targeting (event) {
  event.target.style.background = saveColor;
}
clickSquares.addEventListener('click',targeting);
