var chai = require('chai');
var expect = require('chai').expect;
var assert = require('chai').assert;
var word = require('../index');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai)

describe('Sanitize', function(){

	
	it('returns lowercase of a string', function(){
		var inputWord = 'HELLO WORLD';
		var sanitizedWord = word.sanitize(inputWord);
		
		expect(sanitizedWord).to.equal('hello world');
		expect(sanitizedWord).to.not.equal('hello earth');
		expect(sanitizedWord).to.be.a('string');
		expect(sanitizedWord).to.not.be.a('number');
		expect(sanitizedWord).to.contain('hello');
	});
	
	it('removes any hyphen', function(){
		var inputWord = 'HELLO-WORLD';
		var outputWord = word.sanitize(inputWord);
		
		expect(outputWord).to.equal('hello world');
	});
})

describe('Tokenize', function(){
	
	it('returns an array of words', function(){
		var sentence = 'hello world';
		var tokenizedSentence = word.tokenize(sentence);
		
		//TODO: fix assert!
		//expect(tokenizedSentence).to.equal(['hello', 'world']);
	});
})

/* Slett denne og bruk en stub i stedet i stedet

describe('Github info', function(){
	it.only('returns repo info from github', function(done){
		word.info(function(reply){
			console.log(reply);
			expect(reply.language).to.equal('JavaScript');
			expect(reply.watchers).to.equal(214);
			done();  
			// function done og done er callback og gjør at 
			//console log faktisk skrives ut på skjermen
		})
	})
}) */

describe('Info Language test av stub', function(){
	it('returns language info of the repo', function(done){
		var ghRepo = {
			"language": "Assembly"
			//vi ber bare om denne, ikke hele json-strengen
		};
		var stub = sinon.stub().callsArgWith(0, ghRepo);
		
		word.infoLang(stub, function(reply){
			console.log(reply);
			expect(reply).to.equal('Language is: Assembly');
			done();
		})
	})
})