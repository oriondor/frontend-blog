function create_new_post(header,text){
	console.log(header,text);
	let URL = HOST+'/show/subscribed/';
	headers['X-CSRFToken'] = $.cookie('csrftoken');
	$.ajax({
		url:URL,
		type:'POST',
		headers:headers,
		data:{header:header,text:text},
		success:function(data){
			console.log(data);
			load_all_news();
			$('#AddPostModal').modal('hide')
		}
	});
}