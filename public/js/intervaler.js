function interval_specific_calls(timeout){
	setInterval(function(){
		if($('.subscr-news-label').hasClass('active')){
			let URL = '/show/subscribed/';
			head_request(URL,'.subscr-news-label');
		}else if($('.all-news-label').hasClass('active')){
			let URL = '/show/all/';
			head_request(URL,'.all-news-label');
		}else{

		}

	},timeout);

}

function head_request(URL,selector){
	URL = HOST+URL;
	$.ajax({
		type:'HEAD',
		url:URL,
		headers:headers,
		success:function(data, textStatus, xhr){ 
			let h_cl = xhr.getResponseHeader('Content-Length');
			let h_lm = xhr.getResponseHeader('Last-Modified');
			if(status['Content-Length']!=h_cl){
				status['Content-Length']=h_cl;
				update_blog_followers_and_article_readers(selector);
			}
			if(status['Last-Modified']!=h_lm){
				status['Last-Modified']=h_lm;
				load_full_in_block(selector);	
			}
		}
	});
}

function update_blog_followers_and_article_readers(selector){
	switch(selector){
		case '.all-news-label':
		load_all_news();
		break;
		case '.subscr-news-label':
		load_subscribed_news();
		break;
		default:
		console.log("Nowhere to update!");
	}
}

function load_full_in_block(selector){
	switch(selector){
		case '.all-news-label':
		full_reload_all();
		break;
		case '.subscr-news-label':
		full_reload_subsc();
		break;
		default:
		console.log("Nowhere to update!");
	}
}






