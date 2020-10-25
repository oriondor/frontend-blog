function append_news(selector,data){
	//console.log(data);
	for(let i in data['news']){
		let new_html = "\
		<div class='article' post-id='"+data['news'][i]['id']+"'>\
		<div class='art-header' post-id='"+data['news'][i]['id']+"'>"+data['news'][i]['header']+"</div>\
		<div class='art-text'>"+data['news'][i]['text']+"</div>\
		<div class='art-date'>"+data['news'][i]['date']+"</div>\
		<div class='art-read'><span class='status-read'>🔖</span> <span class='readers-count'>"+data['news'][i]['totalR']+"</span> readers</div>\
		</div>\
		";
 		$(selector).append(new_html);
	}
}

function append_blogs(selector,data){
	console.log(data);
	for(let i in data['blogs']){
		let new_html = "\
		<div class='blog' blog-id='"+data['blogs'][i]['id']+"'>\
		<span>"+data['blogs'][i]['name']+"</span>\
		<span class='badge badge-light followers-count'>"+data['blogs'][i]['totalF']+"</span>\
		</div>\
		";
 		$(selector).append(new_html);
	}
}

function append_article(selector,data){
	let art_html = "<div class='art-header'>"+data['article']['header']+"</div>\
		<div class='art-text'>"+data['article']['text']+"</div>\
		<div class='art-date'>"+data['article']['date']+"</div>\
		<div class='art-read'><span class='status-read'>🔖</span> <span class='readers-count'>"+data['article']['totalR']+"</span> readers</div>";
 		$(selector).append(art_html);
}