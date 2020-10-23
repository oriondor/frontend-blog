
$(function(){
	//let URL = 'http://localhost:8000/show/';
	let URL = "https://blogger-api-prod.herokuapp.com/show/";
	load_main_page(URL);
});


function load_main_page(URL){
	$.ajax({
		method:'GET',
		url:URL,
		success:function(data){
			console.log(data);
		},
		error:function(data){
			console.log("Error occuired!")
			console.log(data);
		}
	});
}