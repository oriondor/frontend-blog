

function check_if_user_logged_in(){
	//status['user'] = false;
	//Установить так же значение кнопки
	if(status['user']){
		headers['Authorization']='Token '+status['token'];
		$('.login_button').text(status['user']);
		return true;
	}else{
		delete headers['Authorization'];
		$('.login_button').attr('onclick',"load_login_page()");
		$('.login_button').text("Log In");
		return false;
	}
}


function load_login_page(){
	if(status['user']){
		$('.content').removeClass('login');
		load_main_page();
	}else{
		$('.content').addClass('login');
		$('.content').load('login.html');
	}
}

function login_user(username,password){
	let login_url = HOST+'/auth/';
	$.ajax({
		method:"POST",
		url:login_url,
		data:{username:username,password:password},
		success:function(data){
			var token = data['token'];
			if(token){
				status['token']=token;
				status['user']=username;
				check_if_user_logged_in();
				load_main_page();
			}else{
				status['user']=false;
				$('#errors').append('<div class="alert alert-danger" role="alert"> \
					 Seems like there\'re some unexpected error\
					</div>');
			}
		},
		error:function(data){
			status['user']=false;
			if(data.status==400){
				$('#errors').append('<div class="alert alert-danger" role="alert"> \
					 Try again with different credentials!\
					</div>');
			}
			console.log(data.status);
		}
	});
}