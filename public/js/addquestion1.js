var type = document.querySelector('.types')
var options = document.querySelector('#options')
var answers = document.querySelector('.answers')
var blank_area = document.querySelector('#blank_area')
var answer_text = document.querySelector('#answer_text')
var blanks = document.querySelector('#blanks')

answer_text.style.display = 'none' //默认不显示简答题答案输入框
blank_area.style.display = 'none' //默认不显示填空题答案输入框

type.children[1].addEventListener('click', function () {
	//选择单选按钮
	answers.style.display = 'block' //显示单选题答案输入
	answer_text.style.display = 'none' //隐藏简答题答案输入
	blank_area.style.display = 'none' //隐藏填空题答案输入
	options.style.display = 'block' //显示单选题选项信息输入

	options.children[2].removeAttribute('value') //去除掉单选题选项信息默认提交的value值
	options.children[4].removeAttribute('value')
	options.children[6].removeAttribute('value')
	options.children[8].removeAttribute('value')
	answers.children[1].setAttribute('name', 'answer') //将单选题的单选按钮加上name属性来进行表单提交
	answers.children[3].setAttribute('name', 'answer')
	answers.children[5].setAttribute('name', 'answer')
	answers.children[7].setAttribute('name', 'answer')

	for (var i = 0; i < blanks.children.length; i = i + 2) {
		blanks.children[i + 1].removeAttribute('name') //去除填空题的name属性防止提交
	}

	answer_text.removeAttribute('name') //去除简答题的表单中的name属性阻止提交
})
type.children[3].addEventListener('click', function () { //选择填空题按钮
	answers.style.display = 'none' //隐藏单选题答案输入
	answer_text.style.display = 'none' //隐藏简答题答案输入
	blank_area.style.display = 'block' //显示填空题答案输入
	options.style.display = 'none' //隐藏单选题选项信息输入

	options.children[2].setAttribute('value', 'null') //将单选题选项信息默认提交值变为null(最好提交一个值因为数据库格式需要)
	options.children[4].setAttribute('value', 'null')
	options.children[6].setAttribute('value', 'null')
	options.children[8].setAttribute('value', 'null')

	answers.children[1].removeAttribute('name') //将单选题的答案提交表单中的name属性去除阻止提交
	answers.children[3].removeAttribute('name')
	answers.children[5].removeAttribute('name')
	answers.children[7].removeAttribute('name')

	for (var i = 0, j = 1; i < blanks.children.length; i = i + 2, j++) {
		blanks.children[i + 1].setAttribute('name', 'answer' + j) //去除填空题的name属性防止提交
	}

	answer_text.removeAttribute('name') //去除简答题的表单中的name属性阻止提交
})
type.children[5].addEventListener('click', function () {
	//选择简答按钮
	answers.style.display = 'none' //隐藏单选题答案输入
	answer_text.style.display = 'block' //显示简答题答案输入
	blank_area.style.display = 'none' //隐藏填空题答案输入
	options.style.display = 'none' //隐藏单选题选项信息输入

	options.children[2].setAttribute('value', 'null') //将单选题选项信息默认提交值变为null(最好提交一个值因为数据库格式需要)
	options.children[4].setAttribute('value', 'null')
	options.children[6].setAttribute('value', 'null')
	options.children[8].setAttribute('value', 'null')
	answers.children[1].removeAttribute('name') //将单选题的答案提交表单中的name属性去除阻止提交
	answers.children[3].removeAttribute('name')
	answers.children[5].removeAttribute('name')
	answers.children[7].removeAttribute('name')

	for (var i = 0; i < blanks.children.length; i = i + 2) {
		blanks.children[i + 1].removeAttribute('name') //去除填空题的name属性防止提交
	}

	answer_text.setAttribute('name', 'answer') //将简答题的答案提交表单加上属性name来提交答案
})

var blank_add_button = document.querySelector('#blank_add')
var blank_rmv_button = document.querySelector('#blank_rmv')
var blank_number = 1

blank_add_button.addEventListener('click', function () { //+按钮
	blank_number = blank_number + 1
	var newnode_label = document.createElement('label')
	newnode_label.setAttribute('class', 'label')
	newnode_label.innerHTML = '第' + blank_number + '空:'
	var newnode_input = document.createElement('input')
	newnode_input.setAttribute('type', 'text')
	newnode_input.setAttribute('name', 'answer' + blank_number)
	newnode_input.setAttribute('class', 'input_text')
	newnode_input.setAttribute('id', 'answer' + blank_number)
	newnode_input.setAttribute('placeholder', '请输入第' + blank_number + '空答案')
	blanks.appendChild(newnode_label)
	blanks.appendChild(newnode_input)
})

blank_rmv_button.addEventListener('click', function () {//-按钮
	if (blank_number == 1)
		return
	else {
		var removed_node = blanks.children[blanks.children.length - 1]
		blanks.removeChild(removed_node)
		var removed_node = blanks.children[blanks.children.length - 1]
		blanks.removeChild(removed_node)
		blank_number = blank_number - 1
	}
})
