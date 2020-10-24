let status = {}
//let HOST = 'https://blogger-api-prod.herokuapp.com';
let HOST = 'http://127.0.0.1:8000';
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
	$('.content').load('personal_news.html');
	load_all_news();
}
function load_all_news(){
	$('.content').removeClass('login');
	let URL = HOST+'/show/all/';
	check_if_user_logged_in();
	$('#news').html('');
	$.ajax({
		type:'GET',
		url:URL,
		success:function(data){
			//console.log(data);
			append_news('#news',data);
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
	console.log("Loading subscribed news with headers: ", headers);
	$('#news').html('');
	$.ajax({
		crossDomain: true,
		type: 'GET',
		headers:headers,
		url:URL,
		success:function(data){
			//console.log(data);
			append_news('#news',data);
		},
		error:function(data){
			console.log("Error occuired!")
			console.log(data);
		}
	});
}

function write_new_post(){
	if(!check_if_user_logged_in())
		load_login_page();
	//call modal
	console.log('calling modal here');
}








