var body = document.getElementsByTagName('body')[0];
var wrapper = document.createElement('section');
body.appendChild(wrapper);
var heightWidth = '10%';

for(var i = 0; i < 8; i++){
  var row = document.createElement('div');
  row.style.clear = 'both';
  wrapper.appendChild(row);
  for(var j = 0; j < 8; j++){
    var square = document.createElement('div');
    square.style.height = heightWidth;
    square.style.width = heightWidth;
    square.style.float = 'left';
    square.style.paddingTop = '10%';
    square.style.margin = '0.5% 0.5% 0px 0px';
    // square.style.display = 'inline-block';
    square.style.border = '1px solid black';
    square.style.boxSizing = 'border-box';
    row.appendChild(square);
    // document.getElementsByTagName('section')[0].appendChild(square);
  }
}

var palette = document.createElement('section');
body.appendChild(palette);
palette.style.clear = 'both';

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple','pink','grey']

for(var i = 0; i < 1; i++){
  for(var j = 0; j < 8; j++){
    var paletteSquare = document.createElement('div');
    paletteSquare.style.height = heightWidth;
    paletteSquare.style.width = heightWidth;
    // square.style.float = 'left';
    paletteSquare.style.paddingTop = '10%';
    paletteSquare.style.margin = '2% 0.5% 0px 0px';
    paletteSquare.style.display = 'inline-block';
    paletteSquare.style.border = '1px solid black';
    paletteSquare.style.backgroundColor = colors[j];
    paletteSquare.addEventListener('click',targetingColor);
    document.getElementsByTagName('section')[1].appendChild(paletteSquare);
  }
}
var paletteWrapper = document.getElementsByTagName('section')[1];

function targetingColor(someEvent) {
  saveColor = someEvent.target.style.backgroundColor;
}
var clickSquare = document.querySelector('section');
var saveColor = 'red';
function targeting (event) {
    // console.log(event.target.childElementCount);
    if(event.target.childElementCount === 0){
    event.target.style.background = saveColor;
  }
}
clickSquare.addEventListener('click',targeting);
