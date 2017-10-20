
var comment_submit_btn=document.getElementById('submit_comment');
comment_submit_btn.onclick=function() {
    var http=new XMLHttpRequest();
	http.onreadystatechange=function() {
		if(http.readyState===XMLHttpRequest.DONE){
			if(http.status===200){
				var div=document.getElementById('comment_section');
			    var commentsList=http.responseText;
			    commentsList=JSON.parse(commentsList);
			    var list='';
			    for(var i=0;i<commentsList.length;i++){
			       list  +='<p>'+commentsList[i]+'</p>'+'<hr>';
			   }
			   div.innerHTML=list;
        	}
		
		}
	}
    var comment=document.getElementById('comment_box').value;
    http.open('GET','http://localhost:8080/comments/?com= '+comment,true);
	http.send(); 

}