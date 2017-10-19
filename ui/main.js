console.log('Loaded!');
//<<<<<<< HEAD
var button=document.getElementById('button');
button.onclick=function() { 
	var http=new XMLHttpRequest();
http.onreadystatechange=function() {
	if(http.readyState===XMLHttpRequest.DONE){
		if(http.status===200){
			var counter=http.responseText;
	        var span=document.getElementById('count');
	        span.innerHTML=counter.toString();
		}

	}
  }
http.open('GET','http://localhost:8080/counter',true);
http.send(); 
}



//=======
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
//>>>>>>> master

