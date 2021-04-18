var questions = document.querySelector('.question-list')
var filters = document.querySelector('.filter')
filters.children[0].addEventListener('click', function () {
	//显示全部题目
	for (var i = 0; i < questions.children.length; i++) {
		questions.children[i].style.display = 'block'
	}
})
filters.children[1].addEventListener('click', function () {
	//显示HTML题目
	for (var i = 0; i < questions.children.length; i++) {
		if (1 == questions.children[i].getAttribute('tag')) questions.children[i].style.display = 'block'
		else questions.children[i].style.display = 'none'
	}
})
filters.children[2].addEventListener('click', function () {
	//显示CSS题目
	for (var i = 0; i < questions.children.length; i++) {
		if (2 == questions.children[i].getAttribute('tag')) questions.children[i].style.display = 'block'
		else questions.children[i].style.display = 'none'
	}
})
filters.children[3].addEventListener('click', function () {
	//显示JavaScript题目
	for (var i = 0; i < questions.children.length; i++) {
		if (3 == questions.children[i].getAttribute('tag')) questions.children[i].style.display = 'block'
		else questions.children[i].style.display = 'none'
	}
})
