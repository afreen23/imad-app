/*console.log('Loaded!');
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
*/

var button=document.getElementById('submit_button');
button.onclick=function() {
	console.log("loaded");
}


