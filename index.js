let Crawler = require("crawler");
let Thread = require('./src/schema/thread');

let c = new Crawler({
	maxConnections : 10,
	// This will be called for each crawled page
	callback : function (error, res, done) {
		if(error){
			console.log(error);
		}else{
			let $ = res.$;
			// $ is Cheerio by default
			//a lean implementation of core jQuery designed specifically for the server
			console.log($("body").html());
			
			new Thread({
				id: '123',
				name: 'test',
				view: 0,
				reply: 0
			}).save(function(err, instance) {
				console.log(instance);
			});
		}
		done();
	}
});

// Queue just one URL, with default callback
c.queue('http://www.taobao.com');