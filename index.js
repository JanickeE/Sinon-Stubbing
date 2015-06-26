exports.sanitize = function(word){
	return word.toLowerCase().replace(/-/g, ' ');
}

exports.tokenize = function(word){
	return word.split(' ');
}

exports.info = function(callback){
	console.log('Inside infoFunc');
	//NOTE: selv om vi er iine i infoFunc her, så kjøres altså ikke
	//resten av denne koden, den er stubbet ut, fordi det 
	//ikke er API'et vi tester, vi tester hvordan vi behandler
	//svaret
	var https = require('https');
	var options = {
		host: 	'api.github.com',
		path:	'/repos/sayanee/build-podcast',
		method: 	'GET',
		headers:	{
				'User-Agent': 'sayanee'
		}
	};
	var str = '';
	
	//implementation
	https.request(options, function(response){
		response.on('data', function(data){
			str += data;
		})
	response.on('end', function(){
		//console.log(str);
		callback(JSON.parse(str));
		})
	
	response.on('error', function(error){
		console.log(error);
		callback(error);
		})
	})
	.end();
}

exports.infoLang = function(infoFunc, callback){
	infoFunc(function(reply){
		callback('Language is: ' + reply.language);
	})
}