
function posts_read_stuff(){			
	$('.art-header').attr('onmousedown', 'open_article(this.getAttribute("post-id"))');//!!!
	if(!status['user']){
			$('.art-read').attr('onmousedown', 'load_login_page()');
		}else{
			$('.art-read').attr('onmousedown', 'read(this)');
			let URL = HOST+"/show/read/";
			$.ajax({
				url:URL,
				type:'GET',
				headers:headers,
				success:function(data){
					headers['X-CSRFToken'] = $.cookie('csrftoken');
					$('.article').each(function(){
						if(data['reads'].includes(parseInt($(this).attr('post-id')))){
							console.log()
							$(this).find('.status-read').text('✔');
						}
					});
				}
			});
		}
}
function read(el){
	let readers = parseInt($(el).find('.readers-count').text());
	//console.log(followers);
	if($(el).find('.status-read').text()=='✔'){
		$(el).find('.status-read').text('🔖');
		$(el).find('.readers-count').text(readers-1);
		$.ajax({
			url:HOST+'/show/read/',
			type:"DELETE",
			headers:headers,
			data:{post_id:$(el).parent().attr('post-id')},
			success:function(data){
				console.log(data);
			}
		});
	}else{
		$(el).find('.status-read').text('✔');
		$(el).find('.readers-count').text(readers+1);
		$.ajax({
			url:HOST+'/show/read/',
			type:"POST",
			headers:headers,
			data:{post_id:$(el).parent().attr('post-id')},
			success:function(data){
				console.log(data);
			}
		});
	}
}


