var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Pool=require('pg').Pool;

var config= {
    user: 'studentinsha12',
    database: 'studentinsha12',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
}

var articles={
	'article-one': {
					title: 'Article-One|Afreen Rahman',
					heading: 'Article One',
					content:`<p>
				                This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
				            </p>
				            <p>
				                This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
				            </p>
				            <p>
				                This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
				            </p>`
				},
	'article-two': {

					title: 'Article-Two|Afreen Rahman',
					heading: 'Article Two',
					content:`<p>
				                This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
				            </p>
				            <p>
				                This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
				            </p>
				            <p>
				                This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
				            </p>`
				},
	'article-three': {

					title: 'Article-Three|Afreen Rahman',
					heading: 'Article Three',
					content:`<p>
				                This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
				            </p>
				            <p>
				                This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
				            </p>
				            <p>
				                This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
				            </p>`
				}			
};
 

function createTemplate(data) {
 var title=data.title;
 var heading=data.heading;
 var content=data.content;
 var template=`<!DOCTYPE html>
		<html>
		    <head>
		        <title>${title}</title>
		        <meta name="viewport" content="width-device-width,initial-scale=1.0">
		        <link href="/ui/style.css" rel="stylesheet"/>
		        <link href="https://fonts.googleapis.com/css?family=Lato: 100,300,400,700|Luckiest+Guy|Oxygen:300,400" rel="stylesheet">
		    </head>
		    <body>
		        <header>
		             <nav> 
		                <ul class="">
		                    <li><a href="/">Home</a></li>
		                    <li><a href="/article-one">Article One</a></li>
		                    <li><a href="/article-two">Article Two</a></li>
		                    <li><a href="/article-three">Article Three</a></li>
		                </ul>           
		            </nav>
		            <div class="article_head">
						<h1>${heading}</h1>
					</div>
		        </header>
		        <section>
		            ${content}
		        </section>
	            <section>
		            <textarea placeholder="enter your comment" id="comment_box" rows="5" cols="35"></textarea>
		            <button type="button" id="submit_comment" class="button">Post</button>
		            <div id="comment_section">
		            </div>
        		</section>
        		<script type="text/javascript" src="/ui/article.js">
	    		</script>  
		    </body>
		</html>
		`;
return template;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var commentsList=[];
app.get('/comments',function(req,res) {
	var com=req.query.com;
	commentsList.push(com);
	res.send(JSON.stringify(commentsList));
});

var counter=0;
app.get('/counter',function(req,res) {
    counter+=1;
    res.send(counter.toString());
});

var names_list=[];
app.get('/submit_name',function(req,res) {
    var name=req.query.name;
    names_list.push(name);
    res.send(JSON.stringify(names_list));
});


var pool= new Pool(config);
app.get('/test-db',function(req,res) {
    pool.query('SELECT * FROM test',function(err,result) {
        if(err)
           res.status(500).send(err.toString());
        else
            res.send(JSON.stringify(result.rows));
    });
});

app.get('/articles/:articleName',function(req,res) {
	var articleName=req.params.articleName;
	//SELECT * FROM article WHERE title= '' 
    pool.query("SELECT * FROM article WHERE title= $1"+[articleName],function(err,result) {
        if(err)
          res.status(500).send(err.toString());
        else if(result.rows.length===0)
          res.status(404).send('Article Not Found');
        else {
            var articleData=result.rows[0];
            res.send(createTemplate(articleData));
        }
        
    });
    
});



//<<<<<<< HEAD
app.get('/ui/main.js',function(req,res) {
    res.sendFile(path.join(__dirname,'ui','main.js'));
});


//>>>>>>> master
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/article.js',function(req,res) {
    res.sendFile(path.join(__dirname,'ui','article.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port =80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
