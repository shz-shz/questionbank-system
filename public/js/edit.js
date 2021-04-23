var answers = document.querySelector('.answers')
var url = location.search.substr(1)

var type = url.split('&')[2] //获取要求改的题的类型
type = decodeURI(type)
type = type.split('=')[1]

var answerarea = document.querySelector('#answer_text')
var select = document.querySelector('select')
var options = document.querySelector('#options')
var topic = document.querySelector('#topic')
var blank_area = document.querySelector('#blank_area')
var blanks = document.querySelector('#blanks')
topic.innerHTML = topic.getAttribute('value')

var selected = url.split('&')[1] //根据获取到的题的tag自动选中标签
selected = selected.split('=')[1]
if (selected == 0) select.children[0].setAttribute('selected', 'selected')
else if (selected == 1) select.children[1].setAttribute('selected', 'selected')
else if (selected == 2) select.children[2].setAttribute('selected', 'selected')
else if (selected == 3) select.children[3].setAttribute('selected', 'selected')

if (type == '单选') {
	answerarea.style.display = 'none' //隐藏简答题的答案显示框
	answerarea.removeAttribute('name') //去除name属性阻止简答题的答案表单提交

	blank_area.style.display = 'none' //隐藏填空题答案显示框

	originanswer = answerarea.getAttribute('value').substr(0, 1)
	if (originanswer == 'A') answers.children[1].setAttribute('checked', 'checked')
	else if (originanswer == 'B') answers.children[3].setAttribute('checked', 'checked')
	else if (originanswer == 'C') answers.children[5].setAttribute('checked', 'checked')
	else if (originanswer == 'D') answers.children[7].setAttribute('checked', 'checked')
} else if (type == '简答') {
	options.style.display = 'none' //隐藏选项输入表单
	options.children[2].setAttribute('value', 'null') //将存储4个选项的表单提交值为null
	options.children[4].setAttribute('value', 'null')
	options.children[6].setAttribute('value', 'null')
	options.children[8].setAttribute('value', 'null')

	answers.style.display = 'none' //隐藏单选题的答案界面
	answers.children[1].removeAttribute('name') //去除单选题的答案单选按钮中的name属性阻止提交
	answers.children[3].removeAttribute('name')
	answers.children[5].removeAttribute('name')
	answers.children[7].removeAttribute('name')

	blank_area.style.display = 'none' //隐藏填空题答案显示框

	answerarea.innerHTML = answerarea.getAttribute('value')
	answerarea.setAttribute('name', 'answer') //为简答题答案提交表单加上name属性来提交更新后的答案
} else if (type == '填空') {
	options.style.display = 'none' //隐藏选项输入表单
	options.children[2].setAttribute('value', 'null') //将存储4个选项的表单提交值为null
	options.children[4].setAttribute('value', 'null')
	options.children[6].setAttribute('value', 'null')
	options.children[8].setAttribute('value', 'null')

	answers.style.display = 'none' //隐藏单选题的答案界面
	answers.children[1].removeAttribute('name') //去除单选题的答案单选按钮中的name属性阻止提交
	answers.children[3].removeAttribute('name')
	answers.children[5].removeAttribute('name')
	answers.children[7].removeAttribute('name')

	blank_area.style.display = 'block'
	var blank_area_param = blanks.getAttribute('param').split('/!')
	var blank_number = blank_area_param.length

	for (var i = 0; i < blank_area_param.length; i++) { //根据获取的答案长度自动生成对应数量的节点
		var newnode_label = document.createElement('label')
		newnode_label.setAttribute('class', 'label')
		newnode_label.innerHTML = '第' + (i + 1) + '空:'
		var newnode_input = document.createElement('input')
		newnode_input.setAttribute('type', 'text')
		newnode_input.setAttribute('name', 'answer' + (i + 1))
		newnode_input.setAttribute('class', 'input_text')
		newnode_input.setAttribute('id', 'answer' + (i + 1))
		newnode_input.setAttribute('placeholder', '请输入第' + (i + 1) + '空答案')
		newnode_input.setAttribute('value', blank_area_param[i])
		blanks.appendChild(newnode_label)
		blanks.appendChild(newnode_input)
	}

	answerarea.style.display = 'none' //隐藏简答题的答案显示框
	answerarea.removeAttribute('name') //去除name属性阻止简答题的答案表单提交
}

var analysisarea = document.querySelector('#analysis') //将获取到的题目分析填入分析表单中

analysisarea.innerHTML = analysisarea.getAttribute('value')


var blank_add_button = document.querySelector('#blank_add')
var blank_rmv_button = document.querySelector('#blank_rmv')

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

blank_rmv_button.addEventListener('click', function () { //-按钮
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
