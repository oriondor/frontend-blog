
function blogs_follows_stuff(){
	if(!status['user']){
			$('.blog').attr('onmousedown', 'load_login_page()');
		}else{
			$('.blog').attr('onmousedown', 'follow(this)');
			let URL = HOST+"/show/follow/";
			$.ajax({
				url:URL,
				type:'GET',
				headers:headers,
				success:function(data){
					headers['X-CSRFToken'] = $.cookie('csrftoken');
					$('.blog').each(function(){
						if(data['follows'].includes(parseInt($(this).attr('blog-id')))){
							$(this).addClass('followed');
						}
					});
				}
			});
		}
}
function follow(el){
	let followers = parseInt($(el).find('.followers-count').text());
	//console.log(followers);
	if($(el).hasClass('followed')){
		$(el).removeClass('followed');
		$(el).find('.followers-count').text(followers-1);
		$.ajax({
			url:HOST+'/show/follow/',
			type:"DELETE",
			headers:headers,
			data:{blog_id:$(el).attr('blog-id')},
			success:function(data){
				//console.log(data);
				full_reload_subsc();
			}
		});
	}else{
		$(el).addClass('followed');
		$(el).find('.followers-count').text(followers+1);
		$.ajax({
			url:HOST+'/show/follow/',
			type:"POST",
			headers:headers,
			data:{blog_id:$(el).attr('blog-id')},
			success:function(data){
				console.log(data);
				full_reload_subsc();
			}
		});
	}

}

function full_reload_subsc(){
	if($('.subscr-news-label').hasClass('active')){
		$('#news').html('');
		let URL = HOST+'/show/subscribed/';
		$.ajax({
			type: 'GET',
			headers:headers,
			url:URL,
			success:function(data){
				append_news('#news',data);
			}
		});
	}
}

function full_reload_all(){
		$('#news').html('');
		let URL = HOST+'/show/all/';
		$.ajax({
			type: 'GET',
			headers:headers,
			url:URL,
			success:function(data){
				append_news('#news',data);
			}
		});
	}



