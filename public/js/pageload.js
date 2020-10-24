let status = {}
let HOST = 'https://blogger-api-prod.herokuapp.com';
//let HOST = 'http://127.0.0.1:8000';
let headers = {
'Accept': 'application/json'
}

$(function(){
	if(getQueryVariable('article')){

	}else{
		load_main_page();
	}
	
});
function load_main_page(){
	let URL = HOST+'/show/all/';
	check_if_user_logged_in();
	$.ajax({
		type:'GET',
		url:URL,
		success:function(data){
			$('.content').load('recent_news.html');
			console.log(data);
		},
		error:function(data){
			console.log("Error occuired!")
			console.log(data);
		}
	});
}

function load_subscribed_blogs(){
	let URL = HOST+'/show/subscribed/';
	check_if_user_logged_in();
	console.log(headers);
	$.ajax({
		crossDomain: true,
		type: 'GET',
		headers:headers,
		dataType: 'json',
		url:URL,
		success:function(data){
			$('.content').load('personal_news.html');
			console.log(data);
		},
		error:function(data){
			console.log("Error occuired!")
			console.log(data);
		}
	});
}