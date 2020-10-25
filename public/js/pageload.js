let status = {}
//let HOST = 'https://blogger-api-prod.herokuapp.com';
let HOST = 'http://127.0.0.1:8000';
let headers = {
'Accept': 'application/json'
}

$(function(){
	if(getQueryVariable('article')){
		open_article(getQueryVariable('article'));
	}else{
		load_main_page();
	}
	interval_specific_calls(10000);
	
});
function load_main_page(){
	$('.content').load('personal_news.html');
	load_all_news();
}
function load_all_news(){
	$('.content').removeClass('login');
	let URL = HOST+'/show/all/';
	check_if_user_logged_in();
	$('#news').html('');
	$('#blogs').html('');
	$.ajax({
		type:'GET',
		url:URL,
		success:function(data){
			//console.log(data);
			append_news('#news',data);
			append_blogs('#blogs',data);
			blogs_follows_stuff();
			posts_read_stuff();
			return data;
		},
		error:function(data){
			console.log("Error occuired!")
			console.log(data);
		}
	});
}
function load_subscribed_news(){
	let URL = HOST+'/show/subscribed/';
	check_if_user_logged_in();
	//console.log("Loading subscribed news with headers: ", headers);
	$('#news').html('');
	$('#blogs').html('');
	$.ajax({
		crossDomain: true,
		type: 'GET',
		headers:headers,
		url:URL,
		success:function(data){
			//console.log(data);
			append_news('#news',data);
			append_blogs('#blogs',data);
			blogs_follows_stuff();
			posts_read_stuff();
			return data;
		},
		error:function(data){
			console.log("Error occuired!")
			console.log(data);
		}
	});
}

function open_article(article_id){
	$('.content').html('<div id="article"></div>');
	let URL = HOST+'/show/all/'+article_id;
	$.ajax({
		url:URL,
		type:'GET',
		headers:headers,
		success:function(data){
			append_article('#article',data);
		}
	});

}

function all_and_subscription_news_toggle(){
	if(!status['user']){
			$('#subscribed_news').attr('onchange','load_login_page()');
		}else{
			$('#subscribed_news').attr('onchange','load_subscribed_news()');
		}
		$('#all_news').attr('onchange','load_all_news()');
}

function write_new_post(){
	if(!status['user']){
			load_login_page();
		}else{
			$('#AddPostModal').modal('show');
			$("#new-post-form").submit(function(event) {
	  			event.preventDefault();
	  			//console.log($('#title_post'));
	  			if($('#title_post').val()!="" && $('#text_post').val()!=""){
	  				create_new_post($('#title_post').val(), $('#text_post').val());
	  			}
	  		});
		}
}















