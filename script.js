// Your JS goes her
//test line.
var body = document.getElementsByTagName('body')[0];
var tiles = [];
for (var i = 0; i < 72; i++){
  var randColor = getRandomColor();
  tiles[i] =document.createElement('div');
  tiles[i].style.width='11.1%';
  tiles[i].style.float='left';
  tiles[i].style.paddingBottom = '11.1%';
  if ((i % 2)===0) {
    tiles[i].style.backgroundColor = randColor;

    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    body.appendChild(tiles[i]);
  };
}
