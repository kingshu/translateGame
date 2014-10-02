var http = require('http');
var url = require('url');
var request = require('request');

var key = "AIzaSyDuIB59V7YxEIGzM1XUM31eOehB6PQYxI8";

var server = http.createServer( function(req, res) {

    var all_langs = ["af","sq","ar","az","eu","bn","be","bg","ca","zh-CN","zh-TW","hr","cs","da","nl","eo","et","tl","fi","fr","gl","ka","de","el","gu","ht","iw","hi","hu","is","id","ga","it","ja","kn","ko","la","lv","lt","mk","ms","mt","no","fa","pl","pt","ro","ru","sr","sk","sl","es","sw","sv","ta","te","th","tr","uk","ur","vi","cy","yi"];

    res.writeHead(200, {
        'content-type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    });


    var parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname == "/game") {

        var targetLang = "is";

        var urlencMsg = encodeURIComponent(parsedUrl.query.string);
        var gt_url = "https://www.googleapis.com/language/translate/v2?key="+key+"&source=en&target="+targetLang+"&q=Hello";
        
        request.get(gt_url, function(err, response, body) {
            if (err) throw err;

            console.log(response);

            console.log(body);
        
        });


    }   
 
    res.end('Hello Http');


});

server.listen(8080);
