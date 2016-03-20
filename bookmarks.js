var dls = document.getElementsByClassName('meA');
var s = '';
for(var i=0;i<dls.length;i++){
	var tip = dls[i].previousElementSibling.textContent;
	var a = dls[i].getElementsByTagName('a');
	s = s +'<br/>' + '###'+tip;
	for(var j=0;j<a.length;j++){
		var href = a[j].href;
		var text = a[j].textContent;
		s = s +'<br/>' + '* ['+text+']('+href+')';
	}
	s = s + '<br/>';
}
document.body.innerHTML = s;