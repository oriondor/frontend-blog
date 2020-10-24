function append_news(selector,data){
	console.log(data);
	for(let i in data['news']){
		let new_html = "\
		<div class='article' onmousedown='open_article("+data['news'][i]['id']+")'>\
		<div class='art-header'>"+data['news'][i]['header']+"</div>\
		<div class='art-text'>"+data['news'][i]['text']+"</div>\
		<div class='art-date'>"+data['news'][i]['date']+"</div>\
		<div class='art-read'>&#128278; "+data['news'][i]['totalR']+" readers</div>\
		</div>\
		";
 		$(selector).append(new_html);
	}
}