console.log('Loaded!');
var img=document.getElementById('madi');
var marginLeft=0;
var interval;
function moveRight() {
    if(marginLeft==1000) {
        clearInterval(interval);
    }
  marginLeft=marginLeft+5;
  img.style.marginLeft= (marginLeft)+'px';
}
img.onclick= function (){
	interval=setInterval(moveRight,100);
}