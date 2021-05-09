var questions = document.querySelector('.question-list')
var filters = document.querySelector('.filter')
filters.children[0].addEventListener('click', function () {
	//显示全部题目
	for (var i = 0; i < questions.children.length; i++) {
		questions.children[i].style.display = 'block'
	}
	for (var i = 0; i <= 3; i++) {
		filters.children[i].setAttribute('class', 'filter_button')
	}
	this.setAttribute('class', 'filter_checked')
})
filters.children[1].addEventListener('click', function () {
	//显示HTML题目
	for (var i = 0; i < questions.children.length; i++) {
		if (1 == questions.children[i].getAttribute('tag')) questions.children[i].style.display = 'block'
		else questions.children[i].style.display = 'none'
	}
	for (var i = 0; i <= 3; i++) {
		filters.children[i].setAttribute('class', 'filter_button')
	}
	this.setAttribute('class', 'filter_checked')
})
filters.children[2].addEventListener('click', function () {
	//显示CSS题目
	for (var i = 0; i < questions.children.length; i++) {
		if (2 == questions.children[i].getAttribute('tag')) questions.children[i].style.display = 'block'
		else questions.children[i].style.display = 'none'
	}
	for (var i = 0; i <= 3; i++) {
		filters.children[i].setAttribute('class', 'filter_button')
	}
	this.setAttribute('class', 'filter_checked')
})
filters.children[3].addEventListener('click', function () {
	//显示JavaScript题目
	for (var i = 0; i < questions.children.length; i++) {
		if (3 == questions.children[i].getAttribute('tag')) questions.children[i].style.display = 'block'
		else questions.children[i].style.display = 'none'
	}
	for (var i = 0; i <= 3; i++) {
		filters.children[i].setAttribute('class', 'filter_button')
	}
	this.setAttribute('class', 'filter_checked')
})

var answer_area = document.querySelectorAll('.answer')
for (var i = 0; i < answer_area.length; i++) {
	if (answer_area[i].children[0].getAttribute('tag') == 3) {//优化填空题答案显示方式，避免出现分隔符
		answer_area[i].innerHTML = '<span tag="3">正确答案:</span>' + answer_area[i].children[0].getAttribute('answer').replace(new RegExp('/!', 'g'), ' ')
	}
}

for (var i = 0; i < answer_area.length; i++) {
	if (answer_area[i].children[0].getAttribute('tag') == 3) {//优化填空题答案显示方式，避免出现分隔符
		answer_area[i].innerHTML = '<span tag="3">正确答案:</span>' + answer_area[i].innerHTML.replace(new RegExp('%%', 'g'), '/')
	}
}