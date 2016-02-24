// Your JS goes her

var body = document.getElementsByTagName('body')[0];
var tiles = []
for (var i = 0; i < 63; i++){
  tiles[i] =document.createElement('div');
  tiles[i].style.width='11.1%';
  tiles[i].style.float='left';
  tiles[i].style.paddingBottom = '11.1%';
  if ((i % 2)===0) {
    tiles[i].style.backgroundColor = 'rgb(225 ,' + 52+(i) + ',0 )';
  }else{
    tiles[i].style.backgroundColor = 'rgb(0 , '+(75+(i*12))+", " + (169+(10*i)) + ")";
  }
   body.appendChild(tiles[i]);
 }
