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
http.open('GET','http://studentinsha12.imad.hasura-app.io/counter',true);
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
var submit=document.getElementById('submit');
submit.onclick=function() {
	var http=new XMLHttpRequest();
	http.onreadystatechange=function() {
		if(http.readyState===XMLHttpRequest.DONE){
			if(http.status===200){
				var ul=document.getElementById('list');
			    var namesList=http.responseText;
			    namesList=JSON.parse(namesList);
			    var list='';
			    for(var i=0;i<namesList.length;i++){
			       list  +='<li>'+namesList[i]+'</li>';
			   }
			   ul.innerHTML=list;
        	}
		
		}
	}
    var name=document.getElementById('input').value;
    http.open('GET','http://studentinsha12.imad.hasura-app.io/submit_name/?name= '+name,true);
	http.send(); 
}

	
